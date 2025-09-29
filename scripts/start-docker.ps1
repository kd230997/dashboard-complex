Write-Host "Starting Docker in WSL Ubuntu-24.04..."

# Start Docker daemon in WSL
wsl -d Ubuntu-24.04 sh -c "docker start"

# Start container (detached)
wsl -d Ubuntu-24.04 sh -c "docker start mysql-server || docker run -d --name mysql-server"

Write-Host "Container running. Keeping WSL alive..."

# Keep WSL session alive by running tail (or sleep infinity)
wsl -d Ubuntu-24.04 sh -c "tail -f /dev/null"