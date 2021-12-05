FROM node:14

LABEL version = "1.0"
LABEL descriptions="Image for back-end"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "devStart"]