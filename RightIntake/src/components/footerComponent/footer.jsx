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
            {/* <div
              className="footer-cta mt-5"
              onClick={() => navigateFooter("/dietplanform")}
            >
              <span className="footer-btn-Text">
                Get your personalized plan now
              </span>
              <img src={fireemoji} alt="" />
            </div> */}
            <p className="mt-4 text-left text-lg-start">
              Address: Kineticscape Studios, plot no.64, Shivaji housing
              society,
              <br />
              near Shivaji stadium,
              <br />
              Karad, 415110.
            </p>
            <p className="text-sm-start text-lg-start">
              contact@rightintake.com
            </p>
          </div>

          {/* Right Section */}
          <div className="footer-section2">
            <Link to={"/termsandservices"}>
              <p className="mb-2">Terms and Conditions</p>
            </Link>
            <div className="footer-getappbutton">
              <p className="footer-getappbutton-p">Get rightintake app</p>
            </div>
            <Link to={"/contactus"}>
              <p>
                <img src={contactusimage} alt="message" width={20} /> Contact Us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
