# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account (for deployment)

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your Next.js application.

### Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

That's it! Your site will be live in minutes at `https://your-project.vercel.app`

### Custom Domain (Optional):

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Deploy to Netlify

### Steps:

1. **Push to GitHub** (if not already done)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

## Deploy to Azure Static Web Apps

### Prerequisites:
- Azure account
- Azure CLI installed

### Steps:

1. **Login to Azure**:
   ```bash
   az login
   ```

2. **Create Static Web App**:
   ```bash
   az staticwebapp create \
     --name albin-portfolio \
     --resource-group my-resource-group \
     --source https://github.com/yourusername/Albin-Resumae-Site \
     --location "eastus2" \
     --branch main \
     --app-location "/" \
     --output-location ".next"
   ```

## Deploy to AWS Amplify

### Steps:

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "Connect app"
3. Select GitHub and authorize
4. Choose your repository and branch
5. Build settings:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
6. Click "Save and deploy"

## Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your values in `.env.local`

3. Add the same variables to your hosting platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **Azure**: Configuration → Application settings
   - **AWS**: App settings → Environment variables

## Custom Configuration

### Update Personal Information

Edit `lib/data.ts` to update:
- Personal details
- Skills and expertise
- Project showcases
- Work experience
- Testimonials

### Update Theme Colors

Edit `tailwind.config.ts` to customize:
- Primary colors
- Accent colors
- Custom animations

### Add Resume PDF

Replace `public/resume.pdf` with your actual resume PDF file.

## Performance Optimization

Your site is already optimized, but for even better performance:

1. **Optimize Images**: Use WebP format for images
2. **Enable Caching**: Configure CDN caching rules
3. **Monitoring**: Set up analytics (Google Analytics, Vercel Analytics, etc.)

## Troubleshooting

### Build Fails

- Check Node.js version (should be 18+)
- Delete `node_modules` and `.next`, then run `npm install`
- Check for TypeScript errors: `npm run build`

### Styling Issues

- Ensure Tailwind CSS is properly configured
- Check browser console for CSS errors
- Clear browser cache

### Contact Form Not Working

The contact form uses `mailto:` links. For a production form:
- Use a form service like Formspree, Web3Forms, or EmailJS
- Or build a serverless API endpoint

## Support

For issues or questions:
- Create an issue on GitHub
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Check deployment platform documentation

---

**Happy Deploying! 🚀**
