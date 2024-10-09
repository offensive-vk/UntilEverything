FROM ubuntu:24.04
LABEL maintainer="Vedansh <https://github.com/offensive-vk/>"
LABEL source="https://github.com/offensive-vk/UntilEverything"
LABEL image="ntsystems/untileverything:latest"
ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_ENV=development

RUN apt-get update && \
    apt-get install -y \
    curl \
    git \
    openssh-client \
    gpg \
    iputils-ping \
    nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN npm i -g pnpm@9.0.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --frozen-lockfile
RUN pnpm i --lockfile-only
COPY . .
RUN chown -R user:user /usr/src/app
USER user
EXPOSE 7777
CMD ["pnpm", "start"]