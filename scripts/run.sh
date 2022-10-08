#!/bin/sh
# This script is used to run the application in developer mode.

# Ensure that we are in the root folder
cd "$(dirname "$0")/.." || exit

# First, we must ensure that the dependencies are installed
echo "Installing dependencies..."
meteor npm install

# Then, we must update the browserslist database
echo "Updating browserslist database..."
npx browserslist@latest --update-db

# Finally, we can run the application
echo "Starting application..."
meteor run