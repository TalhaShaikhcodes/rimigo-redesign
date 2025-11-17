# Project Structure

This document outlines the folder structure and organization of the Rimigo landing page.

## Directory Structure

```
rimigo-landing/
├── app/
│   ├── components/
│   │   ├── layout/              # Layout components (persistent across pages)
│   │   │   ├── Navbar.tsx       # Main navigation bar
│   │   │   ├── DestinationsModal.tsx  # Destinations selection modal
│   │   │   └── Footer.tsx       # Site footer
│   │   │
│   │   ├── sections/            # Page sections (main content blocks)
│   │   │   ├── HeroSection.tsx  # Hero section with date picker
│   │   │   ├── FeaturesSection.tsx  # Features showcase
│   │   │   ├── GallerySection.tsx   # Image gallery
│   │   │   ├── FAQSection.tsx   # Frequently asked questions
│   │   │   └── CTASection.tsx   # Call-to-action section
│   │   │
│   │   └── ui/                  # Reusable UI components
│   │       ├── accordion.tsx    # Accordion component
│   │       ├── book-slider.tsx  # Booking slider
│   │       ├── circular-gallery.tsx  # Circular image gallery
│   │       ├── glass-calendar.tsx    # Glass-morphism calendar
│   │       └── stacking-card.tsx     # Stacking card animation
│   │
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
│
├── public/
│   ├── by-your-side/            # Feature images
│   ├── gallery/                 # Gallery images
│   └── logos/                   # Logo assets
│
└── lib/
    └── utils.ts                 # Utility functions
```

## Component Organization

### Layout Components (`components/layout/`)
Components that provide the overall structure and are persistent across pages:
- **Navbar**: Main navigation with destinations modal trigger
- **DestinationsModal**: Modal for selecting travel destinations
- **Footer**: Site footer with links and contact info

### Section Components (`components/sections/`)
Major content sections that make up the landing page:
- **HeroSection**: Main hero with date picker and destination suggestions
- **FeaturesSection**: Showcases key features with stacking cards
- **GallerySection**: Image gallery of destinations
- **FAQSection**: Frequently asked questions with accordion
- **CTASection**: Call-to-action with stats and booking prompt

### UI Components (`components/ui/`)
Reusable, generic components used across sections:
- **accordion**: Expandable/collapsible content
- **book-slider**: Booking interface slider
- **circular-gallery**: Circular image carousel
- **glass-calendar**: Calendar with glass-morphism effect
- **stacking-card**: Animated stacking card component

## Design Principles

1. **Separation of Concerns**: Layout, sections, and UI components are clearly separated
2. **Reusability**: UI components are generic and can be used in multiple sections
3. **Maintainability**: Clear folder structure makes it easy to find and update components
4. **Scalability**: Easy to add new sections or UI components without cluttering

## Import Patterns

```typescript
// Layout components
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

// Section components
import HeroSection from '@/app/components/sections/HeroSection';
import FeaturesSection from '@/app/components/sections/FeaturesSection';

// UI components
import { GlassCalendar } from '@/app/components/ui/glass-calendar';
import { Accordion } from '@/app/components/ui/accordion';
```

## Adding New Components

### Adding a Layout Component
Place in `app/components/layout/` if it's:
- Part of the persistent page structure
- Used across multiple pages
- Navigation or footer related

### Adding a Section Component
Place in `app/components/sections/` if it's:
- A major content block on the page
- Specific to the landing page structure
- Contains business logic or content

### Adding a UI Component
Place in `app/components/ui/` if it's:
- Reusable across multiple sections
- Generic and configurable
- Purely presentational
