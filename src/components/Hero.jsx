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
          <div className="rounded-full p-2 sm:p-4 mb-4 sm:mb-6 bg-opacity-80 shadow-lg">
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
    </div>
  );
};

export default Hero;