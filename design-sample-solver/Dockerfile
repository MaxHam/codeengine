FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "node", "server.js" ]