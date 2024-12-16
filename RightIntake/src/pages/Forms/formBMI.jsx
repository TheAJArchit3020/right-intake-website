import { useContext, useEffect, useState } from "react";
import DataContext from "../../components/Context/DataContext";
import { Col, Row } from "react-bootstrap";
import NavigationButton from "../../components/Button/navigationButton";
import { bmiimage } from "../../components/Images";
import axios from "axios";
import { getbmidata } from "../../components/apis";

const FormBMI = ({ handleNext }) => {
     const { formData } = useContext(DataContext);
     console.log({ formData });
 
     const currentWeight = formData?.currentWeight; // Weight in lbs or kg
     const height = formData?.height; // Height in cm
     const weightUnit = formData?.weightUnit; // Unit of weight ('lb' or 'kg')
 
     const [bmi, setBmi] = useState(0); // Initialize BMI as a number
     const [bmiData, setBmiData] = useState({});
 
     const calculateBMI = () => {
         if (currentWeight && height) {

             // Convert height to meters
             const heightInMeters = parseFloat(height) / 100;
 
             // Convert weight to kilograms
             const weightInKg = weightUnit === 'lb' 
                 ? parseFloat(currentWeight) * 0.453592 
                 : parseFloat(currentWeight);

 
             // Calculate BMI
             const bmiValue = weightInKg / (heightInMeters * heightInMeters);

 
             // Set calculated BMI
             setBmi(bmiValue);
 
             // Optionally, handle additional BMI logic
             getBmiValueHandler(bmiValue);
         } else {
             console.error("Invalid weight or height provided!");
         }
     };
 
     const getBmiValueHandler = async (bmiValue) => {
         try {
             const response = await axios.post(getbmidata, { bmi: bmiValue });
             setBmi(response.data?.bmi || bmiValue);
             setBmiData(response.data);
         } catch (error) {
             console.error("Error fetching BMI data:", error);
         }
     };
 
     useEffect(() => {
         calculateBMI();
     }, []);
 
 
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
                                             strokeDashoffset={(1 - bmi.toFixed(1) / 100) * 283}
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
                                 <span className='bmi-value'>{bmi.toFixed(1)}</span>
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
 
