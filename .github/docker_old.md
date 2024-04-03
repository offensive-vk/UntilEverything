```yaml
name: Build and Push Docker Image

on:
  push:
    branches: ["master", "main"]
  pull_request: 
    branches: ["master", "main"]
  schedule:
    - cron: '10 0 * * *'
  workflow_dispatch:
  
jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Login to Docker registry
        uses: docker/login-action@v2
        with:
          username: ntsystems
          password: ${{ secrets.DOCKER_TOKEN }}

      - name: Build Docker image
        run: docker build -t ntsystems/personal .

      - name: Push Docker image
        run: docker push ntsystems/personal:latest

```