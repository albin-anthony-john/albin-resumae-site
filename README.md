# Albin Antony - Portfolio Website

A modern, premium portfolio website showcasing expertise as a Senior Web Engineer and Full Stack Architect specializing in the .NET ecosystem.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Theme toggle for user preference
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Fast loading and smooth transitions
- **SEO Optimized**: Proper metadata and structure
- **Interactive Sections**: 
  - Hero section with animated background
  - Skills visualization with progress bars
  - Featured projects with detailed case studies
  - System design architecture diagrams
  - Professional experience timeline
  - Testimonials and recommendations
  - Contact form with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/albin-anthony-john/albin-resumae-site
cd Albin-Resumae-Site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── SystemDesign.tsx
│   │   ├── Experience.tsx
│   │   ├── Strengths.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SkillBar.tsx
│   │   └── ThemeToggle.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                   # Utilities and data
│   └── data.ts           # Portfolio content data
└── public/               # Static assets
```

## 🎨 Customization

To customize the portfolio content, edit the data in `lib/data.ts`:

- Personal information
- Skills and expertise levels
- Project details and case studies
- Experience and achievements
- Testimonials
- Architecture principles

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/albin-anthony-john/albin-resumae-site)

### Other Platforms

This Next.js application can be deployed to:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Any Node.js hosting provider

## 📄 License

ISC License - feel free to use this as a template for your own portfolio!

## 👨‍💻 Author

**Albin Antony**
- Email: albinanthony.tech@gmail.com
- Phone: +91 7806879029
- Location: Tamil Nadu, India

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
