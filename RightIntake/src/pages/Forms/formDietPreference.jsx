import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';

const FormDietPreference = ({ handleNext }) => {

     const { setFormData } = useContext(DataContext);

     // select handler ...
     const handleSelect = (option) => {
          setFormData(prev => ({
               ...prev,
               dietPreference: option,
          }));
          handleNext();
     };




     return (
          <div className='container'>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>What type of diet do you prefer?</h4>
                    <button type="button" className='veg-button' onClick={() => handleSelect('Vegetarian')}>Vegetarian</button>
                    <button type="button" className='nonveg-button' onClick={() => handleSelect('Non-Veg')}>Non-Veg</button>
               </div>

          </div>
     )
}
``
export default FormDietPreference