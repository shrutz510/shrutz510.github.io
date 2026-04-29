# Shruti Wagle - Software Developer & AI Engineer

A modern React portfolio with Teal/Cyan color scheme, featuring projects, publications, and experience in AI and software development.

Website: https://shrutz510.github.io

## Technology Stack

- React 18
- Node.js 18
- GitHub Actions (CI/CD)
- GitHub Pages (Hosting)

## Setup

### Install Dependencies
```bash
npm install
```

### Development
```bash
npm start
```
Visit http://localhost:3000

### Build
```bash
npm run build
```

## Deployment

The site uses GitHub Actions for automated deployment. Simply push to main:

```bash
git add .
git commit -m "Your changes"
git push
```

GitHub automatically builds and deploys to https://shrutz510.github.io within 2 minutes.

## Project Structure

```
src/
├── Portfolio.jsx       Main React component
└── index.js           Entry point

public/
└── index.html         HTML template

.github/workflows/
└── deploy.yml         CI/CD pipeline configuration
```

## Features

- Responsive design (mobile and desktop)
- Smooth navigation with scroll tracking
- Professional color scheme (Teal/Cyan with dark gray text)
- Interactive cards and hover effects
- Publications section with research papers
- Projects showcase with GitHub links
- Work experience and education timeline
- Contact section

## Customization

To modify colors, edit the `colors` object in `src/Portfolio.jsx`:

```javascript
const colors = {
  primary: '#0d9488',        // Teal
  primaryLight: '#14b8a6',   // Light Teal
  darkText: '#5a6b7f',       // Dark Gray Text
  // ... other colors
};
```

## Troubleshooting

Port 3000 already in use:
```bash
PORT=3001 npm start
```

Build issues:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## License

This portfolio is open source and available for personal use.
