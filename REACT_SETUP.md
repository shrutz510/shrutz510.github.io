# React Portfolio Setup Instructions

Your portfolio has been successfully converted to **React** with a modern **Teal/Cyan** color scheme! ✨

## What's New

✅ **React Components** - Modular, maintainable code structure  
✅ **Teal/Cyan Theme** - Modern tech-forward color palette  
✅ **Smooth Interactions** - Hover effects and transitions  
✅ **Click Logo to Scroll Top** - Easy navigation back to the top  
✅ **Responsive Design** - Works on all devices  
✅ **All Content Updated** - Publications, projects, experience, education  

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

### Option A: Using gh-pages (Recommended)
```bash
npm install --save-dev gh-pages
npm run deploy
```

This will automatically:
- Build your React app
- Push the build to the `gh-pages` branch
- Deploy to https://shrutz510.github.io

### Option B: Manual Deployment
```bash
npm run build
```
Then push the `/build` folder contents to your repository.

Update your GitHub Pages settings to use the `main` branch and `/docs` folder, or configure it to use the build output.

## File Structure

```
shrutz510.github.io/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── Portfolio.jsx       # Main React component
│   └── index.js            # React entry point
├── package.json            # Dependencies & scripts
└── README.md               # Your original README
```

## Color Scheme Details

The new **Teal/Cyan** palette includes:
- **Primary Teal**: #0d9488
- **Light Teal**: #14b8a6
- **Cyan**: #06b6d4
- **Dark Navy**: #0f172a
- **Light Background**: #f0fdfa

All colors are applied throughout for a cohesive, modern look.

## Customization

To change colors, open `src/Portfolio.jsx` and modify the `colors` object at the top:

```javascript
const colors = {
  primary: '#0d9488',        // Main teal
  primaryLight: '#14b8a6',   // Light teal
  cyan: '#06b6d4',           // Cyan accent
  // ... other colors
};
```

## Features

- **Smooth Navigation**: Click on the logo to scroll back to the top
- **Active Section Highlighting**: Nav links highlight the current section
- **Hover Effects**: Interactive cards and buttons
- **Scroll to Top Button**: Appears after scrolling down
- **Responsive Design**: Works perfectly on mobile and desktop

## Troubleshooting

**Port 3000 already in use?**
```bash
PORT=3001 npm start
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Changes not showing?**
Clear your browser cache (Ctrl+Shift+Delete) and refresh.

## Next Steps

1. Update content in `src/Portfolio.jsx` as needed
2. Test locally with `npm start`
3. Deploy with `npm run deploy`
4. Share your updated portfolio! 🚀

---

**Enjoy your new modern React portfolio with Teal/Cyan vibes!** ✨
