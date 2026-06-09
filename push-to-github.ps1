# Tora Constructions — Push to GitHub Script
# Run this script in PowerShell from the project directory

$repoUrl = "https://github.com/Quickaxis/toraconstructions-.git"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Tora Constructions — GitHub Push" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
try {
    git --version | Out-Null
    Write-Host "[OK] Git is installed." -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Git is not installed. Please install Git from https://git-scm.com" -ForegroundColor Red
    exit 1
}

# Initialize repo if not already initialized
if (-Not (Test-Path ".git")) {
    Write-Host "[INFO] Initializing git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
} else {
    Write-Host "[OK] Git repository already initialized." -ForegroundColor Green
}

# Set remote origin
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "[INFO] Updating remote origin to $repoUrl" -ForegroundColor Yellow
    git remote set-url origin $repoUrl
} else {
    Write-Host "[INFO] Adding remote origin: $repoUrl" -ForegroundColor Yellow
    git remote add origin $repoUrl
}

# Stage all files
Write-Host "[INFO] Staging all files..." -ForegroundColor Yellow
git add .

# Show status
Write-Host ""
Write-Host "Files staged for commit:" -ForegroundColor Cyan
git status --short

# Commit
Write-Host ""
Write-Host "[INFO] Creating commit..." -ForegroundColor Yellow
git commit -m "feat: Tora Constructions website - Full premium build

- Dark luxury construction website for Dibrugarh, Upper Assam
- Glassmorphic navbar with official logo + brand lockup
- Immersive hero with floating stats cards
- About section with Ashok Neog leadership spotlight
- 6-card services grid (Residential, Commercial, Architecture, etc.)
- Why Choose Us section with 6 pillars
- Interactive location map for Upper Assam regions
- Process timeline (Desktop horizontal + Mobile vertical)
- Founder message section
- Testimonials slider
- Contact & inquiry form
- Premium footer with logo, social links, and navigation
- Fully responsive mobile layout
- Brand colors: Navy #0B1F33, Gold #D89B0D, Lime #D7F04A"

Write-Host ""
Write-Host "[INFO] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "[NOTE] You may be prompted for your GitHub credentials." -ForegroundColor Magenta
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  SUCCESS! Website pushed to GitHub!" -ForegroundColor Green
    Write-Host "  $repoUrl" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  Push failed. See error above." -ForegroundColor Red
    Write-Host "  Tips:" -ForegroundColor Yellow
    Write-Host "  1. Make sure the repo exists on GitHub" -ForegroundColor Yellow
    Write-Host "  2. Use a Personal Access Token as password" -ForegroundColor Yellow
    Write-Host "  3. Or set up SSH keys for passwordless push" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Red
}
