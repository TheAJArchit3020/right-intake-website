import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { realintakeslogo } from "../../components/Images";
import "./ForgotPassword.css";
import axios from "axios";
import { verifyforgotpassword } from "../../components/apis";
import { useLocation, useNavigate } from "react-router";
import { Alert } from "bootstrap";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30); // Timer state for countdown
  const [canResend, setCanResend] = useState(false); // Flag to show resend OTP
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval); // Cleanup interval on unmount or timer reaching 0
    } else {
      setCanResend(true); // Enable resend OTP once timer reaches 0
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1); // Only keep last entered character
    setOtp(newOtp);

    // Move to the next input if not the last digit
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      alert("Please enter a 6-digit OTP");
      return;
    }

  
    try {
      const response = await axios.post(verifyforgotpassword, {
        email: email,
        otp: otpCode,
      });
      if (response.status === 200) {
        navigate("/resetpassword", { state: { email: email } });
      }else{
        alert("Something went wrong")
      }

    } catch (error) {
      console.error(error);
    }
  };

  const handleResendOtp = async () => {
    setTimer(30); // Reset timer to 30 seconds when OTP is resent
    setCanResend(false); // Disable resend OTP until timer is up
    // Call API to resend OTP
    try {
      const response = await axios.post(verifyforgotpassword, {});
      console.log(response.data);
    } catch (error) {
      console.error(error);
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
        <div className="forgotpassword-wrapper-content m-5 gap-4">
          <span className="forgotpassword-content-note text-center">
            Enter the OTP sent to your registered mail ID to reset your
            password.
          </span>

          {/* OTP Input Fields */}
          <div className="verify-otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                maxLength={1}
                className="verify-otp-input"
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleBackspace(index, e)}
              />
            ))}
          </div>

          {/* Timer and Resend OTP */}
          <div className="resend-otp-container text-center">
            {canResend ? (
              <span className="resend-otp" onClick={handleResendOtp}>
                Resend OTP
              </span>
            ) : (
              <span className="resend-otp">Resend OTP in: {timer} sec</span>
            )}
          </div>
        </div>

        <div className="forgotpassword-button-container" onClick={handleSubmit}>
          <button className="forgotpassword-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
