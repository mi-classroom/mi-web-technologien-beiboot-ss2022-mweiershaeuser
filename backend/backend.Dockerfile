FROM node:16
WORKDIR /beiboot-backend
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
CMD npm start
EXPOSE 1337