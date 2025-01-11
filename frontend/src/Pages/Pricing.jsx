import React from 'react'
import { useState, useEffect } from 'react'
import './CSS/Pricing.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import LoginSignup from './LoginSignup'


const Pricing = () => {
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
      window.addEventListener("wheel", preventScroll, { passive: false }); // Modern browsers
      window.addEventListener("touchmove", preventScroll, { passive: false }); // For touch devices
      document.body.style.overflow = "hidden"; // fallback for some cases
    } else {
      // Remove event listeners
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      document.body.style.overflow = "unset";
    }
  
    // Cleanup function to remove listeners when component unmounts or state changes
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      document.body.style.overflow = "unset";
    };
  }, [showLogin]); // Run effect when showLogin changes


  return (
    <>
    <Navbar setShowLogin={setShowLogin} />
    {showLogin && <LoginSignup setShowLogin={setShowLogin} />}

    <div className='pricing-container'>
      this is pricing page
    </div>


    <Footer/>
    </>
  )
}

export default Pricing
