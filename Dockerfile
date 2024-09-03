# syntax=docker/dockerfile:1

ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine
LABEL maintainer="Vedansh Khandelwal <https://github.com/offensive-vk/>"
LABEL org.opencontainers.image.source="https://github.com/offensive-vk/UntilEverything"
LABEL image="ntsystems/untileverything:latest"

ENV NODE_ENV production
WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm 

USER node
COPY . .
EXPOSE 7777
CMD ["npm", "run", "dev"]

# syntax=docker/dockerfile:END