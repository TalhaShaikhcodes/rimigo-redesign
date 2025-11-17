// app/components/features/FeaturesSection.tsx
'use client';

import Component from '@/app/components/ui/stacking-card';

const projects = [
  {
    title: 'Share Your Preferences',
    description:
      'From flights to activities, capture your preferences and let our AI build the perfect trip, just for you. Tell us what you love, and watch the magic happen.',
    link: '/by-your-side/share-yourpreferences.svg',
    color: '#e9d5ff',
  },
  {
    title: 'Get Handpicked Options',
    description:
      'No more decision fatigue. We provide a curated list of top-rated options that perfectly match what you\'re looking for. Every choice is tailored to your style.',
    link: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1400&auto=format&fit=crop',
    color: '#c4b5fd',
  },
  {
    title: 'Personalized Itinerary',
    description:
      'Watch your trip come to life in a single, beautiful timeline. Your entire vacation, organized day-by-day with all the details you need.',
    link: '/by-your-side/personalized-itineary.webp',
    color: '#a78bfa',
  },
  {
    title: 'Book From Anywhere',
    description:
      'Confirm flights, hotels, and activities all in one place, on any device. No need to juggle multiple sites or apps. Everything you need is right here.',
    link: '/by-your-side/book-from-anywhere.svg',
    color: '#8b5cf6',
  },
  {
    title: 'Travel Confidently',
    description:
      'With 24/7 support and all your bookings in your pocket, you can relax and enjoy the journey, knowing we have your back every step of the way.',
    link: '/by-your-side/travel confidently.webp',
    color: '#7c3aed',
  },
];

export default function FeaturesSection() {
  return <Component projects={projects} />;
}
