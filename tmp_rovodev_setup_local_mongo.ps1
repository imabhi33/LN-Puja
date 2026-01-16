# Setup local MongoDB
Write-Host "Setting up local MongoDB..." -ForegroundColor Green

# Create MongoDB data directory
$mongoDataPath = "C:\data\db"
if (!(Test-Path $mongoDataPath)) {
    New-Item -ItemType Directory -Path $mongoDataPath -Force
    Write-Host "Created MongoDB data directory: $mongoDataPath" -ForegroundColor Green
}

# Start MongoDB service
try {
    Start-Service -Name "MongoDB" -ErrorAction Stop
    Write-Host "MongoDB service started successfully" -ForegroundColor Green
} catch {
    Write-Host "MongoDB service not found. Trying to start mongod directly..." -ForegroundColor Yellow
    
    # Try to start mongod directly
    Start-Process -FilePath "mongod" -ArgumentList "--dbpath", $mongoDataPath -WindowStyle Hidden
    Start-Sleep -Seconds 3
    Write-Host "MongoDB started directly" -ForegroundColor Green
}

Write-Host "MongoDB setup complete!" -ForegroundColor Green