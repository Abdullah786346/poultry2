// src/components/pages/Signup.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    role: 'farmer',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically handle form submission to your backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-yellow-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-amber-100">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-amber-50 rounded-full mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center border-4 border-amber-200">
              <img
                src="/assets/logo.jpg"
                alt="PAS Logo"
                className="w-16 h-16 object-cover"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            Create Your <span className="text-amber-600">Account</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Join the Poultry Association Society community today
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input 
                type="text" 
                id="firstName"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input 
                type="text" 
                id="lastName"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="you@example.com" 
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
              required
            />
          </div>
          
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization/Farm
            </label>
            <input 
              type="text" 
              id="organization"
              name="organization"
              placeholder="Sunshine Poultry Farm" 
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
          </div>
          
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Your Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            >
              <option value="farmer">Poultry Farmer</option>
              <option value="researcher">Researcher</option>
              <option value="veterinarian">Veterinarian</option>
              <option value="supplier">Supplier</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input 
                type="password" 
                id="password"
                name="password"
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                required
              />
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input 
                type="password" 
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••" 
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                required
              />
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input 
                type="checkbox" 
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreeTerms" className="text-gray-600">
                I agree to the <a href="#" className="font-medium text-amber-600 hover:text-amber-700">Terms of Service</a> and <a href="#" className="font-medium text-amber-600 hover:text-amber-700">Privacy Policy</a>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Create Account
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="font-semibold text-amber-600 hover:text-amber-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
        
      
      </div>
    </div>
  );
};

export default Signup;