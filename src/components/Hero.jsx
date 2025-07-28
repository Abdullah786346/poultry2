import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/assets/home.jpg',
    '/assets/home2.jpg',
  ];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden bg-black h-screen min-h-[500px] max-h-[9000px]">
      {/* Image Slides */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Responsive image with full height display */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="h-full w-auto max-w-none transition-all duration-500 ease-in-out"
                style={{ minWidth: '100%' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ONLY show content on first slide */}
      {currentIndex === 0 && (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-16">
          {/* Circle with Logo */}
          <div className="rounded-full p-2 sm:p-4 mb-4 sm:mb-6 bg-white bg-opacity-80 shadow-lg">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/assets/logo.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Title & Description */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight mb-4 sm:mb-6 drop-shadow-lg px-4">
            Welcome to Poultry Association Society
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-md justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-base sm:text-lg shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50">
              Become a Member
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 text-base sm:text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
              Learn More
            </button>
          </div>

          {/* Mobile indicators */}
          <div className="absolute bottom-6 flex space-x-2 md:hidden">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === idx ? 'bg-white' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block p-2 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition-all"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block p-2 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 transition-all"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Hero;
