import base64
import json
import os
import re
import subprocess
import sys
import io
from concurrent.futures import ThreadPoolExecutor
from matplotlib import pyplot as plt
import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Global variables for caching installed packages
installed_packages_cache = set()

@csrf_exempt
def execute_python(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'})

    data = json.loads(request.body.decode('utf-8'))
    code = data.get('code', '')

    # Check if the code contains any plotting commands
    has_plots = any(('plt.' in line and not '# plt.' in line) or ('sns.' in line and not '# sns.' in line) for line in code.split('\n'))
    for line in code.split('\n'):
        if ' input'+'(' in line:
            result = "Sorry, the 'input' command is not supported. If you have a variable with the name 'input', please change it."
            return JsonResponse({'result': result, 'result_images': [], 'error': '', 'installation_messages': []})

    # Extract import statements from the code
    imported_packages = set()
    for line in code.split('\n'):
        if 'from' in line and 'import' in line:
            match = re.search(r'from\s+(\S+)\s+import', line)
            if match:
                package = match.group(1).split('.')[0]  # Extract the package name before the first '.'
                imported_packages.add(package)
        elif 'import' in line:
            packages = re.findall(r'import\s+(\S+)', line)
            for pkg in packages:
                package = pkg.split('.')[0]  # Extract the package name before the first '.'
                imported_packages.add(package)

    # Check if each imported package is already installed or in cache
    missing_packages = [pkg for pkg in imported_packages if pkg not in installed_packages_cache]

    # Install the missing packages asynchronously
    install_missing_packages(missing_packages)

    # Execute the Python code and collect stdout output
    with io.StringIO() as stdout_buffer, io.StringIO() as stderr_buffer:
        sys.stdout = stdout_buffer
        sys.stderr = stderr_buffer

        try:
            # Set matplotlib backend and execute the code
            with plt.style.context('ggplot'), plt.rc_context({'backend': 'Agg'}):
                exec(code, globals())

                # Collect all figures and encode them as base64
                images = []
                if has_plots:
                    for fig in plt.get_fignums():
                        img_data = io.BytesIO()
                        plt.figure(fig).savefig(img_data, format='png', bbox_inches='tight')
                        encoded_img = base64.b64encode(img_data.getvalue()).decode('utf-8')
                        images.append(f"data:image/png;base64,{encoded_img}")
                    plt.clf()  # Clear the current figure after saving all images

                # Collect stdout output
                result = stdout_buffer.getvalue().strip() or "No output to display."

        except Exception as e:
            result = ''
            error = str(e)
            return JsonResponse({'result': result, 'result_images': [], 'error': error, 'installation_messages': []})

    # Reset stdout
    sys.stdout = sys.__stdout__

    # Return results along with installation status and errors as JSON response
    return JsonResponse({'result': result, 'result_images': images, 'error': '', 'installation_messages': []})


def install_package(package_name):
    try:
        # Run pip install command
        result = subprocess.run([sys.executable, '-m', 'pip', 'install', package_name], capture_output=True, text=True, check=True)

        # Check if installation was successful
        if result.returncode == 0:
            print(f"Successfully installed {package_name}")
            installed_packages_cache.add(package_name)
            return True
        else:
            print(f"Failed to install {package_name}: {result.stderr}")
            return False
    except subprocess.CalledProcessError as e:
        print(f"Error installing {package_name}: {e}")
        return False


def install_missing_packages(missing_packages):
    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(install_package, package) for package in missing_packages]
        for future in futures:
            future.result()  # Wait for each installation to complete


@csrf_exempt
def check_installation(request):
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'})

    data = json.loads(request.body.decode('utf-8'))
    code = data.get('code', '')

    # Extract import statements from the code
    imported_packages = set()
    for line in code.split('\n'):
        if 'from' in line and 'import' in line:
            match = re.search(r'from\s+(\S+)\s+import', line)
            if match:
                package = match.group(1).split('.')[0]  # Extract the package name before the first '.'
                imported_packages.add(package)
        elif 'import' in line:
            packages = re.findall(r'import\s+(\S+)', line)
            for pkg in packages:
                package = pkg.split('.')[0]  # Extract the package name before the first '.'
                imported_packages.add(package)

    # Check if each imported package is already installed or in cache
    missing_packages = [pkg for pkg in imported_packages if pkg not in installed_packages_cache]

    return JsonResponse({'missing_packages': missing_packages})