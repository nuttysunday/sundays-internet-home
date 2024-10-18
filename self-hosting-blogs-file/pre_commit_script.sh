#!/bin/sh

OUTPUT_DIR="output"
IMAGE_NAME="test"

# Function to clean up Docker container and image
cleanup() {
    docker stop "$container_id" 2>/dev/null
    docker rm "$container_id" 2>/dev/null
    docker rmi "$IMAGE_NAME" 2>/dev/null
    echo "Cleanup completed."
}

# Check if on the main branch
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
    echo "Not running the build pipeline"
    exit 1
fi

# Build the project
npm run build || { echo "Build failed. Commit aborted."; exit 1; }

#cp -r .next/standalone ./out && cp -r .next/static ./out/.next/static && cp -r public ./out/public

# Delete the output directory if it exists
if [ -d "$OUTPUT_DIR" ]; then
    rm -rf "$OUTPUT_DIR"
fi

# Create the output directory and copy the build
mkdir -p "$OUTPUT_DIR"

cp -r .next/standalone/. "$OUTPUT_DIR/"
cp -r .next/static "$OUTPUT_DIR/.next/static"
cp -r public "$OUTPUT_DIR/public"

echo "Build completed and output copied to $OUTPUT_DIR."

# Build and run the Docker image
docker build -t "$IMAGE_NAME" . || { echo "Docker build failed. Commit aborted."; exit 1; }
container_id=$(docker run -d -p 8000:8000 "$IMAGE_NAME") || { echo "Docker run failed. Commit aborted."; exit 1; }

# Prompt user for confirmation
exec < /dev/tty
while true; do
    read -p "Do you want to proceed with the commit? (Y/n) " yn
    yn=${yn:-Y}  # Default to 'Y' if no input is given
    case $yn in
        [Yy] )
            git add "$OUTPUT_DIR/"
            echo "Changes added to git."
            cleanup
            exit 0 
            ;;
        [Nn] )
            echo "Commit aborted."
            cleanup
            exit 1
            ;;
        * )
            echo "Please answer y or n for yes or no."
            ;;
    esac
done
