FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /mano-api
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3000