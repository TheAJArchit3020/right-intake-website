import React, { useState } from "react";
import "./navbar.css";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { hammerimage, realintakeslogo } from "../Images";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { fireemoji } from "../../components/Images";
const NavbarComponent = () => {
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
      {/* <Navbar key={false} expand={false} className="bg-body mb-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={realintakeslogo} alt="realintakeslogo" width={40} />
            <span className="Rightintake-Logo-Name">Right Intake</span>
          </Navbar.Brand>
          <img
            src={hammerimage}
            alt="hammerimage"
            width={40}
            onClick={() => handleShow()}
            className="hamburger-nav-bar"
          />
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className="sidebar-menu d-flex flex-column gap-4 ">
          <Link to={"/"}>
            <div className="home-btn">
              <span className="Heading2">Home</span>
            </div>
          </Link>
          <Link to={"/termsandservices"}>
            <div className="terms-a-c-btn">
              <span className="Heading2">Terms and Services</span>
            </div>
          </Link>
          <Link to={"/contactus"}>
            <div className="contact-us-btn">
              <span className="Heading2">Contact Us</span>
            </div>
          </Link>
          <Link to={"/aboutus"}>
            <div className="about-us-btn">
              <span className="Heading2">About Us</span>
            </div>
          </Link>
          <div
            className="nav-bar-cta mt-5"
            onClick={() => navigate("/dietplanform")}
          >
            <span className="nav-bar-btn-Text">
              Get your personalized plan now
            </span>
            <img src={fireemoji} alt="" />
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}

      {/* new code */}
      <div className="newNavbarContainer">
        <div className="navBarBrand">
          <img src={realintakeslogo} alt="realintakeslogo" width={40} />
          <span className="Rightintake-Logo-Name">Right Intake</span>
        </div>
        <div className="navTabs">
          <p className="navTabs-p" >Home</p>
          <p className="navTabs-p" >Tracking</p>
          <p className="navTabs-p" >FoodLens</p>
          <p className="navTabs-p" >Smartmeal</p>
          <p className="navTabs-p" >NutriPlans</p>
          <p className="navTabs-p" >Reviews</p>
        </div>
        <div className="getappbutton">
          <p className="getappbutton-p">Get rightintake app</p>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
