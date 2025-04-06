// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/login';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

export default function App() {
  return (
    <Routes>
       <Route path="/signup" element={<Signup />} />
       <Route path="/login" element={<Login />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path='/home' element={<Home/>}/>
       <Route path='/quiz' element={<Quiz/>}/>
    </Routes>
  );
}
