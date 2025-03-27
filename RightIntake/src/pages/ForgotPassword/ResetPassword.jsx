import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { realintakeslogo } from "../../components/Images";
import "./ForgotPassword.css";
import axios from "axios";
import { forgotpassword, resetpassword } from "../../components/apis";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const ResetPassword = () => {
  const location = useLocation();
  const { email } = location.state || {};

  console.log({ email });

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmpassword: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = (label, value) => {
    let error = "";
    if (label === "password" && value.length < 6) {
      error = "Password must be at least 6 characters";
    }
    if (label === "confirmpassword" && value !== formData.password) {
      error = "Passwords do not match";
    }
    setErrors((prev) => ({ ...prev, [label]: error }));
  };

  const onChangeInputHandler = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
    validateForm(label, value);
  };

  const ResetPasswordHandler = async () => {
    if (formData.password !== formData.confirmpassword) {
      setErrors((prev) => ({
        ...prev,
        confirmpassword: "entered password did not match",
      }));
      return;
    }

    setMessage(""); // Reset message


    try {
      const response = await axios.post(resetpassword, {
        email: email,
        newPassword: formData?.password,
      });

      if (response) {
        setMessage("Password reset successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setMessage(
          response.data.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      setMessage("Error resetting password. Please try again.");
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
            Enter your new password to reset your account access.
          </span>

          {/* Password Input */}
          <div className="form-inputes">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  onChangeInputHandler("password", e.target.value)
                }
              />
              <img
                src={
                  showPassword
                    ? "/images/eyeopenicon.svg"
                    : "/images/eyecloseicon.svg"
                }
                alt="toggle visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon"
              />
              <span className="pass-note">
                Password must contain 8 characters includes 1 capital letter and
                1 symbol
              </span>
            </div>
            {errors.password && (
              <p className="forgotpassword-error-text">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="form-inputes">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmpassword}
                onChange={(e) =>
                  onChangeInputHandler("confirmpassword", e.target.value)
                }
              />
              <img
                src={
                  showConfirmPassword
                    ? "/images/eyeopenicon.svg"
                    : "/images/eyecloseicon.svg"
                }
                alt="toggle visibility"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="eye-icon"
              />
            </div>
            {errors.confirmpassword && (
              <p className="forgotpassword-error-text">
                {errors.confirmpassword}
              </p>
            )}
          </div>

          {/* Message */}
          {message && <p className="otp-message">{message}</p>}
        </div>

        {/* Reset Password Button */}
        <div
          className="forgotpassword-button-container"
          onClick={ResetPasswordHandler}
        >
          <button className="forgotpassword-button">Save Password</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
