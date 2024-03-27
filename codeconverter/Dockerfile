# Base image
FROM python:3.9-slim

# Install Nginx
RUN apt-get update && apt-get install -y nginx && apt-get clean

# Create a non-root user
RUN useradd -m myuser
USER myuser

# Working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the project files
COPY . .

# Add path to gunicorn to PATH environment variable
ENV PATH="/home/myuser/.local/bin:${PATH}"

# Expose the server port
EXPOSE 8000

# Configure Nginx
COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Command to start Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "codeConverter.wsgi"]



# from bs4 import BeautifulSoup
# soup = BeautifulSoup("<p>Some<b>bad<i>HTML")
# print(soup.prettify())

# from electronvolt import *
# print(me)

# import pendulum
# now_in_paris = pendulum.now('Europe/Paris')
# print(now_in_paris)

# from DateTime import Timezones
# zones = set(Timezones())
# print(zones)

# from MathLibrary import *
# print(fact(5))