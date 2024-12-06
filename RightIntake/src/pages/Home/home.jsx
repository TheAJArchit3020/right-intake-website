import React, { useEffect } from 'react'
import "./home.css"
import { aifitness, analysis, appstoreimage, armswithdumbels, cheatmeal1, cheatmeal2, cheatmeal3, diet, dietitems, dumbels, gymworkout, intakenavigation, playstoreimage, proteinintakes, realintakegrp, realintakenut, rightintakemobileimage, rightintakemobilemeals, workoutplan } from '../../components/Images'

// import gsap from "gsap";
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {



     return (
          <div>
               <div className="roww d-flex mb-5">
                    {/* Left Section */}
                    <div className="d-flex flex-column justify-content-center align-items-center text-center text-lg-start section1-container">
                         <div className="section1">
                              <h4>Right Intake</h4>
                              <p>
                                   is a comprehensive app that provides personalized diet plans, calorie
                                   tracking, and workout routines for achieving health goals.
                              </p>
                              <button type="button" className="btn fw-bold w-100 px-2 fs-4">
                                   Get your personalised plan now &#128293;
                              </button>
                         </div>
                    </div>

                    {/* Right Section */}
                    <div className="section2-container d-flex flex-column justify-content-center align-items-center ">
                         <div className="section2 text-center">
                              <div className="group-images d-flex justify-content-center">
                                   <img src={realintakegrp} alt="rightintakemobilemeals" className="section2-props-mobile" />
                              </div>
                              <div className="d-flex justify-content-center gap-5 mt-3">
                                   <div className='store d-flex align-items-center gap-2'>
                                        <img src={appstoreimage} alt="playstore" className='storeimage' />
                                        <p>Download on the<br /> App store</p>
                                   </div>
                                   <div className='store d-flex align-items-center gap-2'>
                                        <img src={playstoreimage} alt="playstore" className='storeimage' />
                                        <p>Get it on <br />Google Play</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               {/* section 2 */}
               <div className='home-section2'>
                    {/* Left Section */}
                    <div className='d-flex flex-column justify-content-center'>
                         <h4 className='fw-bold'>Track your Nutrition</h4>
                         <div className='track-section d-flex align-items-center'>
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Track your daily calories</p>
                         </div>
                         <div className='track-section d-flex align-items-center'>
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Get your daily insights on your nutrition</p>
                         </div>
                         <div className='track-section d-flex align-items-center'>
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Get daily insights on your current nutrition</p>
                         </div>
                    </div>

                    {/* Right Section with Gradient */}
                    <div className='gradient-container d-flex position-relative'>
                         <img src={realintakenut} alt="realintakenut" className='navi-image' />
                    </div>
               </div>


               {/* Section 3 */}
               <div className="home-section3 d-flex flex-wrap">
                    {/* Cheat Meals Section */}
                    <div className="cheat-meals-wrapper d-flex justify-content-center align-items-center">
                         <div className="cheat-meals d-flex flex-column">
                              <img src={cheatmeal1} alt="cheatmeal1" className="cheat-meal-image" />
                              <img src={cheatmeal2} alt="cheatmeal2" className="cheat-meal-image" />
                         </div>
                         <img src={cheatmeal3} alt="cheatmeal3" className="cheat-meal-main" />
                    </div>

                    {/* Personalized Meal Plan Section */}
                    <div className="meal-plan-wrapper d-flex flex-column justify-content-center">
                         <h4 className="fw-bold text-center text-lg-start">Get a Personalized Meal Plan</h4>
                         <div className="track-section d-flex align-items-center">
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Meal plan based on your goals.</p>
                         </div>
                         <div className="track-section d-flex align-items-center">
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Meal plan is adjusted to your current condition.</p>
                         </div>
                         <div className="track-section d-flex align-items-center">
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Get daily insights on your current nutrition</p>
                         </div>
                    </div>
               </div>

               {/* Section 4 */}
               <div className="home-section4">
                    {/* workout plan Section */}
                    <div className="meal-plan-wrapper d-flex flex-column justify-content-center">
                         <h4 className="fw-bold text-center text-lg-start">Personalized workout routines</h4>
                         <div className="track-section d-flex align-items-center">
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Personalized workouts designed to achieve your unique fitness goals.</p>
                         </div>
                         <div className="track-section d-flex align-items-center">
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Flexible routines that adapt to your schedule and fitness level.</p>
                         </div>
                         <div className="track-section d-flex align-items-center">
                              <img src={dumbels} alt="dumbels" width={20} />
                              <p>Monitor your progress and adjust exercises for consistent growth.</p>
                         </div>
                    </div>

                    {/* Cheat Meals Section */}
                    <div className="cheat-meals-wrapper d-flex justify-content-center align-items-center">
                         <img src={gymworkout} alt="gymworkout" className="workout-plan-image" />
                    </div>
               </div>

               {/* Section 5 */}
               <div className="home-section5">
                    <div className="track-section2">
                         <img src={aifitness} alt="aifitness" width={50} />
                         <h3>AI-Driven insights on your current level of fitness</h3>
                    </div>

               </div>



          </div>
     )
}

export default HomePage