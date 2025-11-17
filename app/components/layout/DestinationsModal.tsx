'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface DestinationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Destination {
  name: string;
  flag: string;
}

interface Region {
  title: string;
  destinations: Destination[];
}

const regions: Region[] = [
  {
    title: 'OCEANIA (AUSTRALIA & PACIFIC ISLANDS)',
    destinations: [
      { name: 'Australia', flag: '🇦🇺' },
      { name: 'New Zealand', flag: '🇳🇿' },
    ],
  },
  {
    title: 'SOUTHEAST ASIA',
    destinations: [
      { name: 'Bali', flag: '🇮🇩' },
      { name: 'Malaysia', flag: '🇲🇾' },
      { name: 'Philippines', flag: '🇵🇭' },
      { name: 'Singapore', flag: '🇸🇬' },
      { name: 'Thailand', flag: '🇹🇭' },
      { name: 'Vietnam', flag: '🇻🇳' },
    ],
  },
  {
    title: 'WESTERN EUROPE',
    destinations: [
      { name: 'France', flag: '🇫🇷' },
      { name: 'Netherlands', flag: '🇳🇱' },
      { name: 'Switzerland', flag: '🇨🇭' },
    ],
  },
  {
    title: 'SOUTHERN EUROPE',
    destinations: [{ name: 'Italy', flag: '🇮🇹' }],
  },
  {
    title: 'MIDDLE EAST',
    destinations: [{ name: 'Dubai', flag: '🇦🇪' }],
  },
  {
    title: 'EAST ASIA',
    destinations: [
      { name: 'Hong Kong', flag: '🇭🇰' },
      { name: 'Japan', flag: '🇯🇵' },
    ],
  },
  {
    title: 'NORTHERN EUROPE',
    destinations: [
      { name: 'Norway', flag: '🇳🇴' },
      { name: 'United Kingdom', flag: '🇬🇧' },
    ],
  },
  {
    title: 'SOUTH ASIA',
    destinations: [{ name: 'Sri Lanka', flag: '🇱🇰' }],
  },
];

export default function DestinationsModal({
  isOpen,
  onClose,
}: DestinationsModalProps) {
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(
    null
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl max-h-[80vh] z-50 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Where do you want to go?
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {regions.map((region, regionIndex) => (
                  <motion.div
                    key={region.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: regionIndex * 0.05, duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="text-[10px] md:text-xs font-bold text-gray-900 tracking-wide">
                      {region.title}
                    </h3>
                    <div className="space-y-2">
                      {region.destinations.map((destination, destIndex) => (
                        <motion.button
                          key={destination.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: regionIndex * 0.05 + destIndex * 0.03,
                            duration: 0.2,
                          }}
                          onHoverStart={() =>
                            setHoveredDestination(destination.name)
                          }
                          onHoverEnd={() => setHoveredDestination(null)}
                          className="flex items-center gap-3 text-left w-full group"
                        >
                          <motion.span
                            className="text-lg md:text-xl"
                            animate={{
                              scale:
                                hoveredDestination === destination.name
                                  ? 1.2
                                  : 1,
                              rotate:
                                hoveredDestination === destination.name
                                  ? [0, -10, 10, -10, 0]
                                  : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {destination.flag}
                          </motion.span>
                          <motion.span
                            className="text-sm md:text-base text-gray-700 group-hover:text-purple-600 transition-colors duration-200"
                            animate={{
                              x:
                                hoveredDestination === destination.name ? 5 : 0,
                              fontWeight:
                                hoveredDestination === destination.name
                                  ? 600
                                  : 400,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {destination.name}
                          </motion.span>
                          {hoveredDestination === destination.name && (
                            <motion.div
                              layoutId="destination-indicator"
                              className="ml-auto w-2 h-2 bg-purple-600 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="p-4 md:p-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-3"
            >
              <p className="text-gray-500 text-xs md:text-sm">
                Can't find your destination? We can help you customise your
                trip.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 md:px-8 md:py-3 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-full transition-colors duration-300 shadow-lg whitespace-nowrap"
              >
                PLAN MY TRIP
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
