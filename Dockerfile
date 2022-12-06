FROM node:latest
WORKDIR /app
COPY . .
RUN apt-get update &&\
 apt-get install -y ca-certificates build-essential autoconf automake libtool nasm make pkg nasm python &&\ 
rm -rf node_modules && mkdir node_modules &&\
npm ci --only=production &&\
npm install --global gatsby-cli && gatsby telemetry --disable &&\
npm run build &&

EXPOSE 8000
CMD ["gatsby", "serve", "-H", "0.0.0.0", "-p", "8000"]