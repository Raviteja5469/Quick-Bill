import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const popSectionRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollPos = window.scrollY;

      // Move left image left, right image right
      if (leftImgRef.current && rightImgRef.current) {
        leftImgRef.current.style.transform = `translateX(-${scrollPos * 0.4}px)`;
        rightImgRef.current.style.transform = `translateX(${scrollPos * 0.4}px)`;
      }

      // Add or remove 'popped' class based on scroll threshold
      if (popSectionRef.current) {
        if (scrollPos > 100) {
          popSectionRef.current.classList.add("popped");
        } else {
          popSectionRef.current.classList.remove("popped");
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero_container">
      {/* Hero Heading */}
      <div className="hero">
        <div className="hero-heading">
          <h1>Explore Our Site for Hassle-Free Billing and Comprehensive Accounting Services</h1>
          <h2>
            Billing and accounting, made simpler: a one-stop solution that helps you pay,
            get paid, invoice, manage finances, track expenses, find financing &amp; optimize cash flow.
          </h2>
        </div>
      </div>

      {/* Pop Section */}
      <div ref={popSectionRef} className="pop-section">
        <h2>
          Business banking, made better: an online account that helps you pay, get paid,
          invoice, bookkeep, manage expenses, find financing &amp; oversee cash flow.
        </h2>
      </div>

      {/* Images and Button */}
      <div className="hero-images">
        <img
          ref={leftImgRef}
          className="hero_img_1"
          src="/src/assets/hero_img_2.jpg"
          alt="Left Visual"
        />
        <button
          className="explore-button"
          onClick={() => console.log("Explore button clicked")}
        >
          <p>Explore More </p>
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </button>
        <img
          ref={rightImgRef}
          className="hero_img_2"
          src="/src/assets/hero_img_1.jpg"
          alt="Right Visual"
        />
      </div>
    </div>
  );
};

export default Hero;
