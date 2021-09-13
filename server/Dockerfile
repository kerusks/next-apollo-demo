
FROM node:16.0.0

LABEL version="1.0"

WORKDIR /server

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]