FROM node:14-alpine

WORKDIR /app

COPY pakage*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


