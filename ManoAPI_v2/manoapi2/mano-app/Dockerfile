FROM node:12-alpine

#create app directory
RUN apk add --no-cache python2 g++ make
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 8080