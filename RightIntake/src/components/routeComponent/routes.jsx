import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "../../App";
import Layout from "../../pages/layoutPage";
import HomePage from "../../pages/Home/home";
import AboutUs from "../../pages/AboutUs/aboutus";

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
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
