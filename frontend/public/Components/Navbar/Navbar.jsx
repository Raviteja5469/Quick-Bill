import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo_with_name">
          <img src="assets\logo.png" alt="Logo"/>
          <h1>QUICK BILL</h1>
        </div>
        <div className="navbar_options">
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Pricing</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="navbar_right">
          <button className="login_button">Login</button>
          <img src="https://pic.onlinewebfonts.com/thumbnails/icons_310946.svg" alt="" />
        </div>
    </div>
  )
}

export default Navbar

