import React, { useEffect } from "react";
import "./aboutus.css";
import Layout from "../layoutPage";

const AboutUs = () => {
  return (
    <Layout>
      <div className="about-us-container">
        <div className="about-us-wrapper">
          <div className="about-us-heading">
            <span className="about-us-head">
              Transform Your Health, One step at a Time with Right Intake!
            </span>
            <span className="about-us-tags">
              #RightIntake #HealthyChoicesMadeSimple
            </span>
            <div className="about-us-mobile-image">
              <img src="/images/aboutUs/about_us_mobile.webp" alt="" />
            </div>
          </div>

          <div className="about-us-the-mission">
            <div className="the-mission-head">
              <span>The Mission</span>
            </div>
            <div className="the-mission-content">
              <span>
                At Right Intake, our mission is to empower individuals to
                achieve their health and wellness goals by providing
                personalized diet and workout plans tailored to their unique
                needs, lifestyle, and preferences.
              </span>
              <span>
                We strive to make nutrition and fitness simple, accessible, and
                effective by leveraging advanced technology and local insights.
                Through our solutions, we aim to inspire sustainable, healthy
                habits and transform lives, one step at a time.
              </span>
            </div>
          </div>

          <div className="about-us-first-content">
            <div className="about-us-first-content-wrapper">
              <div className="about-us-first-img">
                <img src="/images/aboutUs/aboutus_first_mob_img.webp" alt="" />
              </div>
              <div className="about-us-paras">
                <div className="about-us-first-para">
                  <div className="para-heading">
                    <span>Sustainable Results</span>
                  </div>
                  <div className="the-para">
                    <span>
                      We focus on fostering long-term, sustainable habits that
                      lead to real, lasting health improvements.
                    </span>
                  </div>
                </div>
                <div className="about-us-second-para">
                  <div className="para-heading">
                    <span>Simplicity and Accessibility</span>
                  </div>
                  <div className="the-para">
                    <span>
                      Our goal is to make healthy living easy and accessible for
                      everyone, regardless of their background or location.
                    </span>
                  </div>
                </div>
              </div>
              <div className="about-us-first-paras"></div>
            </div>
          </div>
          <div className="about-us-second-content">
            <div className="about-us-second-content-wrapper">
              <div className="about-us-second-img">
                <img src="/images/aboutUs/aboutus_second_mob_img.webp" alt="" />
              </div>
              <div className="about-us-paras">
                <div className="about-us-first-para">
                  <div className="para-heading">
                    <span>Personalized Wellness</span>
                  </div>
                  <div className="the-para">
                    <span>
                      We strive to provide tailored diet and workout plans that
                      resonate with each individual's goals, preferences, and
                      lifestyle.
                    </span>
                  </div>
                </div>
                <div className="about-us-second-para">
                  {" "}
                  <div className="para-heading">
                    <span>Innovation and Excellence</span>
                  </div>
                  <div className="the-para">
                    <span>
                      By integrating advanced technology and data-driven
                      insights, we aim to deliver cutting-edge solutions that
                      redefine health and wellness.
                    </span>
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

export default AboutUs;
