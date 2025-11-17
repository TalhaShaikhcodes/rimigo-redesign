'use client';

import { useRef, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import HTMLFlipBook to avoid SSR issues
const HTMLFlipBook = dynamic(() => import('react-pageflip'), {
  ssr: false,
});

function BookSlider() {
  const bookRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoSlideEnabled, setAutoSlideEnabled] = useState(true);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [bookSize, setBookSize] = useState({ width: 450, height: 540 });
  // Handle responsive book size
  useEffect(() => {
    const updateBookSize = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setBookSize({ width: 280, height: 360 });
      } else if (window.innerWidth < 768) {
        // Small tablet
        setBookSize({ width: 350, height: 450 });
      } else {
        // Desktop
        setBookSize({ width: 450, height: 540 });
      }
    };

    updateBookSize();
    window.addEventListener('resize', updateBookSize);
    return () => window.removeEventListener('resize', updateBookSize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlideEnabled || !bookRef.current) return;

    autoSlideIntervalRef.current = setInterval(() => {
      const currentPage = bookRef.current.pageFlip().getCurrentPageIndex();
      const totalPages = travelFriendData.length + 1; // +1 for cover

      if (currentPage < totalPages - 1) {
        bookRef.current.pageFlip().flipNext();
      } else {
        // Reset to beginning
        bookRef.current.pageFlip().flip(0);
      }
    }, 3000); // Auto-slide every 3 seconds

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [autoSlideEnabled]);

  // Stop auto-slide when user manually interacts
  const handleUserInteraction = () => {
    setAutoSlideEnabled(false);
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
  };

  // Handle page flip to create infinite loop
  const handleFlip = () => {
    handleUserInteraction();
    
    // Check if we're on the last page
    setTimeout(() => {
      if (bookRef.current) {
        const currentPage = bookRef.current.pageFlip().getCurrentPageIndex();
        const totalPages = travelFriendData.length + 1; // +1 for cover
        
        // If on last page, flip back to first after a short delay
        if (currentPage === totalPages - 1) {
          setTimeout(() => {
            bookRef.current.pageFlip().flip(0);
          }, 500);
        }
      }
    }, 100);
  };

  // Handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
    
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const travelFriendData = [
    {
      id: '001',
      title: 'Your Personal Travel Expert',
      subtitle: 'Always by your side',
      image: '/travel-friend/feature-card-1.svg',
      description:
        'From planning to booking, Rimigo is your trusted companion. Get personalized recommendations, expert advice, and 24/7 support throughout your journey.',
    },
    {
      id: '002',
      title: 'Seamless Trip Planning',
      subtitle: 'Everything in one place',
      image: '/travel-friend/featured-card-2.webp',
      description:
        'No more juggling multiple apps and websites. Plan, book, and manage your entire trip from a single platform designed for simplicity.',
    },
    {
      id: '003',
      title: 'Travel with Confidence',
      subtitle: 'We have got your back',
      image: '/travel-friend/feature-card-3.webp',
      description:
        'Real-time updates, instant support, and all your bookings in one place. Travel stress-free knowing Rimigo is just a tap away.',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left side text content */}
        <div className="flex-1 text-gray-900 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            The travel friend with all the <span className="text-purple-600">answers</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Just like that one friend who knows all the best spots, finds amazing deals, and is always there when you need them
          </p>
        </div>

        {/* Right side book */}
        <div 
          ref={containerRef}
          className="book-container flex-shrink-0 transition-transform duration-300 ease-out" 
          onClick={handleUserInteraction}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(2000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        >
        {/* @ts-ignore - react-pageflip types issue */}
        <HTMLFlipBook
          ref={bookRef}
          width={bookSize.width}
          height={bookSize.height}
          maxShadowOpacity={0.5}
          drawShadow={true}
          showCover={true}
          size="fixed"
          className="flip-book"
          onFlip={handleFlip}
        >
          {/* Cover Page */}
          <div className="page bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl">
            <div className="page-content cover flex flex-col items-center justify-center h-full p-4 sm:p-6 md:p-8">
              <div className="relative w-32 h-12 sm:w-40 sm:h-14 md:w-48 md:h-16 mb-4 md:mb-6">
                <Image
                  src="/logos/navbar-logo.png"
                  alt="Rimigo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 text-center">
                Your Travel Friend
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white/70 mt-6 sm:mt-8 md:mt-12 text-center">
                Swipe to explore →
              </p>
            </div>
          </div>

          {/* Travel Friend Pages */}
          {travelFriendData.map((page, index) => (
            <div className="page bg-white rounded-2xl" key={page.id}>
              <div className="page-content flex flex-col h-full">
                <div className={index === 0 ? "px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 pb-0" : "px-3 sm:px-4 md:px-6 pt-3 sm:pt-4 md:pt-6 pb-1 sm:pb-2"}>
                  <h2 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                    {page.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-purple-600 font-medium mb-0.5 sm:mb-1">
                    {page.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs">
                    {page.description}
                  </p>
                </div>
                <div className={index === 0 ? "relative flex-1 px-2 sm:px-3 md:px-4 pb-4 sm:pb-6 md:pb-8 -mt-8 sm:-mt-12 md:-mt-16 overflow-hidden" : "relative flex-1 px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4"}>
                  <div className={index === 0 ? "relative w-full h-full -mt-10 sm:-mt-15 md:-mt-20" : "relative w-full h-full"}>
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HTMLFlipBook>
        </div>
      </div>

      <style jsx global>{`
        .book-container {
          transform-style: preserve-3d;
        }
        .page {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
        }
        .page-content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

export default BookSlider;
