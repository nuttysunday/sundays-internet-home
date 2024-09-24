1. Figure out how the rendering works
2. Using data in json, instead of html, better managment.
3. Adding link indications?
4. Figure, out ssr, why works page takes time.
5. Page transition animation
6. Setup a pipeline for live updates of size via docker.

# Use the official Node.js image as the base image
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller image for the production environment
FROM node:18 AS production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Expose the port on which the app will run
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
















# Use a smaller image for the production environment
FROM node:18 AS production

# Create a non-root user with a home directory and no shell access
RUN useradd --create-home --shell /usr/sbin/nologin portfolio_user

# Set the working directory
WORKDIR /app

# Copy the build output and other necessary files
COPY .next .next
COPY public public
COPY src src
COPY package.json ./
COPY package-lock.json ./

# Install production dependencies
RUN npm install --only=production

# Change ownership of the app directory to the non-root user
RUN chown -R portfolio_user:portfolio_user /app

# Set permissions to restrict access
RUN chmod -R 500 /app

# Switch to the non-root user
USER portfolio_user

# Expose the port on which the app will run
EXPOSE 8000

# Start the Next.js application on port 8000
CMD ["npm", "start", "--", "-p", "8000"]


see if build inside docker or what for next