// AppRouter.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import LandingPage from '../pages/LandingPage';
import AboutUs from '../pages/AboutUS';
import Contacts from '../pages/Contacts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about-us" element={<AboutUs />} /> 
      <Route path="/contacts" element={<Contacts />} /> 
    </Routes>
  );
};

export default AppRouter;