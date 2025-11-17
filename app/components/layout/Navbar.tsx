'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import DestinationsModal from './DestinationsModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsModalOpen, setIsDestinationsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDestinationsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDestinationsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div
        className={`max-w-6xl mx-auto px-6 py-4 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border border-white/30 shadow-2xl'
            : 'bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/navbar-logo.png"
              alt="Rimigo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleDestinationsClick}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Destinations
            </button>
            <Link
              href="#testimonials"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
            >
              Testimonials
            </Link>
            
            <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20 space-y-4 animate-in slide-in-from-top duration-300">
            <button
              onClick={handleDestinationsClick}
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2 w-full text-left"
            >
              Destinations
            </button>
            <Link
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200 py-2"
            >
              Testimonials
            </Link>
            
            <button className="w-full px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg">
              Login
            </button>
          </div>
        )}
      </div>

      {/* Destinations Modal */}
      <DestinationsModal
        isOpen={isDestinationsModalOpen}
        onClose={() => setIsDestinationsModalOpen(false)}
      />
    </nav>
  );
}
