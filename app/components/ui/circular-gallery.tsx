import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import Image from 'next/image';

// Define the type for a single gallery item
export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
  videoUrl?: string;
}

// Define the props for the CircularGallery component
interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Controls how far the items are from the center. */
  radius?: number;
  /** Controls the speed of auto-rotation when not scrolling. */
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    {
      items,
      className,
      radius = 450,
      autoRotateSpeed = 0.04,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
      null
    );
    const [responsiveRadius, setResponsiveRadius] = useState(radius);
    const [cardSize, setCardSize] = useState({ width: 300, height: 400 });
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // Handle responsive sizing
    useEffect(() => {
      const updateSize = () => {
        if (window.innerWidth < 640) {
          // Mobile
          setResponsiveRadius(200);
          setCardSize({ width: 200, height: 280 });
        } else if (window.innerWidth < 768) {
          // Small tablet
          setResponsiveRadius(280);
          setCardSize({ width: 240, height: 320 });
        } else if (window.innerWidth < 1024) {
          // Tablet
          setResponsiveRadius(350);
          setCardSize({ width: 260, height: 350 });
        } else {
          // Desktop
          setResponsiveRadius(radius);
          setCardSize({ width: 300, height: 400 });
        }
      };

      updateSize();
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }, [radius]);

    const handleVideoClick = (index: number, hasVideo: boolean) => {
      if (hasVideo) {
        if (playingVideoIndex === index) {
          // Stop video
          if (videoRefs.current[index]) {
            videoRefs.current[index]?.pause();
          }
          setPlayingVideoIndex(null);
        } else {
          // Stop any currently playing video
          if (playingVideoIndex !== null && videoRefs.current[playingVideoIndex]) {
            videoRefs.current[playingVideoIndex]?.pause();
          }
          // Play new video
          setPlayingVideoIndex(index);
          setTimeout(() => {
            videoRefs.current[index]?.play();
          }, 100);
        }
      }
    };

    // Effect to handle scroll-based rotation
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress =
          scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    // Effect for auto-rotation when not scrolling and no video playing
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling && playingVideoIndex === null) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed, playingVideoIndex]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={`relative w-full h-full flex items-center justify-center ${className || ''}`}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(
              relativeAngle > 180 ? 360 - relativeAngle : relativeAngle
            );
            const opacity = Math.max(0.6, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute"
                style={{
                  width: `${cardSize.width}px`,
                  height: `${cardSize.height}px`,
                  transform: `rotateY(${itemAngle}deg) translateZ(${responsiveRadius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: `-${cardSize.width / 2}px`,
                  marginTop: `-${cardSize.height / 2}px`,
                  opacity: opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div
                  className={`relative w-full h-full rounded-lg shadow-2xl overflow-hidden group border border-gray-700 bg-gray-800/70 backdrop-blur-lg ${
                    item.videoUrl ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleVideoClick(i, !!item.videoUrl)}
                >
                  {playingVideoIndex === i && item.videoUrl ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={item.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover"
                      controls
                      playsInline
                      onEnded={() => setPlayingVideoIndex(null)}
                      onPause={(e) => {
                        if (
                          e.currentTarget.currentTime ===
                          e.currentTarget.duration
                        ) {
                          setPlayingVideoIndex(null);
                        }
                      }}
                    />
                  ) : (
                    <>
                      <Image
                        src={item.photo.url}
                        alt={item.photo.text}
                        fill
                        className="object-cover"
                        style={{ objectPosition: item.photo.pos || 'center' }}
                        sizes="300px"
                      />
                      {item.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/40 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg
                              className="w-5 h-5 text-gray-900 ml-0.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  <div
                    className={`absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 bg-gradient-to-t from-black/80 to-transparent text-white z-10 ${
                      playingVideoIndex === i ? 'opacity-0' : 'opacity-100'
                    } transition-opacity`}
                  >
                    <h2 className="text-sm sm:text-base md:text-xl font-bold">{item.common}</h2>
                    <em className="text-xs sm:text-sm italic opacity-80">{item.binomial}</em>
                    <p className="text-[10px] sm:text-xs mt-1 sm:mt-2 opacity-90 italic">
                      &quot;{item.photo.by}&quot;
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
