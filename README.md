# Nathan Douziech | Personal Portfolio Website

A modern, responsive personal website built with Next.js, showcasing my journey from finance professional to tech entrepreneur. This site presents my profile, projects, and skills in a clean, mobile-first design.

## 🚀 Live Demo

Visit the live site: [nathan-douziech.vercel.app](https://nathan-douziech.vercel.app) *(update with actual URL)*

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Heroicons
- **Hosting**: Vercel-ready
- **Design**: Mobile-first responsive

## ✨ Features

- **Modern Design**: Clean, professional layout with plenty of whitespace
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Subtle fade-in and slide-in effects on scroll
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized images and fonts
- **Resume Download**: Direct PDF download functionality
- **Smooth Scrolling**: Navigation between sections

## 📁 Project Structure

```
nathan-personal-site/
├── public/
│   ├── resume.pdf              # Downloadable resume
│   ├── nathan-profile.png      # Profile image
│   ├── bypass-logo.png         # Project logos
│   └── company-logos/          # Education & work logos
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main page component
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Hero.tsx            # Hero section
│       ├── About.tsx           # About me section
│       ├── Projects.tsx        # Projects showcase
│       ├── Skills.tsx          # Skills & technologies
│       ├── Resume.tsx          # Resume highlights
│       ├── Contact.tsx         # Contact information
│       ├── Navigation.tsx      # Navigation bar
│       └── Footer.tsx          # Footer component
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Sections

### Hero Section
- **Headline**: "Building AI that bypasses the job hunt BS"
- **Tagline**: Founder of Bypass – AI-powered platform connecting students to decision-makers
- **CTAs**: See Projects, Download Resume, Let's Connect

### About Me
- Personal introduction and background
- Quick facts about education and experience
- Current focus on AI and automation

### Projects
- **Bypass**: AI Job Outreach Platform (SaaS)
- Technology stack and launch details
- Project links and descriptions

### Skills
- **Business**: Product Strategy, Business Development, Financial Modeling, Sales
- **Tech**: React, Next.js, Tailwind, Node.js, Python, Supabase, OpenAI API

### Resume Highlights
- Education: UMEA University, GEM, 42 Paris
- Work Experience: Société Générale, EY, KPMG
- Downloadable PDF resume

### Contact
- Email: nathan.douziech@gmail.com
- LinkedIn: [linkedin.com/in/nathan-douziech](https://linkedin.com/in/nathan-douziech)
- GitHub: [github.com/Daifukund](https://github.com/Daifukund)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Daifukund/nathan-personal-site.git
cd nathan-personal-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Optimized for phones and small screens
- **Tablet**: Adapted layout for medium screens
- **Desktop**: Full experience with max-width of 1024px

## 🎨 Design System

- **Font**: Inter (modern sans-serif)
- **Layout**: Center-aligned with max-width 1024px
- **Spacing**: Clean with generous whitespace
- **Buttons**: Rounded corners with shadow and hover effects
- **Animations**: Subtle fade-in and slide-in on scroll
- **Colors**: Professional palette with dark/light mode support

## 🔧 Customization

### Updating Content
- Edit component files in `src/components/` to update content
- Replace images in `public/` directory
- Update resume PDF in `public/resume.pdf`

### Styling
- Modify `tailwind.config.ts` for theme customization
- Update `globals.css` for global styles
- Component-specific styles are in individual component files

### SEO
- Update metadata in `src/app/layout.tsx`
- Modify Open Graph image in `public/og-image.png`

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized with `next/font`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically on push

### Other Platforms
The site can be deployed on any platform that supports Next.js static export:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages (with static export)

## 🤝 Contributing

This is a personal website, but feedback and suggestions are welcome! Feel free to:
- Open issues for bugs or suggestions
- Submit pull requests for improvements
- Share feedback on design or functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Nathan Douziech**
- Email: nathan.douziech@gmail.com
- LinkedIn: [linkedin.com/in/nathan-douziech](https://linkedin.com/in/nathan-douziech)
- GitHub: [github.com/Daifukund](https://github.com/Daifukund)

---

*Built with ❤️ by Nathan Douziech | Powered by Next.js & Vercel*
