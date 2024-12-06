import React from 'react';
import './footer.css';
import { Button, Navbar } from 'react-bootstrap';
import { realintakeslogo } from '../Images';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        {/* Left Section */}
        <div className="footer-section1">
          <Navbar.Brand href="#" className="d-flex align-items-center justify-content-center justify-content-lg-start">
            <img src={realintakeslogo} alt="realintakeslogo" width={60} />
            <h4 className="ms-2">Right Intake</h4>
          </Navbar.Brand>
          <Button className="btn footer-button mt-2 mt-3">
            Get your personalised plan now &#128293;
          </Button>
          <p className="mt-3 text-center text-lg-start">
            Address: Kineticscape Studios, plot no.64, Shivaji housing society,<br />
            near Shivaji stadium,<br />
            Karad, 415110.
          </p>
          <p className="text-center text-lg-start">contact@rightintake.com</p>
        </div>

        {/* Right Section */}
        <div className="footer-section2">
          <p className="mb-2">Terms and Conditions</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
