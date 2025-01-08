import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer/Footer'
// import { Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import FAQs from './Components/FAQs/FAQs'
import FeatureList from './Components/FeatureList/FeatureList'
import LoginSignup from './Pages/LoginSignup';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Function to prevent scrolling
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation(); // Stop event bubbling
      return false;
    };

    if (showLogin) {
      // Add event listeners to prevent scrolling
      window.addEventListener('wheel', preventScroll, { passive: false }); // Modern browsers
      window.addEventListener('touchmove', preventScroll, { passive: false }); // For touch devices
      document.body.style.overflow = 'hidden'; // fallback for some cases
    } else {
      // Remove event listeners
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to remove listeners when component unmounts or state changes
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = 'unset';
    };
  }, [showLogin]); // Run effect when showLogin changes

  // for now keep it like this later i will add routing

  return (
    <>
    {showLogin && <LoginSignup setShowLogin={setShowLogin} />}
    <Navbar setShowLogin={setShowLogin} />
    {/* <Navbar/> */}
    <Hero/>
      <FeatureList/>
      <FAQs/>
      <Footer/>

    </>
  )
}

export default App

