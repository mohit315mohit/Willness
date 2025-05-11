// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/login';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Routes>
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       {/* <Route path="/dashboard" element={<Dashboard />} /> */}
       <Route path='/' element={<Home/>}/>
       <Route path='/quiz' element={<Quiz/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/profile' element={<Profile/>}/>
    </Routes>
  );
}
