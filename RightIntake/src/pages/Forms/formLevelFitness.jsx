import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import { Form } from 'react-bootstrap';
import { fitnessimg1, fitnessimg2 } from '../../components/Images';

const FormLevelFitness = ({ handleNext }) => {
     const [fitnessLevel, setFitnessLevel] = useState(0);
     // Handle change event for the range input
     const handleRangeChange = (event) => {
          setFitnessLevel(event.target.value);  // Update the fitness level based on the slider value
     };

     console.log({ fitnessLevel })
     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>What’s your current level of fitness?</h4>
                    <div className='range-wrapper d-flex align-items-center justify-content-center'>
                         <div className='fitness-range d-flex align-items-center justify-content-center gap-3'>
                              <img src={fitnessimg1} alt="fitnessimg1" width={30} />
                              <div className="range-with-lines" style={{ position: 'relative', width: '100%' }}>
                                   {/* Vertical lines at 10% intervals */}
                                   {[...Array(10)].map((_, index) => (
                                        <div
                                             key={index}
                                             className="interval-line"
                                             style={{
                                                  position: 'absolute',
                                                  left: `${(index + 1) * 9}%`,  // Position each line at 10%, 20%, ..., 100%
                                                  top: '0px',
                                                  bottom: '0',
                                                  width: '1.5px',
                                                  backgroundColor: '#000', // Line color

                                             }}
                                        />
                                   ))}

                                   {/* Range slider */}
                                   <Form.Range
                                        value={fitnessLevel}
                                        onChange={handleRangeChange}
                                        min={0}
                                        max={100}
                                        style={{
                                             position: 'relative',
                                             width: '100%',
                                        }}
                                   />
                              </div>
                              <img src={fitnessimg2} alt="fitnessimg1" width={30} />
                         </div>


                    </div>
                    <div className='fitness-new-commer d-flex align-items-center justify-content-center'>
                         <div className='fitness-newcommer-ui mt-4'>
                              <p className='fw-bold'>Newcomer</p>
                              <p>Whenever I sit on the floor, it's hard for me to stand up.</p>
                         </div>
                    </div>

                    <div className='fitness-submit-btn d-flex align-items-center justify-content-center'>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormLevelFitness