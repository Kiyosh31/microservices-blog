FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD [ "npm", "start" ]

# FROM       -> specify base image
# WORKDIR    -> set the working directory to '/app' in the container
#               all following command will be issued to this directory
# COPY       -> copy over only package.json file
# RUN        -> install all dependencies
# COPY ./ ./ -> Copy over all of our remaining code
# CMD        -> set the command to run when conatiner starts up