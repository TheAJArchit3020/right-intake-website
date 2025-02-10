import React, { useEffect } from "react";
import "./home.css";
import {
  aifitness,
  analysis,
  appstoreimage,
  armswithdumbels,
  cheatmeal1,
  cheatmeal2,
  cheatmeal3,
  diet,
  dietitems,
  dumbels,
  fitnessbackground,
  gymworkout,
  intakenavigation,
  playstoreimage,
  proteinintakes,
  realintakegrp,
  realintakenut,
  rightintakemobileimage,
  rightintakemobilemeals,
  workoutplan,
} from "../../components/Images";
import { Link } from "react-router";
import { Button } from "react-bootstrap";
import { fireemoji } from "../../components/Images";
import { useNavigate } from "react-router";
import { logEvent } from "../../Utilities/analytics";
const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    logEvent("get_personalized_plan", {
      category: "User Actions",
      label: "Get Plan Button",
    });
    navigate("/dietplanform");
  };
  return (
    <div className="landing-page-container">
      <div className="landing-page-wrapper">
        <div className="landing-page-head">
          <div className="landing-head-left">
            <div className="landing-head-content">
              <span className="Heading1">Right Intake</span>
              <span className="NormalText">
                is a comprehensive app which provides personalized diet plans,
                calorie tracking, and workout routines for achieving health
                goals.
              </span>
            </div>
            <div className="landing-head-cta" onClick={handleClick}>
              <span className="btn-Text">Get your personalized plan now</span>
              <img src={fireemoji} alt="" />
            </div>
          </div>
          <div className="landing-head-right">
            <img src={realintakegrp} alt="" />
            <div className="store-container">
              <div className="store-thingy app-store-wrapper">
                <div className="app-store-wrapper-image">
                  <img
                    src={appstoreimage}
                    alt="playstore"
                    className="storeimage"
                  />
                </div>

                <span>
                  Download on the
                  <br /> App store
                </span>
              </div>
              <div className="store-thingy play-store-wrapper">
                <div className="play-store-wrapper-image">
                  <img
                    src={playstoreimage}
                    alt="playstore"
                    className="storeimage"
                  />
                </div>

                <span>
                  Get it on <br />
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-nutrition">
          <div className="landing-page-nutrition-left">
            <span className="Heading1">Track your Nutrition</span>
            <div className="nutrition-key-points NormalText">
              <div>
                <img className="dumbelsicon" src={dumbels} alt="" />
                <span>Track your daily calories</span>
              </div>
              <div>
                <img className="dumbelsicon" src={dumbels} alt="" />
                <span>Get your daily insights on your nutrition</span>
              </div>
              <div>
                <img className="dumbelsicon" src={dumbels} alt="" />
                <span>Get daily insights on your current nutrition</span>
              </div>
            </div>
          </div>
          <div className="landing-page-nutrition-right">
            <img src={intakenavigation} alt="" />
          </div>
        </div>

        <div className="landing-page-personalized-meal-plan">
          <div className="l-p-p-m-p-left">
            <span className="Heading1">Get a Personalized Meal plan</span>
            <div className="nutrition-key-points NormalText">
              <div>
                <img className="dumbelsicon" src={dumbels} alt="" />
                <span>Meal plan based on your goals.</span>
              </div>
              <div>
                <img className="dumbelsicon" src={dumbels} alt="" />
                <span>Meal plan is adjusted to your current condition.</span>
              </div>
              <div>
                <img className="dumbelsicon" src={dumbels} alt="" />
                <span>
                  Get all your preferred food items in your meal plan to make it
                  easy
                </span>
              </div>
            </div>
          </div>
          <div className="l-p-p-m-p-right">
            <img src={rightintakemobilemeals} alt="" />
          </div>
        </div>

        <div className="landing-page-AI-sec">
          <div className="fitness-bg">
            <img src={fitnessbackground} alt="" />
          </div>
          <div className="landing-page-AI-sec-content">
            <img src={aifitness} alt="" />
            <span className="Heading1">
              AI-Driven insights on your current level of fitness
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
