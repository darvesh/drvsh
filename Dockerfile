# Use the latest NodeJS image
FROM node:latest

# Docker build arguments to customize image during build time
ARG PORT=1998
ARG MONGO_CSTRING=mongodb://localhost:27017/bin-store

# Set required environment variables
ENV BIN_MONGO_CSTRING ${MONGO_CSTRING}
ENV BIN_PORT ${PORT}

# Set working directory
WORKDIR /usr/src/app

# Copy package.json to the source
COPY package*.json ./

# Run npm install to prepare dependencies
RUN npm install

# Copy source files
COPY . .

# Expose the port for the app
EXPOSE ${PORT}

# Start app
CMD ["npm", "start"]
