import React, { useState } from 'react';
import Footer from './Components/Footer/Footer'
// import { Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import FAQs from './Components/FAQs/FAQs'
import FeatureList from './Components/FeatureList/FeatureList'
import LoginSignup from './Pages/LoginSignup/LoginSignup';

function App() {
  const [showLogin, setShowLogin] = useState(false);

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


// if fontawesome packages are not present follow these steps
// npm install --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/free-regular-svg-icons
// npm install --save @fortawesome/free-brands-svg-icons
// npm install --save @fortawesome/react-fontawesome
// then
// import and use
