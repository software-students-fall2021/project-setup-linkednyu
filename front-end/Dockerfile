FROM node:16

LABEL version = "1.0"
LABEL descriptions="Image for front-end"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]