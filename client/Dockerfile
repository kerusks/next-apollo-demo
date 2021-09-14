
FROM node:16.0.0

LABEL version="1.0"

WORKDIR /client

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]