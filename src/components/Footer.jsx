import React from "react";
import { footerLinks } from "../data/footerLinks";
import "../styles/Footer.css";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="top-footer">
                <img src={logo} alt="" />

        </div>
      <div className="footer-container">
        {footerLinks.map((section, index) => (
          <div className="footer-column" key={index}>
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li className="footerLinks" key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-social">
        <a href="#" className="social-icon">Facebook</a>
        <a href="#" className="social-icon">Instagram</a>
        <a href="#" className="social-icon">LinkedIn</a>
        <a href="#" className="social-icon">Twitter</a>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved ©2023, IRCTC</p>
        <p>
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
