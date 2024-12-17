import React, { useContext, useEffect, useRef, useState } from "react";
import {
  dumbels,
  bodyfat1,
  bodyfat2,
  bodyfat3,
  bodyfat4,
  bodyfat5,
  bodyfat6,
  bodyfat7,
  bodyfat8,
  transitionarrow,
  caloriesicon,
  waterglassicon,
  rightintakemobileimage,
  summaryicon1,
  summaryicon2,
  summaryicon3,
  summaryicon4,
  summaryicon5,
  offerbackground,
  bodyfatshadow2,
  bodyfatshadow1,
} from "../../components/Images";
import Footer from "../../components/footerComponent/footer";
import NavbarComponent from "../../components/navbarComponent/navbar";
import { saveUser, generateInsights } from "../../components/apis";
import axios from "axios";
import DataContext from "../../components/Context/DataContext";
import Loading from "../LoadingAnimation/Loading";
import './overallsummary.css';

const FormOverallSummary = ({ handleNext }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [STATS, setSTATS] = useState(null);
  const [loading, setLoading] = useState(true);
  const { formData } = useContext(DataContext);
  const [currentTime,setTimer] = useState('3hr:59min:59sec');
  //   const [formData, setFormData] = useState({
  //     age: "25",
  //     city: "Pimpri-Chinchwad",
  //     state: "Maharashtra",
  //     country: "India",
  //     gender: "Male",
  //     bodyFatPercentage: 30,
  //     occupation: "CEO’s/Business owners",
  //     height: "5feet'8inch'",
  //     weight: "80Kg",
  //     targetWeight: "70Kg",
  //     dietType: "Non-Veg",
  //     nonVegDays: ["Saturday", "Sunday"],
  //     primaryGoal: "Weight Loss",
  //     workoutPreference: "gym",
  //     weeklyTrainingDays: "2-3 days in a week 🔥 ",
  //     healthcondition: ["None"],
  //     allergies: "",
  //     foodPreference: {
  //       veggies: ["Cauliflower", "Bhindi", "Brinjal", "Carrot", "Spinach"],
  //       carbs: ["Poha", "Bhakri", "Rice", "Puran Poli", "Chapati"],
  //       fruits_berries: ["Mango", "Banana", "Papaya", "Guava", "Chikoo"],
  //       meat: ["Mutton", "Fish", "Chicken", "Prawns"],
  //     },
  //     meal: ["Apple"],
  //     sleephours: "4-5 hours 🦇",
  //     waterdrink: "2-3 litres a day 🥛🥛🥛",
  //     fullName: "Archit Janugade",
  //     email: "archit.kineticscapestudios@gmail.com",
  //     mobileNumber: "+919561930878",
  //   });
  const [error, setError] = useState(null);
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  const fetchExecuted = useRef(false);


  const startTimer = () => {
    let hours = 3;
    let minutes = 59;
    let seconds = 59;

    const updateTimer = () => {
      if (seconds > 0) {
        seconds--;
      } else if (minutes > 0) {
        seconds = 59;
        minutes--;
      } else if (hours > 0) {
        minutes = 59;
        hours--;
      }

      const formattedTime = `${hours}hr:${minutes}min:${seconds}sec`;
      setTimer(formattedTime);
    };

    // Set interval to decrease time every second
    const intervalId = setInterval(() => {
      updateTimer();
    }, 1000);

    // Cleanup interval when the component is unmounted or time is up
    return intervalId;
  };
  
  useEffect(() => {
    if (!fetchExecuted.current) {
      console.log(formData);
      fetchStats();
      fetchExecuted.current = true;
    }

    const intervalId = startTimer();
    return () => clearInterval(intervalId);

  }, []);

  const fetchStats = async () => {
    console.log("the log");
    console.log(formData);
    try {
      const response = await axios.post(saveUser, formData);
      console.log(response.data);
      const insightsResponse = await axios.post(generateInsights, {
        userId: response.data.userId,
      });
      setSTATS(insightsResponse.data); // Assuming response.data contains the stats
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.error("Error fetching stats:", err);
      setError("Failed to fetch stats. Please try again.");
    }
  };

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

  const getGoalBodyRange = (value) => {
    console.log(value);

    if (value >= 6 && value <= 10) return "6-10%";
    if (value >= 11 && value <= 14) return "11-14%";
    if (value >= 15 && value <= 19) return "15-19%";
    if (value >= 20 && value <= 24) return "20-24%";
    if (value >= 25 && value <= 29) return "25-29%";
    if (value >= 30 && value <= 34) return "30-34%";
    if (value >= 35 && value <= 39) return "35-39%";
    if (value >= 40) return "40%";

    // Default return for values less than 6
    return "Below 6%";
  };


  const getPercentageForCircle = (value) => {
    return parseInt(value.replace("%", ""), 10);
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="d-grid justify-content-center">
        <div className="overall-summary-content1 d-flex align-items-center justify-content-center">
          <div className="d-flex flex-column">
            <img
              src={getCurrentBodyStats(
                getPercentageForCircle(STATS.currentStats.bodyFatPercentage)
              )}
              alt="bodyfatimage"
              className="goal-images"
            />

            <h3 className="fw-bold text-center">Now</h3>
          </div>
          <div className="d-flex flex-column justify-content-center">
            <img
              src={transitionarrow}
              alt="transitionarrow"
              className="trans-images"
            />
          </div>
          <div className="d-flex flex-column">
            <img
              src={getGoalBodyStats(
                getPercentageForCircle(STATS.goalStats.bodyFatPercentage)
              )}
              alt="bodyfatimage"
              width={120}
              className="goal-images"
            />

            <h3 className="fw-bold text-center">6 Months</h3>
          </div>
        </div>
        {/* border */}
        <div className="d-flex align-items-center justify-content-center">
          <div className="section1-border"></div>
        </div>

        <div className="overall-summary-content2">
          <div className="stats">
          <div className="overall-summary-content2-grp d-flex flex-column">
            <h5 className="overall-summary-content2-grp-heading1 fw-bold">
              Body Fat
            </h5>
            <p className="overall-summary-content2-grp-para1">
              {getGoalBodyRange(
                parseInt(STATS.currentStats.bodyFatPercentage),
                10
              )}
            </p>
          </div>
          <div className="overall-summary-content2-grp d-flex flex-column">
            <h5 className="overall-summary-content2-grp-heading1 fw-bold w-5">
              Body Fat
            </h5>
            <p className="overall-summary-content2-grp-para2">
              {getGoalBodyRange(
                parseInt(STATS.goalStats.bodyFatPercentage),
                10
              )}
            </p>
          </div>
        </div>
        </div>
        <div className="overall-summary-content2 d-flex mt-4">
          <div className="overall-summary-content2-chart-div d-flex flex-column justify-content-center align-items-center me-10">
            <h5 className="overall-summary-content2-chart-heading fw-bold">
              Muscle Mass
            </h5>
            {/* <div className="circle-chart" style={{ marginLeft: '1em' }} data-percent={STATS.currentStats.muscleMass}>
                                             <span>{STATS.currentStats.muscleMass}</span>
                                        </div> */}
            <div
              className="circle-chart"
              style={{ position: "relative", width: "50px", height: "50px" }}
            >
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
                  strokeDasharray={`${getPercentageForCircle(
                    STATS.currentStats.muscleMass
                  )} 100`}
                />
              </svg>
              <span
                className="circle-chart-text"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {STATS.currentStats.muscleMass}
              </span>
            </div>
          </div>
          <div className="overall-summary-content2-chart-div d-flex flex-column justify-content-center align-items-center">
            <h5 className="overall-summary-content2-chart-heading2 fw-bold">
              Muscle Mass
            </h5>
            {/* <div className="circle-chart" style={{ marginLeft: '6em' }} data-percent={STATS.goalStats.muscleMass}>
                                             <span>{STATS.goalStats.muscleMass}</span>
                                        </div> */}
            <div
              className="circle-chart"
              style={{ position: "relative", width: "50px", height: "50px" }}
            >
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
                  strokeDasharray={`${getPercentageForCircle(
                    STATS.goalStats.muscleMass
                  )} 100`}
                />
              </svg>
              <span
                className="circle-chart-text"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {STATS.goalStats.muscleMass}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="section-notes">
        <p className="description-text">
          *The image shown is for representation purposes only and may vary
          based on individual differences.
        </p>
      </div>

      <div className="personalised-wrapper">
        <h3 className="text-center">
          Personalised Insights based on your data
        </h3>
        <div className="personalised-content">
          {/* for mobile */}
          <div className="summary-div">
            <div className="summary-maintain-div">
              <div className="summary-maintain-card">
                <h4>Maintenance calories</h4>
                <div className="summary-calories-group">
                  <p>{STATS.personalizedInsights.maintenanceCalories}</p>
                  <img src={caloriesicon} alt="caloriesicon" width={50} />
                </div>
                <span className="mt-4">
                  *This may vary based on your physical activity{" "}
                </span>
              </div>
            </div>

            <div className="summary-maintain-div">
              <div className="summary-maintain-card">
                <h4>Daily water intake</h4>
                <div className="summary-calories-group">
                  <p>{STATS.personalizedInsights.dailyWaterIntake}</p>
                  <div className="summary-waterglass-drp-img d-flex gap-2">
                    <img src={waterglassicon} alt="waterglassicon" width={40} />
                    <img src={waterglassicon} alt="waterglassicon" width={40} />
                    <img src={waterglassicon} alt="waterglassicon" width={40} />
                  </div>
                </div>
                <span className="mt-4">
                  *This may vary based on your physical activity{" "}
                </span>
              </div>
            </div>

            <div className="summary-maintain-div2">
              <p className="summary-maintain-p">
                If you are focusing on {STATS.goalFocus?.selectedGoal} remember
                these Points
              </p>
              <div className="summary-maintain-grpinfo-div">
                {STATS.goalFocus?.keyPoints?.length > 0 ? (
                  STATS.goalFocus.keyPoints.map((keyPoint, index) => (
                    <div className="summary-maintain-grp-info" key={index}>
                      <img src={dumbels} alt="dumbels" width={25} />
                      <p>{keyPoint}</p>
                    </div>
                  ))
                ) : (
                  <p>No key points available.</p>
                )}
              </div>
            </div>
          </div>

          {/* mobile end */}

          <div className="summary-desktop-view">
            <div className=" d-flex justify-content-center p-5">
              <div className="maintain-div" style={{ marginLeft: "180px" }}>
                <div className="maintain-card">
                  <h4>Maintenance calories</h4>
                  <div className="calories-group d-flex mt-5">
                    <p>{STATS.personalizedInsights.maintenanceCalories}</p>
                    <img src={caloriesicon} alt="caloriesicon" width={50} />
                  </div>
                  <span className="mt-4">
                    *This may vary based on your physical activity{" "}
                  </span>
                </div>

                <p className="maintain-p">
                  If you are focusing on Goal Selected remember these Points
                </p>
              </div>
              <div className="maintain-div">
                <div className="maintain-card">
                  <h4>Daily water intake</h4>
                  <div className="calories-group d-flex mt-5">
                    <p>{STATS.personalizedInsights.dailyWaterIntake}</p>
                    <div className="waterglass-drp-img d-flex gap-2">
                      <img
                        src={waterglassicon}
                        alt="waterglassicon"
                        width={40}
                      />
                      <img
                        src={waterglassicon}
                        alt="waterglassicon"
                        width={40}
                      />
                      <img
                        src={waterglassicon}
                        alt="waterglassicon"
                        width={40}
                      />
                    </div>
                  </div>
                  <span className="mt-4">
                    *Make sure to take adequate water intake per day{" "}
                  </span>
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
      </div>

      {/* for mobile */}
      <div className="mobile-summary-workout-diet-plan">
        <div className="summary-workout-diet-plan-heading">
          <h4 className="fw-bold text-center">
            Get you 30 days workout and diet plan now
          </h4>
          <p className="text-center mt-3">
            (After payment you receive the plan via Pdf.)
          </p>
        </div>
        <div className="summary-workout-diet-plan">
          <div className="summary-plan-div">
            <div className="summary-group">
              <input
                type="checkbox"
                id="custom-checkbox"
                onChange={handleCheckboxChange}
                checked={isChecked}
              />
              <label
                htmlFor="custom-checkbox"
                className="custom-checkbox"
              ></label>
              <div>
                <p className="fw-bold ">One Month Plan</p>
                <p>Rs.99/-</p>
              </div>
            </div>
            <p>Rs.3.3 Per Day </p>
          </div>
          <div className="summary-offer-div">
            <h5>Offer ends in</h5>
            <h1>{currentTime}</h1>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button type="button" className="btn-paynow">
            Pay now
          </button>
        </div>
      </div>
      {/* for mobile end*/}

      {/* for desktop */}
      <div className="desktop-workout-diet-plan">
        <div className="workout-diet-plan mt-5">
          <h4 className="fw-bold text-center">
            Get you 30 days workout and diet plan now
          </h4>
          <p className="text-center mt-3">
            (After payment you receive the plan via Pdf.)
          </p>
          <div className="desktop-workout-plan-paynow-div d-flex align-items-center justify-content-center">
            <div className="plan-div d-flex align-items-center">
              <div className="d-flex align-items-center ">
                <input
                  type="checkbox"
                  id="custom-checkbox"
                  onChange={handleCheckboxChange}
                  checked={isChecked}
                />
                <label
                  htmlFor="custom-checkbox"
                  className="custom-checkbox"
                ></label>
                <div className="ms-3">
                  <p className="fw-bold">One Month Plan</p>
                  <span>Rs.99/-</span>
                </div>
              </div>
              <span>Rs.3.3 Per Day </span>
            </div>
            <div className="offer-div">
              <h4>Offer ends in</h4>
              <h3>{currentTime}</h3>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="button" className="btn-paynow">
              Pay now
            </button>
          </div>
        </div>
      </div>

      {/* for desktop ends*/}

      <div className="app-info-wrapper mt-5">
        <h4 className="fw-bold text-center">What you get with this app:</h4>
        <div className="app-div d-flex align-items-center justify-content-center mt-5">
          <div className="app-image-div w-100">
            <img
              src={rightintakemobileimage}
              alt="rightintakemobileimage"
              className="app-image"
            />
          </div>
          <div className="w-100">
            <div className="grp-app-info">
              <img src={summaryicon1} alt="summaryicon1" width={60} />
              <p>Simple and Effective Diet Plans</p>
            </div>
            <div className="grp-app-info">
              <img src={summaryicon2} alt="summaryicon2" width={60} />
              <p>Individualized fitness plan</p>
            </div>
            <div className="grp-app-info">
              <img src={summaryicon3} alt="summaryicon3" width={60} />
              <p>Calorie Tracking Made Simple</p>
            </div>
            <div className="grp-app-info">
              <img src={summaryicon4} alt="summaryicon4" width={60} />
              <p>AI-Driven Fitness Insights</p>
            </div>
            <div className="grp-app-info">
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
