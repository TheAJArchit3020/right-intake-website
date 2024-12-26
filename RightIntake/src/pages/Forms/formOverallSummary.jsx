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
} from "../../components/Images";
import Footer from "../../components/footerComponent/footer";
import NavbarComponent from "../../components/navbarComponent/navbar";
import { useNavigate } from "react-router";
import { saveUser, generateInsights } from "../../components/apis";
import axios from "axios";
import DataContext from "../../components/Context/DataContext";
import Loading from "../LoadingAnimation/Loading";
import "./overallsummary.css";
import { initiatePayment } from "../../components/apis";
import { verifyPayment } from "../../components/apis";
import { realintakeslogo } from "../../components/Images";
const FormOverallSummary = () => {
  const navigateOverall = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [STATS, setSTATS] = useState(null);
  const [loading, setLoading] = useState(true);
  const { formData } = useContext(DataContext);
  const [currentTime, setTimer] = useState("3hr:59min:59sec");
  const [userId, setUserId] = useState("");

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
      setUserId(response.data.tempUserId);
      console.log(response.data);
      const insightsResponse = await axios.post(generateInsights, {
        userId: response.data.tempUserId,
      });
      setSTATS(insightsResponse.data); // Assuming response.data contains the stats
      setLoading(false); // Set loading to false after data is fetched
    } catch (err) {
      console.error("Error fetching stats:", err);
      setError("Failed to fetch stats. Please try again.");
    }
  };

  const getBodyStats = (value) => {
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

  const handlepayment = async () => {
    const data = {
      tempUserId: userId.toString(),
      amount: 99, // Amount in subunits (e.g., 99 INR = 9900 paise)
    };

    try {
      const response = await axios.post(initiatePayment, data);
      console.log("Payment initiated:", response.data);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        const options = {
          key: response.data.razorpayKeyId,
          amount: "9900",
          currency: "INR",
          name: "Right Intake",
          description: "Get your fitness plan now!",
          image: realintakeslogo,
          order_id: response.data.orderId, // Order ID generated from backend

          handler: async function (razorpayResponse) {
            console.log("Payment Response:", razorpayResponse);

            const paymentData = {
              razorpay_order_id: razorpayResponse.razorpay_order_id,
              razorpay_payment_id: razorpayResponse.razorpay_payment_id,
              razorpay_signature: razorpayResponse.razorpay_signature,
              tempUserId: userId.toString(),
            };

            try {
              const paymentVerificationResponse = await axios.post(
                verifyPayment,
                paymentData
              );
              console.log(
                "Payment verification response:",
                paymentVerificationResponse.data
              );

              if (paymentVerificationResponse.status === 200) {
                navigateOverall("/final");
              } else {
                console.error(
                  "Payment verification failed or unexpected response."
                );
                // Optionally, you can handle the error or unexpected response here
              }
            } catch (error) {
              console.error(
                "Payment verification failed:",
                error.response || error.message
              );
            }
          },
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.mobileNumber,
          },
          notes: {
            address: "note value",
          },
          theme: {
            color: "#9FEB9F",
          },
        };

        // Initialize Razorpay payment gateway
        const rzp1 = new Razorpay(options);
        rzp1.open();
      };

      // Append the script to the document body to load it
      document.body.appendChild(script);
    } catch (error) {
      if (error.response) {
        console.log(
          "Payment initiation failed with status:",
          error.response.status
        );
        console.log("Error details:", error.response.data);
      } else {
        console.log("Payment initiation failed with error:", error.message);
      }
    }
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <NavbarComponent />
      <div className="overall-summary-container">
        <div className="overall-summary-wrapper">
          <div className="overall-summary-head">
            <div className="summary-head-bodies">
              <div className="summary-body-1">
                <img
                  src={getBodyStats(
                    parseInt(
                      STATS.currentStats.bodyFatPercentage.replace("%", ""),
                      10
                    )
                  )}
                />
              </div>
              <div className="summary-body-seperator">
                <img src={transitionarrow} alt="" />
              </div>
              <div className="summary-body-2">
                <img
                  src={getBodyStats(
                    parseInt(
                      STATS.goalStats.bodyFatPercentage.replace("%", ""),
                      10
                    )
                  )}
                  alt=""
                />
              </div>
            </div>
            <div className="summary-head-content">
              <div className="summary-head-content-headings">
                <span className="summary-head-content-heading-1">Now</span>
                <span className="summary-head-content-heading-2">6 months</span>
              </div>
              <div className="summary-head-content-body-fat">
                <div className="body-fat-content-now">
                  <span>Body fat</span>
                  <span>
                    {getGoalBodyRange(
                      parseInt(
                        STATS.currentStats.bodyFatPercentage.replace("%", ""),
                        10
                      )
                    )}
                  </span>
                </div>
                <div className="body-fat-content-fut">
                  <span>Body fat</span>
                  <span>
                    {getGoalBodyRange(
                      parseInt(
                        STATS.goalStats.bodyFatPercentage.replace("%", ""),
                        10
                      )
                    )}
                  </span>
                </div>
              </div>
              <div className="summary-head-content-muscle-mass">
                <div className="body-fat-muscle-mass-now">
                  <span>Muscle mass</span>
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke="#E6E6E6"
                      strokeWidth="3.8"
                    />

                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke="#F97979"
                      strokeWidth="3.8"
                      strokeDasharray={`${parseFloat(
                        STATS.currentStats.muscleMass
                      )} 100`}
                      strokeLinecap="round"
                      transform="rotate(-90 18 18)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize=".5rem"
                      fontWeight="bold"
                      fill="#333"
                    >
                      {STATS.currentStats.muscleMass}
                    </text>
                  </svg>
                </div>
                <div className="body-fat-muscle-mass-fut">
                  <span>Muscle mass</span>
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 36 36"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke="#E6E6E6"
                      strokeWidth="3.8"
                    />

                    <circle
                      cx="18"
                      cy="18"
                      r="15.9155"
                      fill="none"
                      stroke="#F97979"
                      strokeWidth="3.8"
                      strokeDasharray={`${parseFloat(
                        STATS.goalStats.muscleMass
                      )} 100`}
                      strokeLinecap="round"
                      transform="rotate(-90 18 18)"
                    />
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      fontSize=".5rem"
                      fontWeight="bold"
                      fill="#333"
                    >
                      {STATS.goalStats.muscleMass}
                    </text>
                  </svg>
                </div>
              </div>
              <div className="repersentation-purpose-text">
                <span>
                  *The image shown is for representation purposes only and may
                  vary based on individual differences.
                </span>
              </div>

              <div className="personalized-insights-text">
                <span>Personalised Insights based on your data</span>
              </div>
            </div>
          </div>
          <div className="personalized-insights-wrapper">
            <div className="calories-and-water-wrapper">
              <div className="maintenance-calories-wrapper">
                <div className="maintenance-cal-heading">
                  <span>Maintenance calories</span>
                </div>
                <div className="maintenance-calories-content">
                  <div className="actual-calories">
                    <span>
                      {STATS.personalizedInsights.maintenanceCalories}
                    </span>
                  </div>
                  <div className="m-c-icon">
                    <img src={caloriesicon} alt="" />
                  </div>
                </div>
                <div className="m-c-info">
                  <span>*This may vary based on your physical activity </span>
                </div>
              </div>
              <div className="water-intake-wrapper">
                <div className="water-intake-heading">
                  <span>Daily water intake</span>
                </div>
                <div className="w-i-content">
                  <div className="w-i-actual-water">
                    <span>{STATS.personalizedInsights.dailyWaterIntake}</span>
                  </div>
                  <div className="w-i-icon">
                    <img src={waterglassicon} alt="" />
                  </div>
                </div>
                <div className="w-i-info">
                  <span>*Make sure to take adequate water intake per day</span>
                </div>
              </div>
            </div>
            <div className="personalized-goal-wrapper">
              <div className="personalized-goal-heading">
                <span>
                  If you are focusing on {STATS.goalFocus.selectedGoal} remember
                  these Points
                </span>
              </div>
              <div className="personalized-goal-key-points">
                {STATS.goalFocus.keyPoints.map((point, index) => (
                  <div key={index} className="goal-key-point">
                    <img src={dumbels} alt="key-point" width={25} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="get-diet-plan-head">
              <span>Get you 30 days workout and diet plan now</span>
            </div>
            <div className="payment-wrapper">
              <div className="payment-plan-wrapper">
                <div className="payment-heading">
                  <span>Offer ends in: {currentTime}</span>
                </div>
                <div className="payment-amount">
                  <span>
                    Just for <span className="low-font-weight">Rs</span> 99 |{" "}
                    <span className="scratched-out-font">750/-</span>
                  </span>
                </div>
                <div className="pay-now-btn" onClick={handlepayment}>
                  <span>Get it now</span>
                </div>
              </div>
            </div>
          </div>
          <div className="app-info-wrapper">
            <div className="app-info-heading">
              <span>Want more?</span>
            </div>
            <div className="app-info-sub-heading">
              <span>Get more with our app:</span>
            </div>
            <div className="app-info-content">
              <div className="app-info-app-img">
                <img src={rightintakemobileimage} alt="" />
              </div>
              <div className="app-info-key-points">
                <div className="app-info-key-point">
                  <img src={summaryicon1} alt="" />
                  <span>Simple and Effective Diet Plans</span>
                </div>
                <div className="app-info-key-point">
                  <img src={summaryicon2} alt="" />
                  <span>Individualized fitness plan</span>
                </div>
                <div className="app-info-key-point">
                  <img src={summaryicon3} alt="" />
                  <span>Calorie Tracking Made Simple</span>
                </div>
                <div className="app-info-key-point">
                  <img src={summaryicon4} alt="" />
                  <span>AI-Driven Fitness Insights</span>
                </div>
                <div className="app-info-key-point">
                  <img src={summaryicon5} alt="" />
                  <span>Flexible Scheduling</span>
                </div>
              </div>
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
