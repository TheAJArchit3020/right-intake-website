import React, { useState } from "react";
import "./navbar.css";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { hammerimage, realintakeslogo } from "../Images";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { fireemoji } from "../../components/Images";

const NavbarComponent = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      {/* new code */}
      <div className="newNavbarContainer">
        <div className="navBarBrand">
          <img src={realintakeslogo} alt="realintakeslogo" width={40} />
          <span className="Rightintake-Logo-Name">Right Intake</span>
        </div>
        <div className="navTabs">
          <div className="navTabs-p" onClick={() => scrollToSection("home")}>
            <span>Home</span>
          </div>
          <div
            className="navTabs-p"
            onClick={() => scrollToSection("tracking")}
          >
            <span>Tracking</span>
          </div>
          <div
            className="navTabs-p"
            onClick={() => scrollToSection("foodlens")}
          >
            <span>FoodLens</span>
          </div>
          <div
            className="navTabs-p"
            onClick={() => scrollToSection("smartmeal")}
          >
            <span>Smartmeal</span>
          </div>
          <div
            className="navTabs-p"
            onClick={() => scrollToSection("nutriplans")}
          >
            <span>NutriPlans</span>
          </div>
          <div className="navTabs-p" onClick={() => scrollToSection("reviews")}>
            <span>Reviews</span>
          </div>
        </div>
        <div className="getappbutton">
          <p className="getappbutton-p">Get rightintake app</p>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
