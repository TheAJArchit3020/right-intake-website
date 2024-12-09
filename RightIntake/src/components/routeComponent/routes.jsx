import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../../pages/layoutPage";
import HomePage from "../../pages/Home/home";
import FormLayout from "../../pages/Forms/formLayout";

import App from "../../App";
import Layout from "../../pages/layoutPage";
import HomePage from "../../pages/Home/home";
import AboutUs from "../../pages/AboutUs/aboutus";
import TermsandServices from "../../pages/TermsandServices/TermsandServices";
import ContactUs from "../../pages/ContactUs/ContactUs";
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
        <Route path="/basicform" element={<FormLayout />} />
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
        <Route
          index
          path="/aboutus"
          element={
            <Layout>
              {" "}
              <AboutUs />{" "}
            </Layout>
          }
        />
        <Route
          index
          path="/termsandservices"
          element={
            <Layout>
              {" "}
              <TermsandServices />{" "}
            </Layout>
          }
        />
        <Route
          index
          path="/contactus"
          element={
            <Layout>
              {" "}
              <ContactUs />{" "}
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
