# CI/CD Pipeline - Quick Start Guide

## Setup in 3 Steps

### Step 1: Push the Workflow File
```bash
cd ~/Downloads/shrutz510.github.io
git add .github/workflows/deploy.yml
git commit -m "Add CI/CD pipeline"
git push
```

### Step 2: Configure GitHub Pages
1. Go to: https://github.com/shrutz510/shrutz510.github.io
2. Click Settings > Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: /(root)
4. Click Save

### Step 3: Complete
Configuration is now complete.

## Your Deployment Workflow

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push
# GitHub automatically builds and deploys
```

## Monitor Deployments

Visit: https://github.com/shrutz510/shrutz510.github.io/actions

You will see:
- All workflow runs
- Green checkmark: Deployment successful
- Red X: Build failed
- Detailed logs for each step

## Pipeline Execution

```
git push
    |
    v
GitHub Actions Workflow Triggers
    |
    v
Build React App
    |
    v
Deploy to GitHub Pages
    |
    v
Site is live
```

## Subsequent Updates

For all future updates, simply run:
```bash
git add .
git commit -m "Your changes"
git push
```

GitHub handles the build and deployment automatically.

---

For detailed information, see CI_CD_PIPELINE.md
