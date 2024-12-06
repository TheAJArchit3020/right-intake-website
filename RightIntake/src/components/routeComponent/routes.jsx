import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../../App";
import Layout from "../../pages/layoutPage";
import HomePage from "../../pages/Home/home";
import AboutUs from "../../pages/AboutUs/aboutus";
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
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
