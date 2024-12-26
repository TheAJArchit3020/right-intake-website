import React, { useState } from "react";
import "./ContactUs.css";

import Layout from "../layoutPage";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
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
    <Layout>
      <div className="contact-us-container">
        <div className="contact-us-wrapper">
          <div className="contact-us-heading">
            <div className="contact-us-head">
              <span>Contact us</span>
            </div>
            <div className="contact-us-content">
              <span>Ask about our platform, pricing or anything else</span>
              <span>Contact Number:+91 9561930878</span>
              <span>contact@rightintake.com</span>
            </div>
          </div>
          <div className="contact-us-form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="fullName">Enter your full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="mobileNumber">Your mobile number</label>
              <div className="mobile-input">
                <select name="countryCode" defaultValue="+91">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="submit-button">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
