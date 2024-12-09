import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';

const FormNonvegPreference = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('Sun');
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

     let WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>Which Days of the week you prefer to eat Non-Vegetarian Food</h4>
                    <div className='grp-button d-flex flex-wrap align-items-center justify-content-center gap-4 mb-4'>
                         {WEEKS && WEEKS.map((week, index) => {
                              return (
                                   <div className={`weekday-card ${selectedOption === week ? 'weekday-card-active' : ''}`}
                                        key={index + 1}
                                        onClick={() => handleSelect(week)}>
                                        <span>{week} </span>
                                   </div>
                              )
                         })}
                    </div>


                    <div className='nonveg-submit-btn d-flex align-items-center justify-content-center'>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormNonvegPreference