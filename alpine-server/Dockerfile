FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . . 

RUN apk add --no-cache curl bash

EXPOSE 80

CMD ["./wait-for-it.sh", "postgres-db:5432", "--", "node", "src/server.js"]
