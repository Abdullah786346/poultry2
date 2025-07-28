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
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{
        height: '85vh',
        minHeight: '500px',
      }}
    >
      {/* Fixed Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Image Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-contain object-center transition-all duration-500 ease-in-out"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Circle with Logo */}
        <div className="rounded-full p-4 mb-6 bg-white bg-opacity-80 shadow-lg">
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              className="w-32 h-32 object-cover"
            />
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-6 drop-shadow-lg">
          Welcome to Poultry Association Society
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mb-10 drop-shadow-md">
          Promoting excellence in poultry science and supporting poultry farmers worldwide
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg transform hover:scale-105">
            Become a Member
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
