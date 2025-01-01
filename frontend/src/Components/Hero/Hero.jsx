import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="home" color='red'>
      <img src="assets\hero2" alt="" />
      <div className="hero">
        <div className="hero-container">
          <img className="hero_image_main" src={"https://img.freepik.com/free-photo/top-view-desk-concept-with-notepad_23-2148604955.jpg"} alt="" />
            <h1 className='hero-heading'>Explore Our Site for Hassle-Free Billing and Comprehensive Accounting Services</h1>
            <p className='hero-para'>Our team of experts is eagerly waiting to assist you with the service. </p>
            <div className="buttons"><button>Try for free!</button>
            <button>SIGN-IN</button></div>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
