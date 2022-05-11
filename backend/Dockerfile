FROM node:16
WORKDIR /backend
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 1337
CMD npm run develop