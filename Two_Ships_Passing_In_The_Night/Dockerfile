FROM node:20 AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y \
    advzip \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install
COPY . .
RUN npx gulp dist
FROM nginx:alpine
COPY . .
EXPOSE 80