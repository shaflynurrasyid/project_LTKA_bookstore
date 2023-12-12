# Use an official Node runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

RUN npm install

# Copy the local code to the container
COPY ./backend ./backend


# Command to run the application
CMD ["npm", "run", "start"]