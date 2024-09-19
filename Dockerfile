# syntax=docker/dockerfile:1

# Build arguments for flexibility
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS base
LABEL maintainer="Vedansh <https://github.com/offensive-vk/>"
LABEL source="https://github.com/offensive-vk/UntilEverything"
LABEL image="untileverything:sep-2024"

# Set environment variables
ENV NODE_ENV production
ENV PORT 7777

# Set working directory
WORKDIR /usr/src/app

# Install essential tools and dependencies
RUN apk add --no-cache bash git openssh

# Copy and install dependencies for both production and development
COPY package*.json ./
RUN npm i -g pnpm@9.0.0

# Install globally required tools
RUN pnpm run install

# Copy the application code after dependencies are installed
COPY --chown=node:node . .

# Build TypeScript files using tsup (for bundling)
RUN pnpm run build

# Set proper file ownership and permissions
RUN chown -R node:node /usr/src/app

# Switch to a non-root user for better security
USER node

# Expose the application's port
EXPOSE ${PORT}

# Command to start the application
CMD ["pnpm","start"]

# syntax=docker/dockerfile:END