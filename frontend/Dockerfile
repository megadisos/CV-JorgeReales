# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /frontend

COPY package-lock.json /frontend

RUN npm install
RUN npm install @material-ui/core
# add app
COPY . /frontend

# start app
CMD ["npm", "start"]
