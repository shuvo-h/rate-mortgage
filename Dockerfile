FROM node:18-alpine AS build

RUN npm install -g gatsby-cli

WORKDIR /app
COPY . .

RUN npm run build
