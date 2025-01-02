import React from "react";
import "./Hero.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero-heading">
        Explore Our Site for Hassle-Free Billing and Comprehensive Accounting
        Services      </p>
      <button className="explore-button" onClick={()=> {console.log("explore button clicked")}}>
        <p>Explore More</p> <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Hero;
