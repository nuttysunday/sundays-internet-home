# Use an official Node.js runtime as a parent image
FROM node:20 as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of your application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the production environment
FROM node:20 AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the port on which the app will run
EXPOSE 8000

# Start the Next.js application on port 8000
CMD ["npm", "start", "--", "-p", "8000"]