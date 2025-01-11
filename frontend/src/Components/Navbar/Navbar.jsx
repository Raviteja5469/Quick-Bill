import React from "react";
import { useState } from "react";
import "./Navbar.css";
import logo from "/src/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { Link, Outlet } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="logo-with-name">
        <img src={logo} alt="Logo" />
        <span className="logo-name">QUICK BILL</span>
      </div>
      <div className="navbar-options">
        <ul>
          <li onClick={() => {setMenu("home");}}><Link to='/' style={{textDecoration:'none', color:'black'}}> Home </Link> {menu === "home" ? <hr /> : <></>}</li>

          <li onClick={() => {setMenu("features");}}><Link to='/feature/dashboard' style={{textDecoration:'none', color:'black'}}> Features</Link> {menu === "features" ? <hr /> : <></>}</li>

          <li onClick={() => {setMenu("about");}}><Link to='/' style={{textDecoration:'none', color:'black'}}> About </Link>{menu === "about" ? <hr /> : <></>}</li>

          <li onClick={() => {setMenu("pricing");}}><Link to='/pricing' style={{textDecoration:'none', color:'black'}}>  Pricing </Link>{menu === "pricing" ? <hr /> : <></>}</li>

          <li onClick={() => {setMenu("faq");}}><Link to='/faqs' style={{textDecoration:'none', color:'black'}}> FAQ's </Link>{menu === "faq" ? <hr /> : <></>}</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button
          className="login-button"
          onClick={() => {
            setShowLogin(true);
          }}
        >
           Login 
        </button>
        <FontAwesomeIcon className="profile" icon={faCircleUser} />
      </div>
    </div>
  );
};

export default Navbar;
