FROM node:18-alpine AS build

WORKDIR /app
COPY . .

RUN yarn
RUN yarn build