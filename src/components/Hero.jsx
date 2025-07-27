import React from 'react';

const Hero = () => {
  return (
    <div 
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/home.jpg')",
        height: '85vh',
        minHeight: '600px'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Circle with Logo */}
        <div className=" rounded-full p-4 mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/assets/logo.jpg"
              alt="Logo"
              className="w-32 h-32  object-cover"
            />
          </div>
        </div>

        {/* Title & Description */}
        <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight mb-6">
          Welcome to Poultry Association Society
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mb-10">
          Promoting excellence in poultry science and supporting poultry farmers worldwide
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 text-lg shadow-lg">
            Become a Member
          </button>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-3 px-8 rounded-lg transition duration-300 text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
