import React, { useState } from 'react';
import { dumbels, bodyfat1, bodyfat2, bodyfat3, bodyfat4, bodyfat5, bodyfat6, bodyfat7, bodyfat8, transitionarrow, caloriesicon, waterglassicon, rightintakemobileimage, summaryicon1, summaryicon2, summaryicon3, summaryicon4, summaryicon5, offerbackground, bodyfatshadow2, bodyfatshadow1 } from '../../components/Images';
import Footer from '../../components/footerComponent/footer';
import NavbarComponent from '../../components/navbarComponent/navbar';

const FormOverallSummary = ({ handleNext }) => {

     const [isChecked, setIsChecked] = useState(true);

     const handleCheckboxChange = () => {
          setIsChecked((prev) => !prev);
     };

     let STATS = {
          currentStats: {
               bodyFatPercentage: "20%",
               muscleMass: "80%"
          },
          goalStats: {
               bodyFatPercentage: "15%",
               muscleMass: "85%"
          },
          personalizedInsights: {
               maintenanceCalories: "2200 Kcal",
               dailyWaterIntake: "3 liters"
          },
          goalFocus: {
               selectedGoal: "Fat Loss",
               keyPoints: [
                    "High-Protein Diet",
                    "Caloric Deficit",
                    "Focus on cardio workouts",
                    "Drink plenty of water"
               ]
          }
     }

     const getCurrentBodyStats = (value) => {

          if (value <= 10) return bodyfat1;
          if (value <= 14) return bodyfat2;
          if (value <= 19) return bodyfat3;
          if (value <= 24) return bodyfat4;
          if (value <= 29) return bodyfat5;
          if (value <= 34) return bodyfat6;
          if (value <= 39) return bodyfat7;
          return bodyfat8;
     };

     const getGoalBodyStats = (value) => {

          if (value <= 10) return bodyfat1;
          if (value <= 14) return bodyfat2;
          if (value <= 19) return bodyfat3;
          if (value <= 24) return bodyfat4;
          if (value <= 29) return bodyfat5;
          if (value <= 34) return bodyfat6;
          if (value <= 39) return bodyfat7;
          return bodyfat8;
     };

     const getPercentageForCircle = (value) => {
          return parseInt(value.replace('%', ''), 10);
     }

     return (
          <>
               <NavbarComponent/>

               
               <div className='d-grid justify-content-center'>
                    <div className='w-70'>
                         <div className='overall-summary-content1 d-flex align-items-center justify-content-center'>
                              <div className='d-flex flex-column'>
                                   {/* <img src={getCurrentBodyStats(getPercentageForCircle(STATS.currentStats.bodyFatPercentage))} alt="bodyfatimage" width={320} /> */}
                                   <img src={bodyfatshadow1} alt="bodyfatimage" width={120} />
                                   <h3 className='fw-bold text-center'>Now</h3>
                              </div>
                              <div className='d-flex flex-column'>
                                   <img src={transitionarrow} alt="transitionarrow" width={100} />
                              </div>
                              <div className='d-flex flex-column'>
                                   {/* <img src={getGoalBodyStats(getPercentageForCircle(STATS.goalStats.bodyFatPercentage))} alt="bodyfatimage" width={320} /> */}
                                   <img src={bodyfatshadow2} alt="bodyfatimage" width={120} />
                                   <h3 className='fw-bold text-center'>6 Months</h3>
                              </div>
                         </div>
                         {/* border */}
                         <div className='d-flex align-items-center justify-content-center'>
                              <div className='section1-border'></div>
                         </div>

                         <div className='overall-summary-content2 d-flex justify-content-center mt-4 '>
                              <div className='d-flex justify-content-center w-100'>
                                   <div className='d-flex flex-column'>
                                        <h5 className='fw-bold' style={{ marginLeft: '-1em' }}>Body Fat</h5>
                                        <p style={{ marginLeft: '-1.2em' }}>{STATS.goalStats.bodyFatPercentage}</p>
                                   </div>
                              </div>
                              <div className='d-flex justify-content-center w-100'>
                                   <div className='d-flex flex-column'>
                                        <h5 className='fw-bold' style={{ marginLeft: '3em' }}>Body Fat</h5>
                                        <p style={{ marginLeft: '3.8em' }}>{STATS.currentStats.bodyFatPercentage}</p>
                                   </div>
                              </div>
                         </div>

                         <div className='overall-summary-content2 d-flex mt-4'>
                              <div className='d-flex justify-content-center w-100'>
                                   <div className='d-flex flex-column'>
                                        <h5 className='fw-bold' style={{ marginLeft: '1em' }}>Muscle Mass</h5>
                                        {/* <div className="circle-chart" style={{ marginLeft: '1em' }} data-percent={STATS.currentStats.muscleMass}>
                                             <span>{STATS.currentStats.muscleMass}</span>
                                        </div> */}
                                        <div className="circle-chart" style={{ marginLeft: '1em', position: 'relative', width: '50px', height: '50px' }}>
                                             <svg
                                                  className="circle-chart-svg"
                                                  width="50"
                                                  height="50"
                                                  viewBox="0 0 36 36"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       className="circle-chart-bg"
                                                       d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                       fill="none"
                                                       stroke="#e6e6e6"
                                                       strokeWidth="4"
                                                  />
                                                  <path
                                                       className="circle-chart-progress"
                                                       d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                       fill="none"
                                                       stroke="#F97979"
                                                       strokeWidth="4"
                                                       strokeDasharray={`${getPercentageForCircle(STATS.currentStats.muscleMass)} 100`}
                                                  />
                                             </svg>
                                             <span
                                                  className="circle-chart-text"
                                                  style={{
                                                       position: 'absolute',
                                                       top: '50%',
                                                       left: '50%',
                                                       transform: 'translate(-50%, -50%)',
                                                       fontSize: '12px',
                                                       fontWeight: 'bold',
                                                       textAlign: 'center',
                                                  }}
                                             >
                                                  {STATS.currentStats.muscleMass}
                                             </span>
                                        </div>                                   </div>
                              </div>
                              <div className='d-flex justify-content-center w-100'>
                                   <div className='d-flex flex-column'>
                                        <h5 className='fw-bold' style={{ marginLeft: '5em' }}>Muscle Mass</h5>
                                        {/* <div className="circle-chart" style={{ marginLeft: '6em' }} data-percent={STATS.goalStats.muscleMass}>
                                             <span>{STATS.goalStats.muscleMass}</span>
                                        </div> */}
                                        <div className="circle-chart" style={{ marginLeft: '6em', position: 'relative', width: '50px', height: '50px' }}>
                                             <svg
                                                  className="circle-chart-svg"
                                                  width="50"
                                                  height="50"
                                                  viewBox="0 0 36 36"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path
                                                       className="circle-chart-bg"
                                                       d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                       fill="none"
                                                       stroke="#e6e6e6"
                                                       strokeWidth="4"
                                                  />
                                                  <path
                                                       className="circle-chart-progress"
                                                       d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                       fill="none"
                                                       stroke="#F97979"
                                                       strokeWidth="4"
                                                       strokeDasharray={`${getPercentageForCircle(STATS.goalStats.muscleMass)} 100`}
                                                  />
                                             </svg>
                                             <span
                                                  className="circle-chart-text"
                                                  style={{
                                                       position: 'absolute',
                                                       top: '50%',
                                                       left: '50%',
                                                       transform: 'translate(-50%, -50%)',
                                                       fontSize: '12px',
                                                       fontWeight: 'bold',
                                                       textAlign: 'center',
                                                  }}
                                             >
                                                  {STATS.goalStats.muscleMass}
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='mt-5 mb-5'>
                         <span>*The image shown is for representation purposes only and may vary based on individual differences.</span>
                    </div>
               </div>

               <div className='personalised-wrapper'>
                    <h3 className='text-center'>Personalised Insights based on your data</h3>
                    <div className='personalised-content'>
                         <div className='d-flex justify-content-center gap-5 p-5'>
                              <div className="maintain-div">
                                   <div className='maintain-card'>
                                        <h4>Maintenance calories</h4>
                                        <div className="calories-group d-flex  mt-5">
                                             <p>{STATS.personalizedInsights.maintenanceCalories}</p>
                                             <img src={caloriesicon} alt="caloriesicon" width={50} />
                                        </div>
                                        <span className="mt-4">*This may vary based on your physical activity </span>
                                   </div>

                                   <p className='maintain-p'>If you are focusing on Goal Selected remember these Points</p>
                              </div>
                              <div className="maintain-div">
                                   <div className='maintain-card'>
                                        <h4>Daily water intake</h4>
                                        <div className="calories-group d-flex mt-5">
                                             <p>{STATS.personalizedInsights.dailyWaterIntake}</p>
                                             <div className="waterglass-drp-img d-flex gap-2">
                                                  <img src={waterglassicon} alt="waterglassicon" width={40} />
                                                  <img src={waterglassicon} alt="waterglassicon" width={40} />
                                                  <img src={waterglassicon} alt="waterglassicon" width={40} />
                                             </div>
                                        </div>
                                        <span className="mt-4">*Make sure to take adequate water intake per day </span>
                                   </div>
                                   <div className="grp-info-div">
                                        <div className="grp-info d-flex align-items-center gap-2">
                                             <img src={dumbels} alt="dumbels" width={30} />
                                             <span>High-Protein Diet</span>
                                        </div>
                                        <div className="grp-info d-flex align-items-center gap-2">
                                             <img src={dumbels} alt="dumbels" width={30} />
                                             <span>Caloric Deficit</span>
                                        </div>
                                        <div className="grp-info d-flex align-items-center gap-2">
                                             <img src={dumbels} alt="dumbels" width={30} />
                                             <span>Focus more on cardio Workouts</span>
                                        </div>
                                        <div className="grp-info d-flex align-items-center gap-2">
                                             <img src={dumbels} alt="dumbels" width={30} />
                                             <span>Drink plenty of water</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="workout-diet-plan mt-5">
                    <h4 className="fw-bold text-center">Get you 30 days workout and diet plan now</h4>
                    <p className="text-center mt-3">(After payment you receive the plan via Pdf.)</p>
                    <div className='d-flex align-items-center justify-content-center'>

                         <div className="plan-div d-flex align-items-center">
                              <div className='d-flex align-items-center gap-4'>
                                   <input
                                        type="checkbox"
                                        id="custom-checkbox"
                                        onChange={handleCheckboxChange}
                                        checked={isChecked}
                                   />
                                   <label htmlFor="custom-checkbox" className="custom-checkbox"></label>
                                   <div>
                                        <p className='fw-bold'>One Month Plan</p>
                                        <span>Rs.99/-</span>
                                   </div>
                              </div>
                              <span>Rs.3.3 Per Day </span>
                         </div>
                         <div className='offer-div'>
                              <h4>Offer ends in</h4>
                              <h5>3hr:59min:59sec</h5>
                         </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                         <button type='button' className='btn-paynow'>Pay now</button>
                    </div>
               </div>
               <div className="app-info-wrapper mt-5">
                    <h4 className='fw-bold text-center'>What you get with this app:</h4>
                    <div className='app-div d-flex align-items-center justify-content-center mt-5' >
                         <div className='app-image-div w-100'>
                              <img src={rightintakemobileimage} alt="rightintakemobileimage" className='app-image' />
                         </div>
                         <div className='w-100'>
                              <div className='grp-app-info'>
                                   <img src={summaryicon1} alt="summaryicon1" width={60} />
                                   <p>Simple and Effective Diet Plans</p>
                              </div>
                              <div className='grp-app-info'>
                                   <img src={summaryicon2} alt="summaryicon2" width={60} />
                                   <p>Individualized fitness plan</p>
                              </div>
                              <div className='grp-app-info'>
                                   <img src={summaryicon3} alt="summaryicon3" width={60} />
                                   <p>Calorie Tracking Made Simple</p>
                              </div>
                              <div className='grp-app-info'>
                                   <img src={summaryicon4} alt="summaryicon4" width={60} />
                                   <p>AI-Driven Fitness Insights</p>
                              </div>
                              <div className='grp-app-info'>
                                   <img src={summaryicon5} alt="summaryicon5" width={60} />
                                   <p>Flexible Scheduling</p>
                              </div>
                         </div>
                    </div>
               </div>

               {/* footer */}
               <Footer />
          </>
     );
};

export default FormOverallSummary;
