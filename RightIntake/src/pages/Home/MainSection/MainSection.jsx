import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainSection.css";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const MainSection = () => {
  const container = useRef();
  useGSAP(
    () => {
      requestAnimationFrame(() => {
        const ctx = gsap.context(() => {
          // Animate image
          gsap.fromTo(
            ".main-section-image-wrapper",
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              lazy: false,
              y: 0,
              scrollTrigger: {
                trigger: ".main-section-image-wrapper",
                start: "top bottom",
                end: "bottom center",
              },
            }
          );

          // Animate each heading line on scroll
          gsap.fromTo(
            ".main-sec-head-content-1",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".main-section-heading-content",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );
          gsap.fromTo(
            ".main-sec-head-content-2",
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".main-section-heading-content",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );
          gsap.fromTo(
            ".main-sec-head-content-3",
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              lazy: false,
              y: 0,
              scrollTrigger: {
                trigger: ".main-section-heading-content",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );
          // Animate store buttons
          gsap.fromTo(
            ".store-wrapper",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              lazy: false,
              scale: 1,
              scrollTrigger: {
                trigger: ".download-app-container",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );
        }, container);

        ScrollTrigger.refresh();

        return () => ctx.revert();
      });
    },
    { scope: container, revertOnUpdate: true }
  );
  return (
    <div className="main-section-container" ref={container}>
      <div className="main-section-wrapper">
        <div className="main-section-image-wrapper">
          <img src="/images/homePage/section_1/home-main-image.png" alt="" />
        </div>

        <div className="main-section-heading-wrapper">
          <div className="main-section-heading-content">
            <div className="main-sec-head-content-1">
              <span>Work Smarter, Eat Healthier</span>
            </div>
            <div className="main-sec-head-content-2">
              <span>#The RightIntake Way</span>
            </div>
            <div className="main-sec-head-content-3">
              <span>
                Right Intake helps you eat smarter, track better, and achieve
                your health goals effortlessly by connecting with top
                nutritionists near you.
              </span>
            </div>
          </div>
        </div>

        <div className="download-app-container">
          <div className="download-app-playstore store-wrapper">
            <div className="playstore-logo">
              <img src="/images/playstore.png" alt="" />
            </div>
            <div className="playstore-name store-name-wrapper">
              <span>Play Store</span>
            </div>
          </div>
          <div className="download-app-appstore store-wrapper">
            <div className="appstore-logo">
              <img src="/images/appstore.png" alt="" />
            </div>
            <div className="appstore-name store-name-wrapper">
              <span>App Store</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
