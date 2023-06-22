FROM node:latest
USER node
WORKDIR /home/node/code
COPY --chown=node:node package*.json ./
RUN npm install 
EXPOSE 1337
COPY . .

CMD ["node", "index.js",]
