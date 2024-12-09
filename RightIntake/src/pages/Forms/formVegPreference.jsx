import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import { goalbody1, goalbody2, goalbody3 } from '../../components/Images';

const FormVegPreference = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('Loss Weight');
     const { setFormData } = useContext(DataContext);

     // FormData handler, will update the form data with height values
     useEffect(() => {
          setFormData(prev => ({
               ...prev,
               weekdays: selectedOption,
          }));
     }, [selectedOption, setFormData]);

     // Select handler for week-day
     const handleSelect = (option) => {
          setSelectedOption(option);
     };

     let GOAL = [
          {
               label: 'Loss Weight',
               imageUrl: goalbody1
          },
          {
               label: 'Gain muscle',
               imageUrl: goalbody2
          },
          {
               label: 'Get shredded ',
               imageUrl: goalbody3
          }

     ];

     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>What is your goal?</h4>
                    <div className='grp-button d-flex flex-column align-items-center justify-content-center gap-4 mb-4'>
                         {GOAL && GOAL.map((goal, index) => {
                              return (
                                   <div className={`d-flex align-items-center  goal-card ${selectedOption === goal.label ? 'goal-card-active' : ''}`}
                                        key={index + 1}
                                        onClick={() => handleSelect(goal.label)}>
                                        <span className='w-100 text-center'>{goal.label} </span>
                                        <img src={goal.imageUrl} alt="bodyimage" className='goalimages' />
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

export default FormVegPreference