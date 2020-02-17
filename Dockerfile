FROM node:10-alpine
COPY --chown=node:node . /app
WORKDIR /app
RUN npm install 
CMD node index.js
