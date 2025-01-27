import React from "react";
import "./Hero.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero">
      <p className="hero-heading">
        <h1>Explore Our Site for Hassle-Free Billing and Comprehensive Accounting
          Services</h1>
        <h2>
          Billing and accounting, made simpler: a one-stop solution that helps you pay, get paid, invoice, manage finances, track expenses, find financing & optimize cash flow.
        </h2>
      </p>
      </div>
      <div className="hero-images">
        <img className="hero_img_1" src="/src/assets/hero_img_2.jpg" alt="" />
        <button className="explore-button" onClick={() => { console.log("explore button clicked") }}>
          <p>Explore More</p> <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </button>
        <img className="hero_img_2" src="/src/assets/hero_img_1.jpg" alt="" />
      </div>

    </div>

  );
};

export default Hero;
