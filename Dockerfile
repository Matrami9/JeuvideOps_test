# Stage 1 : Build Lassana
FROM node:20-alpine AS build_lassana
WORKDIR /app
RUN apk add --no-cache libc6-compat zlib-dev build-base
COPY ./Two_Ships_Passing_In_The_Night/package*.json ./
RUN npm ci
COPY ./Two_Ships_Passing_In_The_Night ./
RUN npm run build --if-present

# Stage 2 : Build Matrami
FROM node:20-alpine AS build_matrami
WORKDIR /app
COPY ./Space_Invaders/package*.json ./
RUN npm ci
COPY ./Space_Invaders ./
RUN npx parcel build src/index.html -d build --public-url ./ --no-source-maps

# Stage final : Nginx
FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY --from=build_lassana /app/dist /usr/share/nginx/html/Two_Ships_Passing_In_The_Night
COPY --from=build_matrami /app/build /usr/share/nginx/html/Space_Invaders
EXPOSE 80