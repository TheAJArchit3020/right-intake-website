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

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout>
              {" "}
              <HomePage />{" "}
            </Layout>
          }
        />
        <Route path="/anim" element={<Loading />} />
        <Route path="/basicform" element={<FormLayout />} />
        <Route path="/overallsummary" element={<FormOverallSummary />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/termsandservices" element={<TermsandServices />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
