import React from "react";
import "./styles/footer.css";
import logo from "/assets/logo.svg";
import twitter from "/assets/twitter.svg";
import instagram from "/assets/instagram.svg";
import phone from "/assets/phone.svg";
import mail from "/assets/email.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-overlay"></div>
      <img src={logo} />
      <div className="footer-left">
        <span className="footer-title">Cerebro</span>
        <span className="footer-subtitle">The Tech Fest</span>
        <span className="footer-info">
          Indian Institute of Information Technology Vadodara
        </span>
      </div>
      <div className="contact-us-container">
        <span className="contact-us-title">Contact Us</span>
        <div className="socials-container">
          <span className="socials-row">
            <img src={twitter} alt="twitter" /> @cerebro_iiitv
          </span>
          <span className="socials-row">
            <img src={instagram} alt="instagram" /> @cerebro_iiitv
          </span>
          <span className="socials-row">
            <img src={phone} alt="phone" />
            +91 99887 76554, +91 66778 88993
          </span>
          <span className="socials-row">
            <img src={mail} alt="mail" />
            cerebro@iiitvadodara.ac.in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
