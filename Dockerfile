FROM node:alpine

WORKDIR /Users/print/Documents/_PERSONAL/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]
