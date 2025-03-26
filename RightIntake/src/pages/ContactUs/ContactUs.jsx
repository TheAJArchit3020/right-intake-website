import React, { useState } from "react";
import "./ContactUs.css";

import { Navbar } from "react-bootstrap";
import {
  contactusimage2,
  contactusimage3,
  contactusimage4,
  contactusimage5,
  realintakeslogo,
} from "../../components/Images";
import { Link } from "react-router";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <div className="contact-us-header1">
          <Navbar.Brand className="navbar-brand justify-content-lg-start">
            <img src={realintakeslogo} alt="realintakeslogo" width={50}  />
            <h4 className="ms-2">Right Intake</h4>
          </Navbar.Brand>

          <div className="contact-us-header2">
            <div className="contact-us-header2-content">
              <Link to={'/'}>
              <img src={contactusimage2} alt="contactusimage2" width={50} />
              </Link>
              <p>Get in touch</p>
            </div>
            <p className="contact-us-header-detail">
              Whether you have questions, need support, or want to learn more
              about our services, we're here to help! Reach out to us, and our
              team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us-wrapper">
        <div className="contact-us-card">
          <div className="contact-us-card-section1">
            <p className="contact-us-card-section1-para">Contact information</p>
            <div className="contact-us-card-section1-wrapper">
              <div className="contact-us-card-section1-groupcontent">
                <img src={contactusimage3} alt="contactusimage3" width={16} />
                <p></p>
              </div>
              <div className="contact-us-card-section1-groupcontent">
                <img src={contactusimage4} alt="contactusimage3" width={16} />
                <p>contact@rightintake.com</p>
              </div>
              <div className="contact-us-card-section1-groupcontent">
                <img src={contactusimage5} alt="contactusimage3" width={16} />
                <p>Karad, Maharastra</p>
              </div>
            </div>
          </div>

          <div className="contact-us-card-section2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-wrapper1">
                <div className="contact-form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    className="contact-input"
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="email">Email Id</label>
                  <input
                    className="contact-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="subject">Subject</label>
                <textarea
                  className="contact-input"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enquiry"
                  required
                ></textarea>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="contact-input"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please  explain the issue briefly"
                  required
                ></textarea>
              </div>
              <div className="submitbutton-div">
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
