import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeTiles from './components/HomeTiles';
import Mission from './components/Mission';
import Membership from './components/Membership';
import News from './components/News';
import Footer from './components/Footer';

// Pages
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Dashboard from './components/pages/Dashboard'; // ✅ Add this
import PrivateRoute from './components/PrivateRoute'; // ✅ Add this

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <Routes>
          {/* Public Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section id="resources">
                  <Mission />
                </section>
                <section id="about">
                  <HomeTiles />
                </section>
                <section id="membership">
                  <Membership />
                </section>
                <section id="news">
                  <News />
                </section>
                <section id="contact">
                  <Footer />
                </section>
              </>
            }
          />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
