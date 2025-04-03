import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../../pages/Home/home";
import TermsandServices from "../../pages/TermsandServices/TermsandServices";
import PrivacyPolicyPage from "../../pages/PrivacyPolicyPage/PrivacyPolicyPage";
import TermsAndConditionsPage from "../../pages/TermsAndConditionsPage/TermsAndConditionsPage";
import RefundPolicyPage from "../../pages/RefundPolicyPage/RefundPolicyPage";
import DeleteAccount from "../../pages/DeleteAccount/DeleteAccount";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import VerifyOtp from "../../pages/ForgotPassword/OtpPage";
import ResetPassword from "../../pages/ForgotPassword/ResetPassword";
import BlogList from "../../pages/BlogList/BlogList";
import BlogPage from "../../pages/BlogPage/BlogPage";
import BlogCreate from "../../pages/Admin/BlogCreate/BlogCreate";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/termsandservices" element={<TermsandServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-services" element={<TermsAndConditionsPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/admin/blog/create" element={<BlogCreate />} />
        {/* 🆕 Blog Routes */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
