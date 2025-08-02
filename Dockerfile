# Use Node.js base image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Copy package.json and lockfile first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Default command: run the main script
CMD ["npx", "tsx", "src/main.ts"]