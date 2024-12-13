import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../../components/Context/DataContext';

const FormHomeWorkout = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
     const { setFormData } = useContext(DataContext);


     // Select handler for week-day
     const handleSelect = (option) => {
          setSelectedOption(option);
          setFormData(prev => ({
               ...prev,
               equipments: selectedOption,
          }));
          setTimeout(() => {
               handleNext();
          }, 500);
     };

     

     let EQUIPMENTS = [
          {
               label: 'All equipments',
               para: '( Dumbells, Kettlebells, Pullupbar, Bench press, Barbell )'
          },
          {
               label: 'Some equipments',
               para: '( Dumbells, Kettlebells, Resistance band )'
          },
          {
               label: 'No equipments',
               para: ''
          }

     ];

     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>How Much Equipment Do You Have for Your Home Workouts?</h4>
                    <div className='grp-button d-flex flex-column align-items-center justify-content-center gap-4 mb-4'>
                         {EQUIPMENTS && EQUIPMENTS.map((equipment, index) => {
                              return (
                                   <div className={`d-flex flex-column align-items-start equipment-card ${selectedOption === equipment.label ? 'equipment-card-active' : ''}`}
                                        key={index + 1}
                                        onClick={() => handleSelect(equipment.label)}>
                                        <span className='fw-bold'>{equipment.label} </span>
                                        <span className='equipment-card-para'>{equipment.para}</span>
                                   </div>
                              )
                         })}
                    </div>


                    {/* <div className='goal-submit-btn d-flex align-items-center justify-content-center mb-2'>
                         <NavigationButton handleNext={handleNext} />
                    </div> */}

               </div>
          </div>
     )
}

export default FormHomeWorkout