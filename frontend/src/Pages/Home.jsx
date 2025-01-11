// this page is shown before the login, means its the landing page
// like the first page before user logins where we show our details (services, signupbutton with hero, FAQs, etc)
import React from 'react'
import { useState, useEffect } from 'react'
import './CSS/Home.css'
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import FAQs from "../Components/FAQs/FAQs";
import FeatureList from "../Components/FeatureList/FeatureList";
import Footer from "../Components/Footer/Footer";
import LoginSignup from './LoginSignup';

const Home = () => {

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
    <div className='home-container'>
      <Navbar setShowLogin={setShowLogin} />
      {showLogin && <LoginSignup setShowLogin={setShowLogin} />}
      <Hero/>
      <FeatureList/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default Home
