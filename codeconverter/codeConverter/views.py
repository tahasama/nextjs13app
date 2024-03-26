import json
import subprocess
import sys
import io
import re
from concurrent.futures import ThreadPoolExecutor
from matplotlib import pyplot as plt
import base64
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Global variables for caching installed packages
installed_packages_cache = set()

@csrf_exempt
def check_installation_status(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        code = data.get('code', '')
        installation_messages, installing = process_imports(code)

        if installing:
            return JsonResponse({'installation_messages': installation_messages})
        else:
            return JsonResponse({'installation_messages': []})
    else:
        return JsonResponse({'error': 'Invalid request method'})

@csrf_exempt
def execute_python(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        code = data.get('code', '')
        result, images, error = execute_code(code)
        return JsonResponse({'result': result, 'result_images': images, 'error': error})
    else:
        return JsonResponse({'error': 'Invalid request method'})

def process_imports(code):
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

    if missing_packages:
        # Install the missing packages asynchronously
        install_missing_packages(missing_packages)

        # Notify about the installation status
        installation_messages = [f"Installing {pkg}..." for pkg in missing_packages]
        return installation_messages, True
    else:
        return [], False

def execute_code(code):
    with io.StringIO() as stdout_buffer, io.StringIO() as stderr_buffer:
        sys.stdout = stdout_buffer
        sys.stderr = stderr_buffer

        try:
            # Set matplotlib backend and execute the code
            with plt.style.context('ggplot'), plt.rc_context({'backend': 'Agg'}):
                exec(code, globals())

                # Collect all figures and encode them as base64
                images = []
                for fig in plt.get_fignums():
                    img_data = io.BytesIO()
                    plt.figure(fig).savefig(img_data, format='png', bbox_inches='tight')
                    encoded_img = base64.b64encode(img_data.getvalue()).decode('utf-8')
                    images.append(f"data:image/png;base64,{encoded_img}")
                plt.clf()  # Clear the current figure after saving all images

                # Collect stdout output
                result = stdout_buffer.getvalue().strip() or "No output to display."
                error = ''

        except Exception as e:
            result = ''
            error = str(e)

    # Reset stdout and stderr
    sys.stdout = sys.__stdout__
    sys.stderr = sys.__stderr__

    return result, images, error

def install_package(package_name):
    try:
        # Run pip install command
        result = subprocess.run([sys.executable, '-m', 'pip', 'install', package_name], capture_output=True, text=True, check=True)

        # Check if installation was successful
        if result.returncode == 0:
            installed_packages_cache.add(package_name)
            return True
        else:
            return False
    except subprocess.CalledProcessError as e:
        return False

def install_missing_packages(missing_packages):
    with ThreadPoolExecutor() as executor:
        futures = [executor.submit(install_package, package) for package in missing_packages]
        for future in futures:
            future.result()  # Wait for each installation to complete
