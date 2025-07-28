// src/components/pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 bg-white shadow-xl rounded-xl p-8 w-full max-w-md border border-gray-100">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 p-2 rounded-full">
            <div className="bg-amber-200 p-2 rounded-full">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/assets/logo.jpg"
                  alt="PAS Logo"
                  className="w-16 h-16 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Member <span className="text-amber-600">Login</span>
        </h2>
        
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email"
              placeholder="you@example.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Link to="/forgot-password" className="text-sm text-amber-600 hover:text-amber-700">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              id="password"
              placeholder="••••••••" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember"
              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Login to Account
          </button>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              New user?{' '}
              <Link 
                to="/signup" 
                className="font-semibold text-amber-600 hover:text-amber-700 hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </form>
        
      
      </div>
    </div>
  );
};

export default Login;