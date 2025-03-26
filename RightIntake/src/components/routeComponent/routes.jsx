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
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsAndConditionsPage from "../../pages/TermsAndConditionsPage/TermsAndConditionsPage";
import RefundPolicyPage from "../../pages/RefundPolicyPage/RefundPolicyPage";
import DeleteAccount from "../../pages/DeleteAccount/DeleteAccount";

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
        <Route path="/termsandservices" element={<TermsandServices />} />
        <Route path="/final" element={<PaymentSuccess />} />
        <Route path="/dietplanform/:step" element={<FormLayout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-services" element={<TermsAndConditionsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
