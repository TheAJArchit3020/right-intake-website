import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./FeaturesSection.css";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
const FeaturesSection = () => {
  const container = useRef();
  useGSAP(
    () => {
      requestAnimationFrame(() => {
        const ctx = gsap.context(() => {
          // Animate image
          gsap.fromTo(
            ".features-section-heading span",
            { opacity: 0, y: 100 },
            {
              lazy: false,
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: ".features-section-heading",
                start: "top bottom",
                end: "bottom center",
              },
            }
          );

          // Animate each heading line on scroll
          gsap.fromTo(
            ".nutri-plans-image",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".nutri-plans-wrapper",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );
          gsap.fromTo(
            ".nutri-plans-message-wrapper",
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".nutri-plans-message-wrapper",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".schedule-call-message",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".schedule-call-message",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".schedule-call-image",
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".schedule-call-wrapper",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".best-part-message",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".best-part-message",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".best-part-image",
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".best-part-wrapper",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );
          // Animate store buttons
          gsap.fromTo(
            ".tracking-section-heading",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              lazy: false,
              scale: 1,
              scrollTrigger: {
                trigger: ".tracking-section-heading",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".tracking-message",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".tracking-message",
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
              stagger: 0.2,
            }
          );

          gsap.fromTo(
            ".tracking-image-wrapper",
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              lazy: false,
              x: 0,
              scrollTrigger: {
                trigger: ".tracking-wrapper",
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
    <div className="features-section-container" ref={container}>
      <div className="features-section-wrapper">
        <div className="features-section-heading">
          <span>
            Struggling to See Results or Stay Consistent? We Make it Easy!
          </span>
        </div>

        <div className="nutri-plans-wrapper">
          <div className="nutri-plans-image">
            <img src="/images/homePage/Section_2/NutriPlansImg.png" alt="" />
          </div>
          <div className="nutri-plans-message-wrapper">
            <div className="nutri-plans-message-head message-head">
              <span>Explore Nutri-Plans</span>
            </div>
            <div className="nutri-plans-message-para message-para">
              <span>
                Browse expert-crafted affordable plans from top nutritionists.
              </span>
            </div>
          </div>
        </div>
        <div className="schedule-call-wrapper">
          <div className="schedule-call-message">
            <div className="schedule-call-message-head message-head">
              <span>Book a Call</span>
            </div>
            <div className="schedule-call-message-para message-para">
              <span>
                Connect directly with the plan’s creator for personalized
                guidance.
              </span>
            </div>
          </div>
          <div className="schedule-call-image">
            <img src="/images/homePage/Section_2/CallScheduling.png" alt="" />
          </div>
        </div>
        <div className="best-part-wrapper">
          <div className="best-part-message">
            <div className="best-part-message-head message-head">
              <span>Thats the Best Part!!</span>
            </div>
            <div className="best-part-message-para message-para">
              <span>
                No hassle, no endless searching, no back-and-forth calls—just a
                quick and effortless way to reach your dream body!
              </span>
            </div>
          </div>
          <div className="best-part-image">
            <img src="/images/homePage/Section_2/bestPartBody.png" alt="" />
          </div>
        </div>

        <div className="tracking-section-heading">
          <span>
            Having a nutritionist and a plan is great, but if you don’t track,
            progress is just a guess—we’ve got you covered!
          </span>
        </div>
        <div className="tracking-wrapper">
          <div className="tracking-message">
            <div className="tracking-message-head message-head">
              <span>Track Your Calories Effortlessly!</span>
            </div>
            <div className="tracking-message-para message-para">
              <span>
                Stay on top of your nutrition with our easy-to-use calorie
                tracker because every meal counts!
              </span>
            </div>
          </div>
          <div className="tracking-image-wrapper">
            <img
              src="/images/homePage/Section_2/trackingImage.png"
              alt=""
              className="tracking-bg-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
