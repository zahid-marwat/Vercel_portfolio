# Zahid Marwat - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Featuring advanced 3D effects, morphing animations, and optimized performance for Vercel deployment.

## 🚀 Features

- **Modern Design**: Clean, professional design with advanced 3D animations
- **Responsive**: Works perfectly on all devices and screen sizes
- **Fast Performance**: Optimized for speed with Next.js 14 and App Router
- **SEO Optimized**: Built-in SEO optimization with OpenGraph and Twitter cards
- **Dark Theme**: Beautiful dark theme with animated gradient backgrounds
- **Interactive**: Advanced 3D effects, morphing animations, and visual feedback
- **Deployment Ready**: Configured for optimal Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Performance**: SWC Minification, Image Optimization

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page with 3D effects
│   ├── contact/           # Contact page with form animations
│   ├── experience/        # Experience page with morphing effects
│   ├── projects/          # Projects page with 3D cards
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── animations/        # Advanced animation components
│   │   ├── 3DEffects.tsx     # 3D transformation effects
│   │   ├── MorphingEffects.tsx # Shape morphing animations
│   │   ├── VisualFeedback.tsx  # Interactive feedback
│   │   └── index.tsx         # Animation exports
│   ├── sections/          # Page sections with animations
│   ├── Navigation.tsx     # Animated navigation
│   ├── Footer.tsx         # Footer component
│   ├── ParticleBackground.tsx # Particle system
│   ├── CustomCursor.tsx   # Custom cursor effects
│   └── ScrollProgress.tsx # Scroll progress indicator
└── public/                # Static assets
    └── assets/            # Images and media
```

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zahid-marwat/Vercel_portfolio.git
   cd Vercel_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Customization

### Personal Information
Update your information in:
- `src/app/layout.tsx` - SEO metadata and OpenGraph
- `src/components/sections/HeroSection.tsx` - Hero content
- `src/app/about/page.tsx` - About page content

### Projects & Experience
Customize your work in:
- `src/components/sections/ProjectsSection.tsx` - Project showcases
- `src/components/sections/ExperienceSection.tsx` - Work experience
- `src/components/sections/TechStackSection.tsx` - Skills and technologies

## 🎨 Animation Features

- **3D Effects**: Card rotations, floating elements, perspective transforms
- **Morphing Animations**: Shape transitions, liquid morphs, text transformations
- **Visual Feedback**: Interactive buttons, form validations, progress indicators
- **Particle System**: Dynamic background particles with mouse interaction
- **Scroll Animations**: Reveal effects, parallax scrolling, stagger animations

## 📊 Performance Optimizations

- **Next.js 14**: Latest features with App Router
- **SWC Minification**: Faster builds and smaller bundles
- **Image Optimization**: WebP and AVIF format support
- **Code Splitting**: Automatic component-level splitting
- **Compression**: Gzip compression enabled
- **Caching**: Optimized cache headers for static assets

## 🚀 Deployment to Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

### Manual Configuration

The repository includes optimized configuration files:
- `vercel.json` - Vercel-specific settings
- `next.config.js` - Production optimizations
- `.gitignore` - Proper file exclusions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run type-check` - TypeScript type checking

## 🌐 Environment Variables

No environment variables required for basic deployment. All configurations are included.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Features

- OpenGraph meta tags
- Twitter Card integration
- Structured data markup
- Semantic HTML structure
- Optimized images with alt text
- Sitemap generation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Zahid Marwat** - Computer Vision Engineer & AI/ML Enthusiast
- Portfolio: [zahid-marwat.vercel.app](https://zahid-marwat.vercel.app)
- LinkedIn: [linkedin.com/in/zahid4830513](https://linkedin.com/in/zahid4830513)
- GitHub: [github.com/zahid-marwat](https://github.com/zahid-marwat)
- Email: fbpzahid4830@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/zahid-marwat/Vercel_portfolio/issues).

---

⭐ **Star this repository if you found it helpful!**
