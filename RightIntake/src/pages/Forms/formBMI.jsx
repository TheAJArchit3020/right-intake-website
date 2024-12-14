import React, { useState, useEffect, useContext } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import { Col, Row } from 'react-bootstrap';
import { bmiimage } from '../../components/Images';
import DataContext from '../../components/Context/DataContext';
import "./responsive.css";
import { getbmidata } from '../../components/apis';
import axios from 'axios';

const FormBMI = ({ handleNext }) => {
     const currentWeight = 110;   // Weight in lbs
     const heightInFeet = 5;      // Height in feet
     const heightInInches = 9;    // Height in inches
     const weightUnit = 'lb';     // Unit of weight (lb or kg)

     const [bmi, setBmi] = useState(0); // Initialize as a number
     const [bmiData, setBmiData] = useState([]);
     // const { formData, setFormData } = useContext(DataContext);

     const calculateBMI = () => {
          if (currentWeight && heightInFeet && heightInInches) {
               const heightInMeters = (parseInt(heightInFeet) * 0.3048) + (parseInt(heightInInches) * 0.0254);
               const weightInKg = weightUnit === 'lb' ? parseInt(currentWeight) * 0.453592 : parseInt(currentWeight);
               const bmiValue = weightInKg / (heightInMeters * heightInMeters);
               
               getBmiValueHandler(bmiValue); // Pass calculated BMI to handler
          }
     };

     // bmi api handler ....
     const getBmiValueHandler = async (bmiValue) => {
          try {
               const response = await axios.post(getbmidata, { bmi: bmiValue });
               setBmi(response.data?.bmi || bmiValue);
               setBmiData(response.data);
          } catch (error) {
               alert(`${error}`);
          }
     };

     useEffect(() => {
          calculateBMI();
     }, []);

     console.log({bmiData})

     return (
          <>
               <div className='mobileBmi'>
                    <div className='container-fluid'>
                         <Row className='bmi-ui-wrapper'>
                              <Col sm={12} md={5} className="bmi-ui-section1 d-flex flex-column align-items-center justify-content-center gap-2 text-center">
                                   <div className='bmi-progress'>
                                        <div className="progress-circle">
                                             <svg className="progress-circle-svg" width="300" height="250" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                       className="progress-circle-bg"
                                                       d="M10,90 A90,90 0 0,1 190,90"
                                                       fill="none"
                                                       stroke="#e6e6e6"
                                                       strokeWidth="10"
                                                       strokeLinecap="round"
                                                  />
                                                  <path
                                                       className="progress-circle-bar"
                                                       d="M10,90 A90,90 0 0,1 190,90"
                                                       fill="none"
                                                       stroke="#F97979"
                                                       strokeWidth="10"
                                                       strokeDasharray="283"
                                                       strokeDashoffset={(1 - bmi.toFixed(1) / 100) * 283} // Ensure bmi is a number
                                                       strokeLinecap="round"
                                                  />
                                             </svg>
                                        </div>
                                   </div>
                                   <div className='bmi-category d-flex justify-content-between align-items-center w-100'>
                                        <span className='bmi-status1 text-center w-100'>Under Weight</span>
                                        <span className='bmi-status2 text-center w-100'>Obese</span>
                                   </div>

                                   <div className='bmi-content d-flex flex-column align-items-center justify-content-center gap-2 w-75'>
                                        <span className='bmi-title fw-bold'>BMI</span>
                                        <span className='bmi-value'>{bmi.toFixed(1)}</span> {/* Safely calls toFixed */}
                                        <span className='bmi-category-name fw-bold'>{bmiData?.status}</span>
                                   </div>
                                   <span className='bmi-description w-75 mt-5'>{bmiData?.message}</span>
                              </Col>

                              <Col sm={12} md={7} className="bmi-ui-section2">
                                   <div className="bmi-ui-content d-flex flex-column align-items-center justify-content-center gap-2 text-center">
                                        <img src={bmiimage} alt="BMI illustration" width={50} />
                                        <span className='bmi-motivation fw-bold'>{bmiData?.additionalInfo?.motivationalText}</span>
                                   </div>
                              </Col>
                         </Row>
                    </div>
                    <div className='mobile-button bmi-submit-button d-flex align-items-center'>
                         <NavigationButton handleNext={handleNext} />
                    </div>
               </div>
          </>
     );
};

export default FormBMI;
