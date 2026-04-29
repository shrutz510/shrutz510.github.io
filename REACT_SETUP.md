# React Portfolio Setup Instructions

Your portfolio has been successfully converted to React with a modern Teal/Cyan color scheme.

## Features

- React Components: Modular, maintainable code structure
- Teal/Cyan Theme: Modern tech-forward color palette
- Smooth Interactions: Hover effects and transitions
- Click Logo to Scroll Top: Easy navigation back to the top
- Responsive Design: Works on all devices
- All Content Updated: Publications, projects, experience, education

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```
This will open your portfolio at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```
This creates an optimized build in the `/build` folder.

## Deploying to GitHub Pages

### Using GitHub Actions (Automated)
The CI/CD pipeline is already configured. Simply push your code:
```bash
git add .
git commit -m "Your changes"
git push
```

GitHub will automatically build and deploy your site.

### Manual Deployment
```bash
npm install --save-dev gh-pages
npm run deploy
```

This will build and push to the `gh-pages` branch.

## File Structure

```
shrutz510.github.io/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD pipeline
├── public/
│   └── index.html              # Main HTML template
├── src/
│   ├── Portfolio.jsx           # Main React component
│   └── index.js                # React entry point
├── package.json                # Dependencies & scripts
└── .gitignore                  # Git configuration
```

## Color Scheme

The Teal/Cyan palette consists of:
- Primary Teal: #0d9488
- Light Teal: #14b8a6
- Cyan: #06b6d4
- Dark Gray: #4a5566
- Light Background: #f0fdfa

To customize colors, edit the `colors` object in `src/Portfolio.jsx`.

## Features

- Smooth Navigation: Click on the logo to scroll back to the top
- Active Section Highlighting: Nav links highlight the current section
- Hover Effects: Interactive cards and buttons
- Scroll to Top Button: Appears after scrolling down
- Responsive Design: Works on mobile and desktop

## Troubleshooting

**Port 3000 already in use**
```bash
PORT=3001 npm start
```

**Build fails**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Changes not showing**
Clear your browser cache and refresh the page.

## Next Steps

1. Update content in `src/Portfolio.jsx` as needed
2. Test locally with `npm start`
3. Push with `git push` (CI/CD handles deployment)
4. Monitor deployment in the Actions tab

---

For detailed CI/CD information, see CI_CD_PIPELINE.md
