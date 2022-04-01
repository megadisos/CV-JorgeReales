FROM node

ENV NODE_ENV=development
WORKDIR /cv

RUN npm install -g npm
RUN npm install express pg

COPY cv.js /cv
COPY config.js /cv

CMD ["node","cv.js"]