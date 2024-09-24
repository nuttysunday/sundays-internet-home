# Use an official Node.js runtime (Alpine variant) as a parent image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) and install dependencies
COPY package*.json ./

# Upgrade npm to the latest version
RUN npm install -g npm@10.8.3

RUN npm install

# Copy the rest of your application code and build the Next.js application
COPY . .
RUN npm run build

# Use a smaller image for the production environment
FROM node:20-alpine AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app .

# Install only production dependencies
RUN npm install --omit=dev

# Expose the port on which the app will run
EXPOSE 8000

# Start the Next.js application on port 8000
CMD ["npm", "start", "--", "-p", "8000"]
