import React, { useState } from "react";
import "./DeleteAccount.css";

import { Navbar } from "react-bootstrap";
import {
  contactusimage2,
  eyeclosed,
  eyeopen,
  realintakeslogo,
} from "../../components/Images";
import { Link } from "react-router";
import { deleteAccount } from "../../components/apis";
import axios from "axios";

const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    try {
      const response = await axios.post(deleteAccount, formData);
      console.log(response.data);
      const { status, message } = response.data;
      if (status === true) {
        Alert.alert(message);
        setFormData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-header">
        <div className="delete-account-header1">
          <Navbar.Brand className="navbar-brand justify-content-lg-start">
            <img src={realintakeslogo} alt="realintakeslogo" width={50} />
            <h4 className="ms-2">Right Intake</h4>
          </Navbar.Brand>
          <div className="delete-account-header2">
            <div className="delete-account-header2-content">
              <Link to={"/"}>
                <img src={contactusimage2} alt="contactusimage2" width={50} />
              </Link>
              <p>Delete Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="delete-account-wrapper">
        <div className="delete-account-card">
          <div className="delete-account-card-section2">
            <form className="delete-account-form" onSubmit={handleSubmit}>
              <div className="delete-account-form-wrapper1">
                {/* Email Field */}
                <div className="delete-account-form-group">
                  <label htmlFor="email">Email Id</label>
                  <input
                    className="delete-account-input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password Field with Toggle */}
                <div className="delete-account-form-group">
                  <label htmlFor="password">Password</label>
                  <div className="delete-account-password-wrapper">
                    <input
                      className="delete-account-input"
                      type={showPassword ? "text" : "password"} // Toggle type
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <img
                      src={!showPassword ? eyeopen : eyeclosed} // Switch icon
                      alt="Toggle Password"
                      className="delete-account-toggle-eye"
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>

                <p className="delete-account-note">
                  *This action will permanently delete your account and all associated data. This cannot be undone.
                </p>
              </div>

              <div className="delete-submitbutton-div">
                <button type="submit" className="submit-button">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
