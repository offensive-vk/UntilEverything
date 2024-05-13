# syntax=docker/dockerfile:1
FROM ubuntu:latest
LABEL ImageName "UntilEverything"
LABEL maintainer "Vedansh Khandelwal <https://github.com/offensive-vk/>"
LABEL org.opencontainers.image.source "https://github.com/offensive-vk/UntilEverything"
ENV NODE_ENV production
WORKDIR /usr/src/app
RUN sudo apt install npm nodejs -y
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm 

USER user
COPY . .
EXPOSE 9999
CMD ["npm", "start"]
# syntax=docker/dockerfile:END
