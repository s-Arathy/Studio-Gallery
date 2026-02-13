# Deployment Guide

This guide will help you publish your portfolio website. Choose one of the options below.

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Steps:

1. **Push your code to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Configure Build Settings** (if needed):
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

Your site will be available at: `https://your-project-name.vercel.app`

---

## Option 2: Deploy to Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

Your site will be available at: `https://your-project-name.netlify.app`

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts** base path:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your GitHub repo name
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

Your site will be at: `https://your-username.github.io/your-repo-name/`

---

## Option 4: Deploy to Cloudflare Pages

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy

---

## Before Deploying - Checklist

- [ ] Test the build locally: `npm run build` then `npm run preview`
- [ ] Update `index.html` title and meta tags
- [ ] Ensure all images/assets are in the correct folders
- [ ] Check that resume.pdf is accessible
- [ ] Test dark mode toggle
- [ ] Verify all links work

---

## Custom Domain (Optional)

After deploying, you can add a custom domain:
- **Vercel**: Project Settings → Domains → Add domain
- **Netlify**: Site Settings → Domain Management → Add custom domain

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
