#!/bin/bash

# All In One Cabo - Digital Business Card Deployment Script
# This script helps deploy the digital business card to GitHub Pages

echo "🚀 All In One Cabo - Digital Business Card Deployment"
echo "=================================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Download from: https://git-scm.com/downloads"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already exists"
fi

# Check for GitHub username
echo ""
read -p "👤 Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Repository name
REPO_NAME="all-in-one-cabo"

echo "📋 Adding files to git..."
git add .
git commit -m "Initial commit: All In One Cabo Digital Business Card

Features:
- Responsive design with black and gold theme
- Interactive buttons for Call, WhatsApp, Email, Location
- Video integration (hero, background, footer)
- Social media integration
- Contact vCard download
- Accessibility features (WCAG AA)
- Optimized for GitHub Pages"

echo ""
echo "🔗 Adding GitHub remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

echo ""
echo "📤 Pushing to GitHub..."
git push -u origin main 2>/dev/null || git push -u origin master

echo ""
echo "🌐 Now enable GitHub Pages:"
echo "   1. Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "   2. Source: Deploy from a branch"
echo "   3. Branch: main (or master)"
echo "   4. Folder: / (root)"
echo "   5. Click Save"
echo ""
echo "⏱️  Your site will be available at:"
echo "   https://$GITHUB_USERNAME.github.io/$REPO_NAME"
echo ""
echo "🎉 Deployment initiated! Check the GitHub repository for deployment status."
echo ""
echo "📋 Post-deployment checklist:"
echo "   □ Verify all videos load correctly"
echo "   □ Test all button functionality"
echo "   □ Check mobile responsiveness"
echo "   □ Test social media links"
echo "   □ Verify vCard download works"
echo "   □ Run Lighthouse performance audit"
echo ""
echo "📚 For detailed instructions, see README.md"