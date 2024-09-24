# Use a smaller image for the production environment
FROM node:18 AS production

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

# Expose the port on which the app will run
EXPOSE 8000

# Start the Next.js application on port 8000
CMD ["npm", "start", "--", "-p", "8000"]
