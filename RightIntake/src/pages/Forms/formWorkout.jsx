import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import { workoutimg1, workoutimg2, workoutimg3 } from '../../components/Images';

const FormWorkout = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('GYM');
     const { setFormData } = useContext(DataContext);

     // FormData handler, will update the form data with height values
     useEffect(() => {
          setFormData(prev => ({
               ...prev,
               workout: selectedOption,
          }));
     }, [selectedOption, setFormData]);

     // Select handler for week-day
     const handleSelect = (option) => {
          setSelectedOption(option);
     };

     let WORKOUT = [
          {
               label: 'GYM',
               imageUrl: workoutimg1
          },
          {
               label: 'HOME WORKOUT',
               imageUrl: workoutimg2
          },
          {
               label: 'OUTDOORS ',
               imageUrl: workoutimg3
          }

     ];

     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>How do you like to workout?</h4>
                    <div className='grp-button d-flex flex-column align-items-center justify-content-center gap-4 mb-4'>
                         {WORKOUT && WORKOUT.map((workout, index) => {
                              return (
                                   <div className={`d-flex align-items-center gap-3 workout-card ${selectedOption === workout.label ? 'workout-card-active' : ''}`}
                                        key={index + 1}
                                        onClick={() => handleSelect(workout.label)}>
                                        <span className='w-100 text-center'>{workout.label} </span>
                                        <img src={workout.imageUrl} alt="bodyimage" className='workoutimages' />
                                   </div>
                              )
                         })}
                    </div>


                    <div className='goal-submit-btn d-flex align-items-center justify-content-center mb-2'>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormWorkout