# Use an official Node.js runtime (Alpine variant) as a parent image
FROM node:20-alpine AS runner

# Set the working directory
WORKDIR /app

COPY output output

# Set environment variables
ENV PORT=8000

# Expose the port
EXPOSE 8000

# Start the application
CMD ["node", "./output/standalone/server.js"]