# Use the official Ubuntu base image
FROM ubuntu:latest

# Update package lists and install necessary packages
RUN apt-get update && \
    apt-get install -y \
    apt-get install -y neofetch net-tools speedtest-cli\
    neofetch \
    speedtest 

# Run some example commands inside the container
RUN echo "Hello, this is an Ubuntu container." && \
    echo "Running Ubuntu version:" && \
    cat /etc/lsb-release && \
    echo "Current directory:" && \
    pwd && \
    echo "List contents of the current directory:" && \
    ls -l && 

# Set the working directory
WORKDIR /

# Run your script inside the container
CMD ["neofetch"]

# expose an Port to Internet
EXPOSE 9090


# ==================================
# # Use an official Python runtime as a parent image
# FROM python:3.9-slim

# # Set environment variable
# ENV MY_VAR "Hello Docker!"

# # Set working directory
# WORKDIR /app

# # Copy files from host to container
# COPY . /app

# # Install necessary packages and run commands
# RUN apt-get update && \
#     apt-get install -y \
#     curl \
#     wget \
#     git \
#     && rm -rf /var/lib/apt/lists/*

# # Expose a port
# EXPOSE 8080

# # Run command when container launches
# CMD ["python", "app.py"]