import React from "react";
import "./styles/registerHeroSection.css"
import astronaut from "../../assets/astronaut2.png"
const RegisterHeroSection = () => {
  return (
    <div className="register-hero-section">
      <div className="info-container">
        <span className="register-hero-section-title">
          Unleash Your Inner Astronaut
        </span>
        <span className="register-hero-section-subtitle">
          IIITV's Space-themed Tech Extravaganza!
        </span>
        <span className="register-hero-section-info">
          Join us on a journey of innovation and exploration at our tech fest,
          where each event is a stepping stone towards a brighter technological
          future. Discover, learn, and connect as we embark together on this
          transformative journey!
        </span>
        <button className="register-button">Register Now</button>
      </div>
      <div className="register-hero-img-container">
        <img src = {astronaut} alt="astronaut" />
      </div>
    </div>
  );
};

export default RegisterHeroSection;
