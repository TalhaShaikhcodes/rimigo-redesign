# Rimigo Landing Page 🌴

A modern, animated landing page for Rimigo - an AI-powered travel planning platform that makes vacation planning effortless.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://rimigo-redesign.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)

## 🚀 Live Demo

**[View Live Site](https://your-deployment-url-here.vercel.app)** _(Replace with your actual deployment URL)_

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Components](#components)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🎯 Overview

Rimigo is a comprehensive travel planning platform that helps users discover and book their perfect vacation. This landing page showcases the platform's key features with stunning animations, interactive elements, and a modern design aesthetic.

### Key Highlights

- 🎨 **Modern UI/UX** - Clean, purple-themed design with glass-morphism effects
- ✨ **Rich Animations** - Smooth micro-interactions using Framer Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🚀 **Performance Optimized** - Built with Next.js 16 for optimal loading speeds
- ♿ **Accessible** - WCAG compliant with semantic HTML

## ✨ Features

### Interactive Components

- **Dynamic Hero Section** - Date picker with seasonal destination suggestions
- **Destinations Modal** - Browse 78+ countries across 8 regions with animated flags
- **Stacking Cards** - Scroll-triggered feature showcase with parallax effects
- **Circular Gallery** - Rotating image carousel of travel destinations
- **Animated Stats** - Number counters that animate on scroll
- **FAQ Accordion** - Expandable questions with smooth transitions
- **Glass Calendar** - Beautiful date picker with glass-morphism design

### Sections

1. **Hero** - Date selection with AI-powered destination matching
2. **Book Slider** - Quick booking interface
3. **Features** - 5-step journey showcase with stacking cards
4. **Gallery** - Stunning destination imagery
5. **FAQ** - Common questions and answers
6. **CTA** - Statistics and call-to-action
7. **Footer** - Company info, links, and social media

## 🛠 Tech Stack

### Core

- **[Next.js 16.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.2](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS

### Animation & UI

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Number Flow](https://number-flow.barvian.me/)** - Animated number transitions
- **[date-fns](https://date-fns.org/)** - Date manipulation

### Development

- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

## 📁 Project Structure

```
rimigo-landing/
├── app/
│   ├── components/
│   │   ├── layout/              # Layout components
│   │   │   ├── Navbar.tsx       # Main navigation
│   │   │   ├── DestinationsModal.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/            # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   │
│   │   └── ui/                  # Reusable components
│   │       ├── accordion.tsx
│   │       ├── book-slider.tsx
│   │       ├── circular-gallery.tsx
│   │       ├── glass-calendar.tsx
│   │       └── stacking-card.tsx
│   │
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
│
├── public/
│   ├── by-your-side/            # Feature images
│   ├── gallery/                 # Gallery images
│   └── logos/                   # Brand assets
│
├── lib/
│   └── utils.ts                 # Utility functions
│
├── STRUCTURE.md                 # Detailed structure docs
└── README.md                    # This file
```

### Component Organization

- **`layout/`** - Persistent components (Navbar, Footer, Modals)
- **`sections/`** - Main content sections of the landing page
- **`ui/`** - Reusable, generic UI components

See [STRUCTURE.md](./STRUCTURE.md) for detailed documentation.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/rimigo-landing.git
cd rimigo-landing
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🧩 Components

### Layout Components

- **Navbar** - Responsive navigation with destinations modal
- **DestinationsModal** - Interactive country selection with 78+ destinations
- **Footer** - Company info, links, and social media

### Section Components

- **HeroSection** - Date picker with seasonal destination matching
- **FeaturesSection** - 5-step journey with stacking card animations
- **GallerySection** - Circular image carousel
- **FAQSection** - Accordion-style Q&A
- **CTASection** - Stats counter and call-to-action

### UI Components

- **accordion** - Expandable/collapsible content
- **book-slider** - Booking interface slider
- **circular-gallery** - Rotating image carousel
- **glass-calendar** - Glass-morphism date picker
- **stacking-card** - Scroll-triggered stacking animation

## 🎨 Customization

### Colors

The project uses a purple theme. To customize:

1. Edit `tailwind.config.ts` for theme colors
2. Update `globals.css` for CSS variables

### Content

- **Destinations**: Edit `app/components/layout/DestinationsModal.tsx`
- **Features**: Edit `app/components/sections/FeaturesSection.tsx`
- **FAQ**: Edit `app/components/sections/FAQSection.tsx`
- **Images**: Replace files in `public/` directory

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Viareel Travel Private Limited.

## 📞 Contact

**Viareel Travel Private Limited**

- Email: contact@rimigo.com
- Website: [https://rimigo.com](https://rimigo.com)
- Instagram: [@rimigo.travel](https://www.instagram.com/rimigo.travel)
- LinkedIn: [Rimigo](https://www.linkedin.com/company/rimigotravel/)

---

**Built with ❤️ by the Rimigo Team**

*Making vacations easy, one trip at a time* 🌴✈️
