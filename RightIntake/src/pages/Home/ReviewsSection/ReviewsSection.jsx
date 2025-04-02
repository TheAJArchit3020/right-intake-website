import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ReviewsSection.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const StarRating = ({ rating }) => {
  return (
    <div className="rating-star">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className="rating-star"
          style={{ color: index < rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewsSection = () => {
  return (
    <div className="review-section-container">
      <div className="review-section-wrapper">
        <div className="review-head-wrapper">
          <div className="review-heading">
            <span>See What Others Are Saying!</span>
          </div>
          <div className="review-para">
            <span>
              Real people, real results! Hear from our users who transformed
              their health with Right Intake.
            </span>
          </div>
        </div>

        <div className="review-card-carousel">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            delay={"2000"}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="review-card-slider">
              <div className="review-card-container">
                <div className="review-card">
                  <div className="review-user-container">
                    <div className="review-user-profile-pic">
                      <img
                        src="/images/homePage/reviewImages/priyankakumari.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="review-user-name">
                      <span>Priyanka Kumari</span>
                    </div>
                    <div className="review-user-rating">
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className="review-content-container">
                    <div className="review-content-heading">
                      <span>Changed my entire relationship with food!</span>
                    </div>
                    <div className="review-content-para">
                      <span>
                        Right Intake has honestly been a game-changer. I used to
                        struggle with meal planning and consistency, but now I
                        have a nutritionist who actually understands my
                        lifestyle. The calorie tracker is super accurate,
                        especially for Indian meals!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-card-slider">
              <div className="review-card-container">
                <div className="review-card">
                  <div className="review-user-container">
                    <div className="review-user-profile-pic">
                      <img
                        src="/images/homePage/reviewImages/ayush.png"
                        alt=""
                      />
                    </div>
                    <div className="review-user-name">
                      <span>Ayush Jhanwar</span>
                    </div>
                    <div className="review-user-rating">
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className="review-content-container">
                    <div className="review-content-heading">
                      <span>Perfect for busy professionals like me</span>
                    </div>
                    <div className="review-content-para">
                      <span>
                        As someone juggling a 9-to-6 job, I never had time to
                        think about eating right. With Right Intake, I can just
                        book a call with a certified expert and get a meal plan
                        that works for my routine. Zero stress.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-card-slider">
              <div className="review-card-container">
                <div className="review-card">
                  <div className="review-user-container">
                    <div className="review-user-profile-pic">
                      <img
                        src="/images/homePage/reviewImages/srujan_.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="review-user-name">
                      <span>Srujan Pola</span>
                    </div>
                    <div className="review-user-rating">
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className="review-content-container">
                    <div className="review-content-heading">
                      <span>Affordable and trustworthy</span>
                    </div>
                    <div className="review-content-para">
                      <span>
                        I was skeptical at first, but the pricing is super clear
                        and there are no hidden charges. I even got cashback
                        after referring a friend. The service feels premium
                        without burning a hole in my wallet.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-card-slider">
              <div className="review-card-container">
                <div className="review-card">
                  <div className="review-user-container">
                    <div className="review-user-profile-pic">
                      <img
                        src="/images/homePage/reviewImages/askar.jpg"
                        alt=""
                      />
                    </div>
                    <div className="review-user-name">
                      <span>Askar Muthu</span>
                    </div>
                    <div className="review-user-rating">
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className="review-content-container">
                    <div className="review-content-heading">
                      <span>Helped me gain muscle the right way</span>
                    </div>
                    <div className="review-content-para">
                      <span>
                        I’ve been hitting the gym for a year but never saw real
                        progress until I paired my workouts with the Right
                        Intake plan. My nutritionist helped me dial in my macros
                        and the results speak for themselves.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="review-card-slider">
              <div className="review-card-container">
                <div className="review-card">
                  <div className="review-user-container">
                    <div className="review-user-profile-pic">
                      <img
                        src="/images/homePage/reviewImages/aditya.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="review-user-name">
                      <span>Aditya Shah</span>
                    </div>
                    <div className="review-user-rating">
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className="review-content-container">
                    <div className="review-content-heading">
                      <span>
                        Calisthenics + Right Intake = Total Body Transformation
                      </span>
                    </div>
                    <div className="review-content-para">
                      <span>
                        I started calisthenics to build functional strength, but
                        I had no idea how important nutrition would be for real
                        progress. Right Intake helped me understand my macros,
                        optimize my meals, and stay energized for intense
                        bodyweight workouts. My performance and recovery have
                        drastically improved. Highly recommend it to anyone
                        serious about calisthenics.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
