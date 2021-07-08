FROM node:12-alpine
COPY package*.json .
RUN npm install
COPY server.js .
EXPOSE 8080
ENTRYPOINT [ "node server.js" ]
CMD [ "foo1", "foo2", "foo3=3" ]
