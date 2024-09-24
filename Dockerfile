# Use an official Node.js runtime (Alpine variant) as a parent image
FROM node:20-alpine AS runner

# Create a non-root user and group without a home directory or shell access
RUN addgroup -S portfolio_group && adduser -S portfoliouser -G portfolio_group -D -h /app

# Set the working directory
WORKDIR /app

# Copy application files
COPY output .

# Change ownership of the app files to the non-root user
RUN chown -R portfoliouser:portfolio_group /app

# Set environment variables
ENV PORT=8000

# Expose the port
EXPOSE 8000

# Switch to the non-root user
USER portfoliouser

# Start the application
CMD ["node", "./standalone/server.js"]
