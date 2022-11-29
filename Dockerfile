FROM node:latest 

WORKDIR /client 

COPY . /client

RUN npm install --force

EXPOSE 3000

CMD ["npm", "start"]


