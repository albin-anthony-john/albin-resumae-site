# 🚀 Getting Started Guide

Welcome! This guide will help you get your portfolio website up and running in minutes.

## 📋 Prerequisites

Before you begin, make sure you have:
- ✅ Node.js 18 or higher installed ([Download here](https://nodejs.org/))
- ✅ Git installed ([Download here](https://git-scm.com/))
- ✅ A code editor (VS Code recommended)
- ✅ Basic knowledge of command line

## ⚡ Quick Start (5 Minutes)

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/albin-anthony-john/albin-resumae-site

# Navigate to the project
cd Albin-Resumae-Site

# Install dependencies
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see your portfolio! 🎉

### 3. Make It Yours

Now customize the content with your information:

#### a. Personal Information
Edit `lib/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",              // Change this
  title: "Your Title",             // Change this
  email: "your@email.com",         // Change this
  phone: "+1234567890",            // Change this
  location: "Your Location",       // Change this
  github: "https://github.com/yourname",   // Change this
  linkedin: "https://linkedin.com/in/yourname", // Change this
  summary: "Your professional summary...",  // Change this
};
```

#### b. Skills
Update your skills in `lib/data.ts`:
```typescript
export const skills = {
  backend: [
    { name: "Your Skill 1", level: 90 },
    { name: "Your Skill 2", level: 85 },
    // Add more skills...
  ],
  // Update other categories...
};
```

#### c. Projects
Showcase your real projects in `lib/data.ts`:
```typescript
export const projects = [
  {
    id: 1,
    title: "Your Amazing Project",
    category: "Category",
    description: "Short description...",
    problem: "What problem did you solve?",
    solution: "How did you solve it?",
    techStack: ["React", "Node.js", "..."],
    contributions: [
      "What you did 1",
      "What you did 2",
    ],
    impact: {
      performance: "Improved by X%",
      users: "Served X users",
    },
    featured: true,
  },
  // Add more projects...
];
```

### 4. Add Your Resume

Replace the placeholder resume:
```bash
# Delete the placeholder
rm public/resume.pdf

# Add your resume PDF
cp /path/to/your/resume.pdf public/resume.pdf
```

### 5. Test Everything

```bash
# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the production version.

## 🎨 Customization Tips

### Change Theme Colors

Edit `tailwind.config.ts`:
```typescript
extend: {
  colors: {
    primary: {
      500: '#your-color', // Main primary color
      600: '#your-darker-color',
    },
  },
}
```

### Modify Animations

Edit animation timing in `tailwind.config.ts`:
```typescript
animation: {
  'float': 'float 6s ease-in-out infinite', // Change 6s to your preference
}
```

### Update Meta Tags

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description...",
  // ...
};
```

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended - 2 Minutes)

1. Push your code to GitHub:
```bash
git add .
git commit -m "My customizations"
git push origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Done! Your site is live! 🎉

### Option 2: Netlify

1. Push to GitHub (same as above)
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Option 3: Manual Deployment

```bash
# Build the project
npm run build

# The build output is in .next folder
# Upload to your hosting provider
```

## 📝 Common Customizations

### 1. Add a Blog Section

Create `components/sections/Blog.tsx`:
```tsx
export default function Blog() {
  return (
    <section id="blog" className="py-20">
      {/* Your blog content */}
    </section>
  );
}
```

Add to `app/page.tsx`:
```tsx
import Blog from '@/components/sections/Blog';

// Add in the main component
<Blog />
```

### 2. Add More Social Links

Edit `lib/data.ts`:
```typescript
export const personalInfo = {
  // ... existing fields
  twitter: "https://twitter.com/yourhandle",
  youtube: "https://youtube.com/@yourchannel",
};
```

Update `components/sections/Hero.tsx` to display new links.

### 3. Change Font

Install a new font:
```bash
npm install next/font/google
```

Update `app/layout.tsx`:
```tsx
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

### 4. Add Analytics

Install Vercel Analytics:
```bash
npm install @vercel/analytics
```

Update `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Add in body
<Analytics />
```

## 🐛 Troubleshooting

### Build Errors

**Problem**: Build fails with TypeScript errors
```bash
# Solution: Check for type errors
npm run build

# Fix any TypeScript errors shown
```

**Problem**: Module not found errors
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Styling Issues

**Problem**: Styles not applying
```bash
# Solution: Clear Next.js cache
rm -rf .next
npm run dev
```

**Problem**: Dark mode not working
- Check if `ThemeProvider` is in `app/layout.tsx`
- Ensure `next-themes` is installed

### Runtime Errors

**Problem**: Component not rendering
- Check browser console for errors
- Verify all imports are correct
- Check component syntax

### Performance Issues

**Problem**: Slow page load
```bash
# Analyze bundle size
npm run build

# Check .next/build-manifest.json for large files
```

## 📚 Learn More

### Documentation
- 📖 [Project README](./README.md) - Overview and features
- 🏗️ [Architecture Guide](./ARCHITECTURE.md) - Technical details
- 🚀 [Deployment Guide](./DEPLOYMENT.md) - Deploy to various platforms
- 📝 [Changelog](./CHANGELOG.md) - Version history

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 💡 Tips for Success

### Content Tips
1. ✅ Use specific numbers and metrics in your projects
2. ✅ Focus on business impact, not just technical details
3. ✅ Keep descriptions concise but informative
4. ✅ Use action verbs (Built, Designed, Improved, etc.)
5. ✅ Update regularly with new projects

### Technical Tips
1. ✅ Test on multiple devices and browsers
2. ✅ Run Lighthouse audits regularly
3. ✅ Keep dependencies updated
4. ✅ Monitor site performance
5. ✅ Back up your customizations

### SEO Tips
1. ✅ Use descriptive titles and meta descriptions
2. ✅ Add alt text to images
3. ✅ Keep URLs clean and descriptive
4. ✅ Submit sitemap to search engines
5. ✅ Monitor search console

## 🎯 Next Steps

Now that you're set up, here's what to do next:

### Week 1
- [ ] Customize all personal information
- [ ] Add your real projects (at least 3)
- [ ] Upload your resume PDF
- [ ] Update skills to match your expertise
- [ ] Test on mobile devices

### Week 2
- [ ] Deploy to Vercel/Netlify
- [ ] Add custom domain (optional)
- [ ] Set up analytics
- [ ] Share on LinkedIn
- [ ] Add to your resume

### Week 3
- [ ] Gather testimonials (if you don't have yet)
- [ ] Create detailed project case studies
- [ ] Add more projects
- [ ] Optimize images
- [ ] Run performance audits

### Ongoing
- [ ] Update with new projects monthly
- [ ] Refresh skills as you learn
- [ ] Keep experience section current
- [ ] Monitor and improve SEO
- [ ] Engage with visitors via contact form

## 🤝 Need Help?

### Get Support
- 📧 Create an issue on GitHub
- 💬 Check existing issues for solutions
- 📖 Review documentation files
- 🔍 Search Stack Overflow

### Contribute
Found a bug or want to improve something?
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🎉 You're All Set!

Your portfolio website is ready to showcase your skills and impress potential employers!

**Good luck with your job search!** 🚀

---

*Last Updated: March 28, 2026*  
*Version: 1.0.0*

---

### Quick Reference Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Deployment
git add .
git commit -m "Your message"
git push origin main

# Maintenance
npm update           # Update dependencies
npm audit fix        # Fix security issues
rm -rf .next         # Clear cache
```

**Happy Building! 🎨**
