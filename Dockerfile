# syntax=docker/dockerfile:1.4
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS base
LABEL maintainer="Vedansh <https://github.com/offensive-vk/>"
LABEL source="https://github.com/offensive-vk/UntilEverything"
ENV NODE_ENV=production
ENV PORT=7777
WORKDIR /usr/src/app
RUN apk add --no-cache bash git openssh
COPY package*.json ./
RUN npm i -g pnpm@10.0.0
RUN pnpm i
COPY --chown=node:node . .
RUN pnpm run build
RUN chown -R node:node /usr/src/app
USER node
EXPOSE ${PORT}
CMD ["pnpm", "start"]
