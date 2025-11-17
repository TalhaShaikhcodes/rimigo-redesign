// app/page.tsx
'use client';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import BookSlider from './components/ui/book-slider';
import FeaturesSection from './components/sections/FeaturesSection';
import GallerySection from './components/sections/GallerySection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';

export default function HomePage() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroSection />

      <BookSlider />

      <FeaturesSection />

      <div className="h-24 md:h-32 bg-white" />

      <GallerySection />

      <FAQSection />

      <CTASection />

      <Footer />
    </div>
  );
}
