# Use a slimmer and more secure base image
FROM node:18-slim AS builder

# Set working directory for build context
WORKDIR /app

# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install dependencies using a multi-stage build for a smaller image
RUN --mount=type=bind,source=./package*.json,target=/app/package*.json \
    npm install --production

# Switch to a non-root user with a dedicated user ID and group ID
USER vedansh:vedansh  # Replace with appropriate user/group names and IDs

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 9999

# Start the application (adjust command based on your entrypoint script)
CMD ["npm", "start"]
