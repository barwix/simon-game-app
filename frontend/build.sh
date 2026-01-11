#!/bin/bash
# Build script for Render static site deployment
set -e

echo "🔧 Building frontend..."

# Navigate to frontend directory
cd frontend

# Remove old dependencies
rm -rf node_modules package-lock.json

# Install with public registry
echo "📦 Installing dependencies..."
npm install --registry https://registry.npmjs.org/

# Build
echo "🏗️  Building..."
npm run build

echo "✅ Build complete!"

