# Base image; alpine version is a minimal image
FROM node:alpine

# Specify directory inside container where to execute commands
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Copy package.json before all other files, so installing the dependencies will be cached
# for future docker builds unless package.json changed
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy build files
# First argument: Path to folder to copy from on local machine, relative to build context
# Second argument. Path to copy to inside container
COPY ./ ./

# Default command
CMD ["npm", "start"]
