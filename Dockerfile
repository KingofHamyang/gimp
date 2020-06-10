FROM node:12-slim

WORKDIR /gimp
ENV NODE_ENV development

COPY package.json /gimp/package.json

RUN npm install --production

COPY . /gimp

CMD ["npm","start"]

EXPOSE 8080