# Use a specific version of node on Alpine for smaller image size
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Install dependencies as root to avoid permission issues
# Use --quiet to reduce npm output noise
RUN npm install --quiet

# Copy the rest of your application code
COPY . .

# Change the ownership of the directory to the node user
# This step ensures that all files belong to the node user
RUN chown -R node:node /usr/src/app

# Switch to 'node' user before running your application
USER node

# Define the command to run your app
CMD ["npm", "start"]
