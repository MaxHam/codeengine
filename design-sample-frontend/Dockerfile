FROM node:12-alpine
COPY package*.json .
RUN npm install
COPY server.js .
EXPOSE 8080
CMD [ "node", "server.js" , "foo1", "foo2", "foo3=3" ]
