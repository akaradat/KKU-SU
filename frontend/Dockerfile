# Current node lts version
FROM node:14.17.0-alpine as build

WORKDIR /app/frontend/

COPY . /app/frontend/

RUN npm install

# Multistage Dockerfile

FROM build as dev

ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000

CMD ["npm", "run" ,"start"]

FROM nginx:stable-alpine as run

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/frontend/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]