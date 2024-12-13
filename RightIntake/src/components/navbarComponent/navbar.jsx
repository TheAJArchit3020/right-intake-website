import React, { useState } from 'react'
import './navbar.css'
import { Button, Container, Navbar,  Offcanvas } from 'react-bootstrap'
import { hammerimage, realintakeslogo } from '../Images'
import { Link } from 'react-router'


const NavbarComponent = () => {


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  return (
    <>
      <Navbar key={false} expand={false} className="bg-body mb-3">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={realintakeslogo} alt="realintakeslogo" width={60} />
            <h4>Right intake</h4>
          </Navbar.Brand>
          <img src={hammerimage} alt="hammerimage" width={40} onClick={() => handleShow()} />

        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className='sidebar-menu d-flex flex-column gap-4 '>
          <Link to={'/'}>
            <span>Home</span>
          </Link>
          <Link to={'/termsandservices'}>
            <span>Tearms and Condition</span>
          </Link>
          <Link to={'/contactus'}>
            <span>Contact Us</span>
          </Link>
          <Link to={'/aboutus'}>
            <span>About Us</span>
          </Link>

          <Button className="btn footer-button mt-2 mt-3">
            Get your personalised plan now &#128293;
          </Button>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default NavbarComponent