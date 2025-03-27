import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../../pages/layoutPage";
import HomePage from "../../pages/Home/home";
import FormLayout from "../../pages/Forms/formLayout";
import FormOverallSummary from "../../pages/Forms/formOverallSummary";
import AboutUs from "../../pages/AboutUs/aboutus";
import ContactUs from "../../pages/ContactUs/ContactUs";
import Loading from "../../pages/LoadingAnimation/Loading";
import TermsandServices from "../../pages/TermsandServices/TermsandServices";
import PaymentSuccess from "../../pages/Final/final";
import DeleteAccount from "../../pages/DeleteAccount/DeleteAccount";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import VerifyOtp from "../../pages/ForgotPassword/OtpPage";
import ResetPassword from "../../pages/ForgotPassword/ResetPassword";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/dietplanform" element={<FormLayout />} />
        <Route path="/overallsummary" element={<FormOverallSummary />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/termsandservices" element={<TermsandServices />} />
        <Route path="/final" element={<PaymentSuccess />} />
        <Route path="/dietplanform/:step" element={<FormLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
