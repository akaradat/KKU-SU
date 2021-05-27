# Current node lts version
FROM node:14.17.0-alpine 

# ARG INPUT_APP_ENV

ENV APP_ENV $INPUT_APP_ENV
# ENV APP_ENV Development

WORKDIR /app/frontend
# RUN npm install

COPY . /app/frontend/
# COPY . /app/frontend
RUN npm install

# CMD if [ ${APP_ENV} = production ]; \
#         then \
#         npm install -g http-server && \
#         npm run build && \
#         cd build && \
#         hs -p 8081; \
#         else \
#         npm run start; \
#         fi

# EXPOSE 8081

# CMD npm start
