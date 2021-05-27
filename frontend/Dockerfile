FROM ubuntu:20.04

# Current node lts version
FROM node:14.17.0-alpine 

WORKDIR /app/frontend

COPY package*.json /

RUN npm install

COPY . /app/frontend

EXPOSE 8081

CMD npm start
