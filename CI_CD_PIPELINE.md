# CI/CD Pipeline Documentation

## Overview

Your portfolio uses a fully automated CI/CD pipeline with GitHub Actions. This means:

- Push code and GitHub automatically builds and deploys
- No manual deployment commands needed
- Automatic testing and code quality checks
- Industry-standard workflow

## How It Works

### Pipeline Flow

```
You run: git push
    |
    v
GitHub Actions triggers automatically
    |
    v
1. Checkout your code
2. Install Node.js and dependencies
3. Run code quality checks (linting)
4. Run tests
5. Build React app
6. Deploy to GitHub Pages
    |
    v
Your site updates automatically
```

### Workflow File Location

The pipeline configuration is located at:
```
.github/workflows/deploy.yml
```

This file tells GitHub Actions what to do on every push.

## Workflow Comparison

### Before (Manual)
```bash
npm run deploy
git add .
git commit -m "Update portfolio"
git push
```

### After (Automated)
```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub handles the rest automatically.

## Setup Instructions

### Step 1: Configure GitHub Pages
1. Go to: `https://github.com/shrutz510/shrutz510.github.io`
2. Click Settings > Pages
3. Set Source to: Branch `gh-pages`, Folder `/(root)`
4. Save

### Step 2: Monitor Deployments
Every time you push, GitHub will:
1. Show a workflow run in the Actions tab
2. Build your site
3. Deploy automatically

## Pipeline Stages

| Stage | Purpose |
|-------|---------|
| Checkout | Downloads your code from GitHub |
| Setup Node.js | Installs Node.js runtime (v18) |
| Install Dependencies | Installs dependencies from package-lock.json |
| Lint | Checks code quality |
| Test | Runs test suite |
| Build | Creates optimized production build |
| Deploy | Pushes build to gh-pages branch |

## Monitoring Deployments

### View Workflow Status
Visit: `https://github.com/shrutz510/shrutz510.github.io/actions`

You will see:
- Green checkmark: Deployment successful
- Red X: Build failed (check logs)
- Yellow dot: Currently running

## Common Workflows

### Push New Code
```bash
git add .
git commit -m "Update portfolio colors"
git push
```
GitHub Actions automatically builds and deploys.

### Fix a Bug
```bash
# Make changes
git add src/Portfolio.jsx
git commit -m "Fix color scheme"
git push
```
Automatic deployment happens within 2 minutes.

### Update Content
```bash
# Edit project details, experience, etc.
git add src/Portfolio.jsx
git commit -m "Add new project"
git push
```
Site updates automatically.

## Troubleshooting

### Deployment Failed
1. Go to the Actions tab
2. Click the failed workflow
3. Review the error message
4. Fix the issue locally
5. Push again

### Common Issues

Build failed with npm error
- Verify `npm install` works locally
- Check `package.json` is valid

Deployment not showing
- Verify GitHub Pages settings
- Confirm branch is set to `gh-pages`

Disable the workflow
- Delete `.github/workflows/deploy.yml`
- Or disable in the Actions tab

## Customization

To customize the workflow, edit `.github/workflows/deploy.yml`:

- Change trigger events
- Add notifications
- Add more testing steps
- Change Node.js version
- Add custom scripts

Example of adding a custom script:
```yaml
- name: Run custom script
  run: npm run your-script
```

## Benefits

- Automation: No manual commands required
- Consistency: Same build process every time
- Safety: Tests run before deployment
- Visibility: Track all deployments in Actions tab
- Speed: Builds and deploys in approximately 2 minutes
- Professional: Industry-standard workflow
- Cost: Free for public repositories

## Next Steps

1. Ensure GitHub Pages settings use `gh-pages` branch
2. Make a test commit to trigger the workflow
3. Watch it deploy automatically
4. Monitor progress at: `https://github.com/shrutz510/shrutz510.github.io/actions`

---

For React setup instructions, see REACT_SETUP.md
