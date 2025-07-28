// src/components/pages/Dashboard.jsx
import React from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-amber-600 mb-4">Welcome to the Dashboard</h1>
      <p className="mb-8 text-gray-700">You are successfully logged in.</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
