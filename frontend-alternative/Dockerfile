FROM node:14-alpine

RUN apk update

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public

RUN yarn install
RUN yarn run build
RUN yarn global add serve

EXPOSE 5001

CMD ["serve", "-l", "5001", "-s", "build"]