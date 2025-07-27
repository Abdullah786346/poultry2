import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeTiles from './components/HomeTiles'; // <-- New
import Mission from './components/Mission';
import Membership from './components/Membership';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <HomeTiles /> {/* New section here */}
      <Mission />
      <Membership />
      <Footer />
    </div>
  );
}

export default App;
