/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  return (
    <nav className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide">Wellness Whisper</h1>
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
         <li><button  onClick={() => navigate("/home")}>Home</button></li>
         <li><button  onClick={() => navigate("/about")}>About</button></li>
         <li><button  onClick={() => navigate("/quiz")}>Quiz</button></li>
         <li><button  onClick={() => navigate("/contact")}>Contact Us</button></li>
        </ul>
        <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold"
         onClick={() => navigate("/login")}
        >Login</button>
      </div>
    </nav>
  );
};

export default Header;