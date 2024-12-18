import React, { useContext, useState } from "react";
import Layout from "../layoutPage";
import "./final.css";
import { appstoreimage } from "../../components/Images";
import { playstoreimage } from "../../components/Images";
import { realintakegrp } from "../../components/Images";
import { useNavigate } from "react-router";
const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="final-container">
        <div className="final-page-wrapper">
          <div className="final-head-container">
            <span>
              We have received your payment successfully. Your personalized diet
              plan is being prepared and will be sent to you shortly to your
              mail. Thank you for choosing us
            </span>
          </div>
          <div className="final-page-first-content-wrapper">
            <div className="final-page-first-content-info">
              <div className="first-content-info-1">
                <span>Take Your Fitness Journey to the Next Level!</span>
                <span>
                  Get access to advanced features on our app to support your
                  health goals. Track your calories, monitor your progress,
                  receive reminders, and access daily fitness tips – all in one
                  place!
                </span>
              </div>
              <div className="first-content-info-2">
                <div className="store-container">
                  <div className="store-thingy app-store-wrapper">
                    <img
                      src={appstoreimage}
                      alt="playstore"
                      className="storeimage"
                    />
                    <span>
                      Download on the
                      <br /> App store
                    </span>
                  </div>
                  <div className="store-thingy play-store-wrapper">
                    <img
                      src={playstoreimage}
                      alt="playstore"
                      className="storeimage"
                    />
                    <span>
                      Get it on <br />
                      Google Play
                    </span>
                  </div>
                </div>
              </div>
              .
              <div className="first-content-info-2">
                <span>
                  Get features like calorie tracking, daily tips, progress
                  monitoring, and more – all in our mobile app
                </span>
              </div>
            </div>
            <div className="final-page-first-content-mob-img">
              <img src={realintakegrp} alt="" />
            </div>
          </div>
          <div className="final-container-userManual">
            <div className="final-userManual-info">
              <span className="fw-bold">How to Use Your Diet Plan</span>
              <span>Your diet plan will include</span>
              <span>
                <span className="fw-bold">Daily Meal Breakdown:</span> Simple
                recipes and portion sizes.
              </span>
              <span>
                <span className="fw-bold">Calorie & Nutrition Info:</span>{" "}
                Balance your macros for your goals
              </span>
              <span className="final-maual-heading">
                <span className="fw-bold">Calorie & Nutrition Info:</span>
                Designed for your busy lifestyle.
              </span>
            </div>
            <div className="final-userManual-image">
              <img src="/images/finalPagecontent2.png" alt="" />
            </div>
          </div>
          <div className="final-contact-us-container">
            <div className="final-c-u-heading">
              <span>For support</span>
            </div>
            <div className="final-c-u-content">
              <span>
                Have questions or need help? Contact us now and let our team
                assist you on your fitness journey
              </span>
            </div>

            <div className="final-c-u-btn" onClick={navigate("/contactus")}>
              <span>Contact-us</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
