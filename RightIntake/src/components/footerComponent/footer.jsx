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
          {/* Left Section */}
          <div className="footer-section1">
            <Navbar.Brand className="navbar-brand justify-content-lg-start">
              <img src={realintakeslogo} alt="realintakeslogo" width={60} />
              <h4 className="ms-2">Right Intake</h4>
            </Navbar.Brand>

            <div className="address-container">
              <span>
                Address: Kineticscape Studios, plot no.64, Shivaji housing
                society,
              </span>
              <span> near Shivaji stadium,</span>
              <span> Karad, 415110.</span>
              <span> contact@rightintake.com</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="footer-section2">
            <Link to={"/termsandservices"}>
              <span className="footer-section-span">Terms and Conditions</span>
            </Link>
            <div className="footer-getappbutton">
              <span className="footer-getappbutton-p">Get rightintake app</span>
            </div>
            <Link to={"/contactus"}>
              <img src={contactusimage} alt="message" width={20} />
              <span className="footer-section-span">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
