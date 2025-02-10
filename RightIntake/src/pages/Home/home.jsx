import React, { forwardRef, useEffect, useRef, useState } from "react";
import "./home.css";
import {

  appstoreimage,
  smartmeal1,
  smartmeal2,
 
  homescreenimage1,
  homescreenimage2,
  homescreenimage3,
  homescreenimage4,
  homescreenimage5,
  homescreenimage6,
  intakenavigation,
  playstoreimage,
  proteinintakes,
  realintakegrp,
  realintakenut,
  rightintakemobileimage,
  rightintakemobilemeals,
  workoutplan,
  realintakeslogo,
} from "../../components/Images";
import { Link } from "react-router";
import { Button } from "react-bootstrap";
import { fireemoji } from "../../components/Images";
import { useNavigate } from "react-router";
import { logEvent } from "../../Utilities/analytics";
import Layout from "../layoutPage";
import NavbarComponent from "../../components/navbarComponent/navbar";

const HomePage = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   logEvent("get_personalized_plan", {
  //     category: "User Actions",
  //     label: "Get Plan Button",
  //   });
  //   navigate("/dietplanform");
  // };

  const [isVisible, setIsVisible] = useState({
    homeref: false,
    trackingref: false,
    foodmealref: false,
    nutriplanref: false,
    reviewref: false,
    smartmealref: false,
  });

  const homeref = useRef(null);
  const trackingref = useRef(null);
  const foodmealref = useRef(null);
  const nutriplanref = useRef(null);
  const reviewref = useRef(null);
  const smartmealref = useRef(null);

  // A mapping of section names to refs
  const sectionRefs = {
    home: homeref,
    tracking: trackingref,
    foodmeal: foodmealref,
    nutriplans: nutriplanref,
    reviews: reviewref,
    smartmeal: smartmealref,
  };

  // Dynamic scroll function
  const scrollToSection = (sectionName) => {
    const sectionRef = sectionRefs[sectionName];
    if (sectionRef && sectionRef.current) {
      console.log({ sectionRef, ...sectionRef.current });
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.dataset.ref]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <div className="newNavbarContainer">
        <div className="navBarBrand">
          <img src={realintakeslogo} alt="realintakeslogo" width={40} />
          <span className="Rightintake-Logo-Name">Right Intake</span>
        </div>
        <div className="navTabs">
          <p className="navTabs-p" onClick={() => homeref.current.scrollIntoView({ behavior: "smooth" })}>Home</p>
          <p className="navTabs-p" onClick={() => trackingref.current.scrollIntoView({ behavior: "smooth" })}>Tracking</p>
          <p className="navTabs-p" onClick={() => foodmealref.current.scrollIntoView({ behavior: "smooth" })}>FoodLens</p>
          <p className="navTabs-p" onClick={() => smartmealref.current.scrollIntoView({ behavior: "smooth" })}>Smartmeal</p>
          <p className="navTabs-p" onClick={() => nutriplanref.current.scrollIntoView({ behavior: "smooth" })}>NutriPlans</p>
          <p className="navTabs-p" onClick={() => reviewref.current.scrollIntoView({ behavior: "smooth" })}>Reviews</p>
        </div>
        <div className="getappbutton">
          <p className="getappbutton-p">Get rightintake app</p>
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
              <b>Right Intake</b> is your ultimate AI-powered nutrition app,
              designed to track your diet, count calories, and provide
              personalized meal plans with expert guidance from certified
              nutritionists.
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
                  src={homescreenimage4}
                  alt="homescreenimage4"
                  className="tracking-image"
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
          <div ref={foodmealref} className="landing-page-foodLens">
            <div className="landing-page-foodLens-section">
              <div className="dot"></div>
              <p>FoodLens</p>
            </div>
            <p className="foodlens-para">
               Simply snap a picture of your meal, and our advanced AI instantly
              detects ingredients, provides calorie estimates, and breaks down
              macros.
            </p>
            <div className="landing-page-foodLens-grpimage">
              <img src={homescreenimage5} alt="" />
              <img src={homescreenimage5} alt="" />
              <img src={homescreenimage6} alt="" />
            </div>
          </div>

          {/* section 4 */}
          <div ref={smartmealref} className="landing-page-smartmeal">
            <div className="smartmeal-leftcontent">
              <div className="landing-page-smartmeal-section">
                <div className="dot"></div>
                <p>Smart meal</p>
              </div>
              <p className="smartmeal-para">
                 Simply snap a picture of your meal, and our advanced AI
                instantly detects ingredients, provides calorie estimates, and
                breaks down macros.
              </p>
            </div>
            <div className="smartmeal-backgroundimage">
              <img src={smartmeal1} className="smartmealimage" />
              <img src={smartmeal2} className="smartmealimage2" />
            </div>
          </div>

          {/* section 3 */}
          <div ref={nutriplanref} className="landing-page-nutri">
            <div className="landing-page-nutri-section">
              <div className="dot"></div>
              <p>Nutriplans</p>
            </div>
            <p className="nutri-para">
              Get custom diet plans based on your goals, body type, activity
              level, and dietary preferences, tailored by a personalized
              nutritionist to acheive best health and results.
            </p>
            <div className="landing-page-nutri-grpimage">
              <p>Comming Soon...!</p>
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
              <div className="review-card">
                <div className="review-card-body">
                  <div className="review-card-avatar"></div>
                  <div className="review-card-bodyContent">
                    <div className="bodyContent-grp">
                      <p>Name</p>
                      <div></div>
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
                      <div></div>
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
                      <div></div>
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
                      <div></div>
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
                      <div></div>
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
                      <div></div>
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
                      <div></div>
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
    </Layout>
  );
};

export default HomePage;
