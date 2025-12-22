# GitHub Pages Deployment

This portfolio is configured for easy deployment to GitHub Pages.

## Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**
   
   Option A - Using `gh-pages` (recommended):
   ```bash
   # Install gh-pages
   npm install --save-dev gh-pages
   
   # Add to package.json scripts:
   "deploy": "npm run build && gh-pages -d dist"
   
   # Deploy
   npm run deploy
   ```

   Option B - Manual deployment:
   - Push the `dist/` folder contents to a `gh-pages` branch
   - Enable GitHub Pages in repository settings

3. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / root
   - Save

## Base URL Configuration

If deploying to a subdirectory (e.g., `username.github.io/portfolio`), update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/portfolio/', // Add your repo name
  // ... rest of config
});
```

## Custom Domain

To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Continuous Deployment

For automatic deployment on push, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This will automatically build and deploy your site whenever you push to the main branch.
