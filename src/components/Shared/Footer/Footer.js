import React from "react";
import "./Footer.css";
import Logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <img src={Logo} alt="" style={{ width: "20%" }} />
        <div>
          <div className="footer-text">
            <a href="">About Online food</a>
          </div>
          <div className="footer-text">
            <a href="">Read our blog</a>
          </div>
          <div className="footer-text">
            <a href="">Sign up to deliver</a>
          </div>
          <div className="footer-text">
            <a href="">Add your restaurant</a>
          </div>
        </div>

        <div>
          <div className="footer-text">
            <a href="">Get help</a>
          </div>
          <div className="footer-text">
            <a href="">Restaurants near me</a>
            <a href="">Read FAQs</a>
          </div>
          <div className="footer-text">
            <a href="">View all cities</a>
          </div>
          <div className="footer-text">
            <a href="">Restaurants near me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
