'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlassCalendar } from '@/app/components/ui/glass-calendar';

interface Destination {
  name: string;
  country: string;
  image: string;
  reason: string;
  season: string;
}

const destinations: Record<string, Destination> = {
  winter: {
    name: 'Switzerland',
    country: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2000&auto=format&fit=crop',
    reason: 'Perfect for winter sports and alpine adventures',
    season: 'Winter Wonderland',
  },
  spring: {
    name: 'Japan',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    reason: 'Cherry blossoms and cultural experiences',
    season: 'Spring Bloom',
  },
  summer: {
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    reason: 'Tropical paradise with stunning beaches and culture',
    season: 'Summer Paradise',
  },
  fall: {
    name: 'Italy',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2000&auto=format&fit=crop',
    reason: 'Rich history, art, and Mediterranean charm',
    season: 'Autumn Colors',
  },
};

export default function DateDestinationHero() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDestination, setCurrentDestination] = useState<Destination>(destinations.summer);

  const getSeason = (date: Date): string => {
    const month = date.getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  };



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentDestination.image}
          alt={currentDestination.name}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col md:flex-row gap-8 items-start">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 space-y-6 md:pt-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
          >
            {currentDestination.season}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Pick Your Dates.<br />
            We'll Find Your <span className="text-purple-600">Paradise</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-900 leading-relaxed font-bold drop-shadow-lg"
          >
            Select your travel dates and discover the perfect destination for that season. 
            Let us guide you to unforgettable experiences.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold text-lg rounded-full shadow-2xl overflow-hidden transition-all duration-300"
          >
            <motion.span
              className="relative z-10"
              whileHover={{ x: -5 }}
              transition={{ duration: 0.2 }}
            >
              Start Your Trip
            </motion.span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ x: '-100%', opacity: 0.2 }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.button>
        </motion.div>

        {/* Right Side - Calendar and Destination */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col gap-4 md:w-[420px]"
        >
          {/* Glass Calendar */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCalendar
              selectedDate={selectedDate || undefined}
              onDateSelect={(date) => {
                setSelectedDate(date);
                const season = getSeason(date);
                setCurrentDestination(destinations[season]);
              }}
            />
          </motion.div>

          {/* Destination Suggestion */}
          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl space-y-3"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={currentDestination.image}
                    alt={currentDestination.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">
                    {currentDestination.name}, {currentDestination.country}
                  </h3>
                  <p className="text-gray-700 mt-1 text-sm">
                    {currentDestination.reason}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
              >
                Explore This Destination
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-purple-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
