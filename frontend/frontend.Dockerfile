FROM node:16 AS build
ARG FRONTEND_BUILD_COMMAND=build
WORKDIR /beiboot-frontend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run ${FRONTEND_BUILD_COMMAND}

FROM nginx
ARG FRONTEND_NGINX_CONFIGURATION_FILE=nginx.conf
COPY ${FRONTEND_NGINX_CONFIGURATION_FILE} /etc/nginx/nginx.conf
COPY --from=build /beiboot-frontend/dist/frontend /usr/share/nginx/html