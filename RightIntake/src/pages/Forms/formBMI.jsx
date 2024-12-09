import React, { useState, useEffect } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, ArcElement, Tooltip, Legend } from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { bmiimage } from '../../components/Images';

// Register the necessary Chart.js components
ChartJS.register(Title, ArcElement, Tooltip, Legend);

const FormBMI = ({ handleNext }) => {
     // Static data (instead of using formData)
     const currentWeight = 110;   // Weight in lbs
     const heightInFeet = 5;      // Height in feet
     const heightInInches = 9;    // Height in inches
     const weightUnit = 'lb';     // Unit of weight (lb or kg)

     const [bmi, setBmi] = useState(0);
     const [bmiCategory, setBmiCategory] = useState('');
     const [chartData, setChartData] = useState({
          labels: ['Underweight', 'Obesity'],
          datasets: [{
               label: 'BMI Progress',
               data: [0, 0], // Dynamic data based on the BMI value
               backgroundColor: ['#F97979', '#F97979'], // Colors for Underweight and Obesity
          }]
     });

     // BMI calculation logic
     const calculateBMI = () => {
          if (currentWeight && heightInFeet && heightInInches) {
               // Convert height to meters
               const heightInMeters = (parseInt(heightInFeet) * 0.3048) + (parseInt(heightInInches) * 0.0254);

               // Convert weight to kg if it's in lbs
               const weightInKg = weightUnit === 'lb' ? parseInt(currentWeight) * 0.453592 : parseInt(currentWeight);

               // Calculate BMI
               const bmiValue = weightInKg / (heightInMeters * heightInMeters);
               setBmi(bmiValue);

               // Calculate the percentage for the chart based on BMI value
               let underweight = 0;
               let obesity = 0;

               if (bmiValue < 18.5) {
                    setBmiCategory('Underweight');
                    underweight = 100;
               } else if (bmiValue >= 30) {
                    setBmiCategory('Obesity');
                    obesity = 100;
               }

               // Update chart data with the calculated percentages
               setChartData({
                    ...chartData,
                    datasets: [{
                         ...chartData.datasets[0],
                         data: [underweight, obesity],  // Update with values for Underweight and Obesity
                    }]
               });
          }
     };

     // Run BMI calculation whenever the component mounts or the weight/height changes
     useEffect(() => {
          calculateBMI();
     }, []);

     return (
          <div className='container-fluid'>
               <Row className='bmi-ui-wrapper'>
                    <Col sm={12} md={6} className="bmi-ui-section1 d-flex flex-column align-items-center justify-content-center gap-2 text-center">
                         <div className='bmi-chart'>
                              <Doughnut
                                   data={chartData}
                                   options={{
                                        plugins: {
                                             legend: false,
                                             tooltip: {
                                                  callbacks: {
                                                       label: (tooltipItem) => {
                                                            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                                                       },
                                                  },
                                             },
                                             // Custom plugin to draw text in the center of the doughnut
                                             datalabels: {
                                                  color: '#000',
                                                  font: {
                                                       size: 18,
                                                       weight: 'bold',
                                                  },
                                                  align: 'center',
                                                  anchor: 'center',
                                                  formatter: () => {
                                                       return `${bmi.toFixed(2)}\n${bmiCategory}`;
                                                  },
                                             },
                                        },
                                        cutout: '90%',
                                        rotation: -90,
                                        circumference: 180,
                                   }}
                              />
                         </div>
                         <div className='bmi-category'>
                              <p>UnderWeight</p>
                              <p>Obese</p>
                         </div>
                         <div className='bmi-content d-flex flex-column align-items-center justify-content-center gap-2'>
                              <span className='mt-1 fw-bold'> BMI</span>
                              <span className='mb-4'> {bmi.toFixed(2)}</span>
                              <span className='mt-1 fw-bold'>{bmiCategory}</span>
                              <span className='bmi-content-para'>you maintains a normal BMI, reflecting a healthy balance between his weight and height.</span>

                         </div>
                    </Col>

                    <Col sm={12} md={6} className="bmi-ui-section2">
                         <div className="bmi-ui-content d-flex flex-column align-items-center justify-content-center gap-2 text-center ">
                              <img src={bmiimage} alt="bmiimage" width={50} />
                              <span className='bmi-content-para fw-bold'>Keeping a normal BMI shows your dedication to staying healthy and taking great care of your well-being—well done!</span>

                         </div>
                    </Col>
               </Row>

               <div className='d-flex align-items-center justify-content-center mt-5'>
                    <NavigationButton handleNext={handleNext} />
               </div>
          </div>
     );
};

export default FormBMI;
