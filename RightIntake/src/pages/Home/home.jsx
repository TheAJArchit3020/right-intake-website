import React, { forwardRef, useEffect, useRef, useState } from "react";

import "./home.css";
import {
  appstoreimage,
  homescreenimage1,
  homescreenimage2,
  homescreenimage3,
  playstoreimage,
  realintakeslogo,
  homescreenimage8,
  homescreenimage9,
  homescreenimage10,
  homescreenimage11,
  homescreenimage13,
  homescreenimage14,
  homescreenimage15,
  homescreenimage17,
  homescreenimage18,
  reviewimage1,
  reviewimage3,
  reviewimage2,
  reviewimage4,
  reviewimage5,
} from "../../components/Images";

import { useNavigate } from "react-router";
import Layout from "../layoutPage";
import MainSection from "./MainSection/MainSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import ReviewsSection from "./ReviewsSection/ReviewsSection";
import Footer from "../../components/footerComponent/footer";

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page-container">
        <div className="home-page-wrapper">
          <MainSection />
          <FeaturesSection />
          <ReviewsSection />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
