# Use Node.js 22 image
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app's port
EXPOSE 5000

# Start the application
CMD ["node", "index.js"]
