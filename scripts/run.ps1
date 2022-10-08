# This PowerShell script is used to run the application in developer mode.

# Ensure that we are in the root folder
Set-Location $PSScriptRoot\..

# First, we must ensure that the dependencies are installed
Write-Host "Installing dependencies..."
meteor npm install

# Then, we must update the browserslist database
Write-Host "Updating browserslist database..."
meteor npx browserslist@latest --update-db

# Finally, we can run the application
Write-Host "Starting application..."
meteor run
