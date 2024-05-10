# syntax=docker/dockerfile:1
ARG NODE_VERSION=20
FROM node:16-bullseye
LABEL maintainer "Vedansh Khandelwal <https://github.com/offensive-vk/>"
LABEL org.opencontainers.image.source "https://github.com/offensive-vk/UntilEverything"
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]
RUN apt-get update -qq --fix-missing && \
    apt-get -qqy install --allow-unauthenticated gnupg wget && \
    wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
    apt-get update -qq && \
    apt-get -qqy --no-install-recommends install chromium traceroute python make g++ && \
    rm -rf /var/lib/apt/lists/* 
RUN /usr/bin/chromium --no-sandbox --version > /etc/chromium-version
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm 

USER node
COPY . .
EXPOSE 9999
CMD ["npm", "start"]
# syntax=docker/dockerfile:END
