// app/components/gallery/GallerySection.tsx
'use client';

import React from 'react';
import { CircularGallery, GalleryItem } from '@/app/components/ui/circular-gallery';

const galleryData: GalleryItem[] = [
  {
    common: 'Paris',
    binomial: 'France',
    photo: {
      url: '/story-board/paris_thumbnail.webp',
      text: 'Iconic Eiffel Tower and Parisian charm',
      pos: '50% 50%',
      by: 'Found hidden gems we would have missed otherwise',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/paris.mp4',
  },
  {
    common: 'Japan',
    binomial: 'Tokyo & Kyoto',
    photo: {
      url: '/story-board/japan_thumbnail.webp',
      text: 'Ancient temples and modern cities',
      pos: '50% 50%',
      by: 'The money saving tips really added up',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/japan.mp4',
  },
  {
    common: 'Singapore',
    binomial: 'City-State',
    photo: {
      url: '/story-board/singapore_thumbnail.webp',
      text: 'Modern skyline and diverse attractions',
      pos: '50% 50%',
      by: 'Expert advice for travelling with young children',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/Singapore.mp4',
  },
  {
    common: 'Switzerland',
    binomial: 'Swiss Alps',
    photo: {
      url: '/story-board/switzerland_thumbnail.webp',
      text: 'Majestic mountain peaks and alpine villages',
      pos: '50% 50%',
      by: 'Saved 35000 on our family trip to Europe',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/Switzerland.mp4',
  },
  {
    common: 'Indonesia',
    binomial: 'Bali',
    photo: {
      url: '/story-board/indonesia_thumbnail.webp',
      text: 'Tropical paradise and rice terraces',
      pos: '50% 50%',
      by: 'The personalized itinerary was exactly what we wanted',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/video_3.mp4',
  },
  {
    common: 'Italy',
    binomial: 'Rome & Venice',
    photo: {
      url: '/story-board/italy_thumbnail.webp',
      text: 'Historic architecture and Italian culture',
      pos: '50% 50%',
      by: 'Felt like having a local friend in every city',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/Italy.mp4',
  },
  {
    common: 'Thailand',
    binomial: 'Bangkok & Phuket',
    photo: {
      url: '/story-board/thailand_thumbnail.webp',
      text: 'Vibrant culture and stunning beaches',
      pos: '50% 50%',
      by: 'We found deals on Rimigo that our own research missed',
    },
    videoUrl:
      'https://rimigowebsitecontent.s3-accelerate.amazonaws.com/rimigo-testimonials/video_2.mp4',
  },
];

const GallerySection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-purple-50 text-gray-900" style={{ height: '500vh' }}>
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-12 sm:top-16 z-10 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Explore Dream <span className="text-purple-600">Destinations</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">Scroll to discover amazing places</p>
        </div>
        <div className="w-full h-full pt-20 sm:pt-24">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
