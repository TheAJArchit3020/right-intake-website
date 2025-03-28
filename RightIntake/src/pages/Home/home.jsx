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
} from "../../components/Images";

import { useNavigate } from "react-router";
import Layout from "../layoutPage";

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{ color: index < rating ? "gold" : "gray", fontSize: "24px" }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const HomePage = () => {
  const homeref = useRef(null);
  const trackingref = useRef(null);
  const nutriplanref = useRef(null);
  const reviewref = useRef(null);

  // A mapping of section names to refs
  const sectionRefs = {
    home: homeref,
    tracking: trackingref,
    nutriplans: nutriplanref,
    reviews: reviewref,
  };

  // Dynamic scroll function
  const scrollToSection = (sectionName) => {
    const sectionRef = sectionRefs[sectionName];
    if (sectionRef && sectionRef.current) {
      console.log({ sectionRef, ...sectionRef.current });
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Name",
      rating: 4,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 2,
      name: "Name",
      rating: 4,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 3,
      name: "Name",
      rating: 3,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 4,
      name: "Name",
      rating: 3,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 5,
      name: "Name",
      rating: 4,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 6,
      name: "Name",
      rating: 4,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: 7,
      name: "Name",
      rating: 4,
      date: "05/02/25",
      text: "Lorem ipsum dolor sit amet consectetur...",
    },
  ];

  return (
    <Layout>
      {/* for mobile */}

      <div className="navBarBrand-mobile">
        <img src={realintakeslogo} alt="realintakeslogo" width={40} />
        <span className="Rightintake-Logo-Name">Right Intake</span>
      </div>
      <div className="newNavbarContainer">
        <div className="navbar-wrapper">
          <div className="navBarBrand">
            <div className="nav-bar-brand-img">
              <img src={realintakeslogo} alt="realintakeslogo" width={40} />
            </div>
            <div className="nav-bar-brand-name">
              <span className="Rightintake-Logo-Name">Right Intake</span>
            </div>
          </div>
          <div className="navTabs">
            <div
              className="navTabs-p"
              onClick={() =>
                homeref.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Home</span>
            </div>
            <div
              className="navTabs-p"
              onClick={() =>
                trackingref.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Tracking</span>
            </div>
            <div
              className="navTabs-p"
              onClick={() =>
                nutriplanref.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>NutriPlans</span>
            </div>

            <div
              className="navTabs-p"
              onClick={() =>
                reviewref.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Reviews</span>
            </div>
          </div>
          <div className="getappbutton">
            <div className="getappbutton-p">
              <span>Get rightintake app</span>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-page-container">
        <div className="landing-page-wrapper">
          {/* section 1 */}
          <div ref={homeref} className="landing-page-section1">
            <div className="landing-page-head">
              <div className="landing-head-content left-content">
                <span className="Heading1">Right</span>
                <img src={homescreenimage1} alt="" />
              </div>
              <div className="landing-head-content">
                <img
                  src={homescreenimage2}
                  alt="homesection1image3"
                  className="centerImage"
                  style={{ marginLeft: "19% !important" }}
                />
              </div>
              <div className="landing-head-content right-content">
                <img src={homescreenimage3} alt="" />
                <span className="Heading1">Intake</span>
              </div>
            </div>
            <p className="landing-head-para">
              <b>Right Intake</b> is your all-in-one nutrition companion,
              designed to help you track calories, explore health blogs, and
              access expert-crafted NutriPlans. Buy personalized diet plans from
              certified nutritionists, schedule one-on-one meetings, and discuss
              your health goals—all in one place. Take control of your nutrition
              journey with Right Intake.
            </p>
            <div className="storeGrp">
              <div className="store-ios">
                <img src={appstoreimage} alt="appstoreimage" />
                <div>
                  <p>Download on the </p>
                  <p>App store</p>
                </div>
              </div>
              <div className="store-android">
                <img src={playstoreimage} alt="playstoreimage" />
                <div>
                  <p>Get it on </p>
                  <p>Play store</p>
                </div>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div ref={trackingref} className="landing-page-trackingWrapper">
            <div className="landing-page-tracking">
              <div className="landing-page-tracking-leftcontent">
                <img
                  src={homescreenimage17}
                  alt="homescreenimage4"
                  className="tracking-image"
                />
                <img
                  src={homescreenimage18}
                  alt="homescreenimage4"
                  className="tracking-sub-image"
                />
              </div>
              <div className="landing-page-tracking-section">
                <div className="landing-page-tracking-rightcontent">
                  <div className="dot"></div>
                  <p className="landing-page-tracking-rightcontent-para">
                    Tracking
                  </p>
                </div>
                <p className="landing-page-tracking-rightcontent-span">
                  Easily log your meals and monitor daily calorie intake to stay
                  on track.
                </p>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div ref={nutriplanref} className="landing-page-foodLens">
            <div className="landing-page-foodLens-section">
              <div className="dot"></div>
              <p>Nutri plans</p>
            </div>
            <p className="foodlens-para">
              <b>NutriPlans</b> connects you with certified nutritionists
              schedule one-on-one consultations, discuss your plan, and get
              expert advice—all in a few simple steps. Choose a plan, book a
              session, and receive your personalized guidance with ease
            </p>
            <div className="landing-page-foodLens-grpimage">
              <div className="foodlens1">
                <div className="foodlenscontent">
                  <div className="foodlensgrp">
                    <div className="dot"></div>
                    <p>
                      <b>Open the Chatbot & Start Scheduling</b>
                    </p>
                  </div>
                  <p className="foodlespara">
                    Connect with our AI assistant to begin booking your session.
                  </p>
                </div>
                <div className="foodlendcontent2">
                  <img
                    src={homescreenimage13}
                    alt=""
                    className="foodcontent-image"
                  />
                </div>
              </div>
              <div className="foodlens2">
                <div className="foodlendcontent2">
                  <img
                    src={homescreenimage14}
                    alt=""
                    className="foodcontent-image"
                  />
                </div>
                <div className="foodlenscontent">
                  <div className="foodlensgrp">
                    <div className="dot"></div>
                    <p>
                      <b>Select Date & Time</b>
                    </p>
                  </div>
                  <p className="foodlespara">
                    Choose a convenient slot for your consultation with a
                    certified nutritionist.
                  </p>
                </div>
              </div>
              <div className="foodlens3">
                <div className="foodlenscontent">
                  <div className="foodlensgrp">
                    <div className="dot"></div>
                    <p>
                      <b>Confirm & Get Your GMeet Link</b>
                    </p>
                  </div>
                  <p className="foodlespara">
                    Once confirmed, you’ll receive a Google Meet link for your
                    session.
                  </p>
                </div>
                <div className="foodlendcontent2">
                  <img
                    src={homescreenimage15}
                    alt=""
                    className="foodcontent-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* section 3 */}
          <div className="landing-page-nutri">
            <div className="landing-page-blog-wrapper">
              <div className="blogs-card">
                <p>
                  We have expert nutritionists providing personalized guidance.{" "}
                </p>
                <img src={homescreenimage9} className="blog-small-image" />
              </div>
              <div className="blog-card-image">
                <img src={homescreenimage8} className="blogimage" />
              </div>
            </div>
            <div className="landing-page-blog-wrapper landing-page-blog-wrapper2 ">
              <div className="blogs-card">
                <p>
                  <b>What makes us unique? </b> One-on-one consultations,
                  customized meal plans, and direct access to professionals
                </p>
                <img src={homescreenimage10} className="blog-small-image" />
              </div>
              <div className="blogs-card">
                <p>
                  Schedule, discuss, and achieve your health targets with ease.
                </p>
                <img src={homescreenimage11} className="blog-small-image" />
              </div>
            </div>
          </div>
          {/* section 5 */}
          <div ref={reviewref} className="landing-page-review">
            <div className="landing-page-foodLens-section">
              <div className="dot"></div>
              <p>Review</p>
            </div>
            <p className="review-para">
              Trusted by many, loved by all—see what our users say!
            </p>

            <div className="scrollcard">
              <div className="scroll-content">
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar">
                      <img src={reviewimage1} alt="" width={40} />
                    </div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={4} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar"></div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={4} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar"></div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={3} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar"></div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={3} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar"></div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={4} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar"></div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={4} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-card">
                  <div className="review-card-body">
                    <div className="review-card-avatar"></div>
                    <div className="review-card-bodyContent">
                      <div className="bodyContent-grp">
                        <p>Name</p>
                        <StarRating rating={4} />
                      </div>
                      <p>05/02/25</p>
                      <p className="review-body-para">
                        Lorem ipsum dolor sit amet consectetur. Vitae volutpat
                        nullam dui est a neque. Laoreet et molestie tellus sed
                        pulvinar erat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
