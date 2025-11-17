'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NumberFlow from "@number-flow/react";
import { TreePalm, Star, Map, HandHelping } from 'lucide-react';

export default function CTASection() {
  const [vacations, setVacations] = useState(0);
  const [rating, setRating] = useState(0);
  const [countries, setCountries] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Create intersection observer to trigger animation when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate numbers with slight delays when entering viewport
            setTimeout(() => setVacations(242), 200);
            setTimeout(() => setRating(4.9), 400);
            setTimeout(() => setCountries(78), 600);
            setTimeout(() => setSavings(8354), 800);
          } else {
            // Reset to 0 when leaving viewport
            setVacations(0);
            setRating(0);
            setCountries(0);
            setSavings(0);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cta-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="cta-section" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Main CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            Ready for your best <span className="text-purple-600">vacation</span> yet?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Submit your travel details below and get personalized vacation options designed just for you. 
            Expert assistance awaits at every step.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-2 flex items-center justify-center gap-4 md:gap-6">
              <TreePalm className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-600" />
              <NumberFlow 
                value={vacations} 
                transformTiming={{ duration: 1500, easing: 'ease-out' }}
              />
            </div>
            <p className="text-sm md:text-base text-gray-600">Vacations</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-2 flex items-center justify-center gap-4 md:gap-6">
              <Star className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-purple-600 text-purple-600" />
              <NumberFlow 
                value={rating} 
                format={{ minimumFractionDigits: 1 }}
                transformTiming={{ duration: 1500, easing: 'ease-out' }}
              />
            </div>
            <p className="text-sm md:text-base text-gray-600">Traveller Ratings</p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-2 flex items-center justify-center gap-4 md:gap-6">
              <Map className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-600" />
              <NumberFlow 
                value={countries}
                transformTiming={{ duration: 1500, easing: 'ease-out' }}
              />
            </div>
            <p className="text-sm md:text-base text-gray-600">Countries</p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-2 flex items-center justify-center gap-4 md:gap-6">
              <HandHelping className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-600" />
              <span className="text-3xl md:text-4xl lg:text-5xl">$</span>
              <NumberFlow 
                value={savings}
                transformTiming={{ duration: 1500, easing: 'ease-out' }}
              />
            </div>
            <p className="text-sm md:text-base text-gray-600">Average Savings per trip</p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 overflow-hidden"
          >
            <span className="relative z-10">Start your trip</span>
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
