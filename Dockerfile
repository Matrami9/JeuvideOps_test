# -- Lassana -- #
FROM node:20 AS builder
WORKDIR /app
RUN apt-get update && apt-get install -y \ advzip \ zlib1g-dev 
COPY Two_Ships_Passing_In_The_Night/package*.json ./
RUN npm install
COPY Two_Ships_Passing_In_The_Night/ .
RUN npx gulp dist

# -- Matrami -- #
FROM node:20 AS builde
WORKDIR /app
COPY Space_Invaders/package*.json ./
RUN npm ci
COPY Space_Invaders/ .
RUN npx parcel build src/index.html --out-dir build --public-url ./ --no-source-maps

FROM nginx:alpine
# Page d'accueil racine
COPY index.html /usr/share/nginx/html/

COPY --from=build-Two_Ships_Passing_In_The_Night /app/dist /usr/share/nginx/html/Two_Ships_Passing_In_The_Night

COPY --from=build-Space_Invaders /app/build /usr/share/nginx/html/Space_Invaders

EXPOSE 80