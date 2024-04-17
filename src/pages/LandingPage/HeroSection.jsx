import React from "react";
import "./styles/heroSection.css";
import astronaut from "/assets/astronaut.png";
import Navbar from "../../components/Navbar";
const HeroSection = () => {
  return (
    <>
   <Navbar/>
    <div className="hero-section">
  
      <span className="hero-section-title">Cerebro</span>
      <div className="hero-section-img-container">
            <img src={astronaut} alt="astronaut loading..."/>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
