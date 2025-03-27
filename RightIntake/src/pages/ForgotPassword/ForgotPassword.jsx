import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { realintakeslogo } from "../../components/Images";
import "./ForgotPassword.css";
import axios from "axios";
import { forgotpassword } from "../../components/apis";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (label, value) => {
    let error = "";
    if (label === "email") {
      error = validateEmail(value) ? "" : "Invalid email format";
    }
    setErrors((prev) => ({ ...prev, [label]: error }));
  };

  const onChangeInputHandler = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
    validateForm(label, value);
  };

  const RequestOtpHandler = async () => {
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      return;
    }
    setMessage(""); // Reset message

    try {
      const response = await axios.post(forgotpassword, {
        email: formData.email,
      });

      if (response) {
        setMessage("OTP sent successfully! Check your email.");
        setTimeout(() => {
            navigate("/verifyotp", { state: { email: formData?.email } });
          }, 1000);
      } else {
        setMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending OTP. Please check your email.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="forgotpassword-container">
      <div className="forgotpassword-header">
        <Navbar.Brand className="forgotpassword-header-wrapper">
          <img src={realintakeslogo} alt="realintakeslogo" width={50} />
          <h4 className="ms-2">Right Intake</h4>
        </Navbar.Brand>
      </div>

      <div className="forgotpassword-wrapper">
        <div className="forgotpassword-wrapper-content">
          <span className="forgotpassword-content-heading">Reset password</span>
          <span className="forgotpassword-content-note">
            Enter the email address you registered with, and we'll send you an
            OTP to reset your password.
          </span>
          <div className="form-inputes">
            <input
              type="text"
              placeholder="Enter your mail id"
              value={formData.email}
              onChange={(e) => onChangeInputHandler("email", e.target.value)}
            />
            {errors.email && (
              <p className="forgotpassword-error-text">{errors.email}</p>
            )}
          </div>
          {message && <p className="otp-message">{message}</p>}
        </div>
        <div
          className="forgotpassword-button-container"
          onClick={RequestOtpHandler}
        >
          <button className="forgotpassword-button">Request OTP</button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
