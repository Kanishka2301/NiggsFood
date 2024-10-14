import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            A food delivery website allows users to browse through various
            restaurants, view their menus, and place orders for home delivery.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} at="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-234-345-5678</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr></hr>
        <p className="footer-copyright">
          Copyright 2024 @Tomato.com -A Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
