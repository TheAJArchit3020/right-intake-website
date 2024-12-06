import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';

const FormHeight = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('Cm');

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);
     };
     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <h4 className='text-center fw-bold mb-4'>What’s your height ?</h4>
                    <div className='grp-button d-flex align-items-center justify-content-center mb-4'>
                         <p
                              className={`para1 ${selectedOption === 'Cm' ? 'active' : ''}`}
                              onClick={() => handleSelect('Cm')}
                         >
                              Cm
                         </p>
                         <p
                              className={`para2 ${selectedOption === 'Feet' ? 'active' : ''}`}
                              onClick={() => handleSelect('Feet')}
                         >
                              Feet
                         </p>
                    </div>

                    <div className='form d-flex align-items-center justify-content-center gap-4'>
                         {selectedOption === 'Cm' && <input type="text" name={selectedOption} placeholder={`_${selectedOption}`} />}
                         {selectedOption === 'Feet' && (
                              <>
                                   <input type="text" name={selectedOption} placeholder="_ft" />
                                   <input type="text" name={selectedOption} placeholder="_in" />
                              </>
                         )}
                    </div>
                    <div className='d-flex align-items-center justify-content-center '>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormHeight