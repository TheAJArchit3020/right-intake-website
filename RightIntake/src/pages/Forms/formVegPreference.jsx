import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import { goalbody1, goalbody2, goalbody3 } from '../../components/Images';

const FormVegPreference = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
     const { setFormData } = useContext(DataContext);



     // Select handler for week-day
     const handleSelect = (option) => {
          setSelectedOption(option);
          setFormData(prev => ({
               ...prev,
               goal: option,
          }));
          setTimeout(() => {
               handleNext();
          }, 500);
     };

     let GOAL = [
          {
               label: 'Loss Weight',
               imageUrl: goalbody1
          },
          {
               label: 'Gain Muscle',
               imageUrl: goalbody2
          },
          {
               label: 'Get Shredded ',
               imageUrl: goalbody3
          }

     ];

     return (
          <div className='container'>
               <div className='goal-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>What is your goal?</h4>
                    <div className='grp-button d-flex flex-column align-items-center justify-content-center gap-4 mb-4'>
                         {GOAL && GOAL.map((goal, index) => {
                              return (
                                   <div className={`d-flex align-items-center  goal-card ${selectedOption === goal.label ? 'goal-card-active' : ''}`}
                                        key={index + 1}
                                        onClick={() => handleSelect(goal.label)}>
                                        <span className='w-100 fw-bold text-center'>{goal.label} </span>
                                        <img src={goal.imageUrl} alt="bodyimage" className='goalimages' />
                                   </div>
                              )
                         })}
                    </div>

               </div>
          </div>
     )
}

export default FormVegPreference