import React, { useContext,  useState } from 'react'
import DataContext from '../../components/Context/DataContext';

const FormDietPreference = ({ handleNext }) => {

     const { setFormData } = useContext(DataContext);
     const [selectedOptions, setSelectedOptions] = useState('');

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOptions(option)
          setFormData(prev => ({
               ...prev,
               dietPreference: option,
          }));
          setTimeout(() => {
               handleNext();
          }, 500);
     };




     return (
          <div className='container'>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>What type of diet do you prefer?</h4>
                    <button type="button" className={`veg-button ${selectedOptions === 'Vegetarian' ? 'dietpreference-active' : ''}`} onClick={() => handleSelect('Vegetarian')}>Vegetarian</button>
                    <button type="button" className={`nonveg-button ${selectedOptions === 'Non-Veg' ? 'dietpreference-active' : ''}`} onClick={() => handleSelect('Non-Veg')}>Non-Veg</button>
               </div>

          </div>
     )
}
``
export default FormDietPreference