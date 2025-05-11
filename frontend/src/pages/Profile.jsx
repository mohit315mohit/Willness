/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/me', { withCredentials: true });
      setUser(res.data.user);
    } catch (error) {
      console.error('Error fetching profile:', error);
      navigate('/login');  // Redirect to login if unauthorized
    }
  };

  const handleLogout = async () => {
    try {
      // Clear the cookie by calling logout API
      await axios.post('http://localhost:5000/api/auth/logout', { withCredentials: true });
      localStorage.removeItem('token'); // Also remove local token if any
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl font-semibold">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200 flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center"
      >
        <img 
          src="" 
          alt="Profile" 
          className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-indigo-500 object-cover"
        />
        <h1 className="text-3xl font-bold text-indigo-800 mb-2">{user.name}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>

        <div className="flex flex-col gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full"
            onClick={() => navigate('/')}
          >
            Go Home
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full"
            onClick={handleLogout}
          >
            Sign Out
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;
