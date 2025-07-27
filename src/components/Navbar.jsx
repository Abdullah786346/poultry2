import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg py-4 px-4 md:px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <div className="bg-amber-600 text-white font-bold text-xl p-2 rounded mr-3">PAS</div>
            <div>
              <div className="text-xl font-bold text-gray-800">Poultry Association</div>
              <div className="text-sm text-amber-600">Society for Excellence</div>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="public/assets/logo.jpg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0`}>
          <div className="flex flex-col md:flex-row md:space-x-8 w-full">
            <a href="#" className="py-2 px-4 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium">Home</a>
            <a href="#" className="py-2 px-4 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium">About</a>
            <a href="#" className="py-2 px-4 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium">Membership</a>
            <a href="#" className="py-2 px-4 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium">Events</a>
            <a href="#" className="py-2 px-4 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium">Resources</a>
            <a href="#" className="py-2 px-4 text-gray-800 hover:bg-amber-50 hover:text-amber-600 rounded-lg font-medium">Contact</a>
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-8 flex">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg w-full md:w-auto">
              Member Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;