import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';

const FormDietPreference = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);
     };
     return (
          <div className='container'>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>What type of diet do you prefer?</h4>
                    <button type="button" className='veg-button' onClick={() => handleSelect('Vegetarian')}>Vegetarian</button>
                    <button type="button" className='nonveg-button' onClick={() => handleSelect('Non-Vegetarian')}>Non-Vegetarian</button>
               </div>

               <div className='d-flex align-items-center justify-content-center '>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </div>
     )
}
``
export default FormDietPreference