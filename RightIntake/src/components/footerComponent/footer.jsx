import React from "react";
import "./footer.css";
import { Button, Navbar } from "react-bootstrap";
import { contactusimage, homescreenimage1, realintakeslogo } from "../Images";
import { Link } from "react-router";
import { fireemoji } from "../../components/Images";
import { useNavigate } from "react-router";
const Footer = () => {
  const navigateFooter = useNavigate();
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-line-wrapper"></div>
          <div
            className="footer-brand-wrapper"
            onClick={() => navigateFooter("/")}
          >
            <div className="brand-logo-wrapper">
              <img src="/images/RightintakeLogo_website.png" alt="" />
            </div>

            <div className="brand-name-wrapper">
              <span>Right Intake</span>
            </div>
          </div>
          <div
            className="t-and-c-container"
            onClick={() => navigateFooter("/blog")}
          >
            <span>Blog</span>
          </div>
          <div
            className="t-and-c-container"
            onClick={() => navigateFooter("/termsandservices")}
          >
            <span>Terms and services</span>
          </div>
          <div className="contact-us-container">
            <div className="contact-us-heading">
              <span>Contact Us</span>
            </div>
            <div className="contact-us-email">
              <span>contact@rightitnake.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
