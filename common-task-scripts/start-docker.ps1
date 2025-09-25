Write-Host 'Starting Docker in Ubuntu-24.04 WSL...'

# Show running containers
wsl -d Ubuntu-24.04 sh -c 'docker ps'

# Optional: Start your MySQL container
wsl -d Ubuntu-24.04 sh -c 'docker start mysql-server'

# Show running containers
wsl -d Ubuntu-24.04 sh -c 'docker ps'

Write-Host 'Docker started successfully!'

# Prevent auto-close
Write-Host "`nPress any key to exit..."
[void][System.Console]::ReadKey($true)
