import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';

const FormWeight = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('lb');

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);
     };
     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <div className='grp-button d-flex align-items-center justify-content-center mb-4'>
                         <p
                              className={`para1 ${selectedOption === 'lb' ? 'active' : ''}`}
                              onClick={() => handleSelect('lb')}
                         >
                              lb
                         </p>
                         <p
                              className={`para2 ${selectedOption === 'kg' ? 'active' : ''}`}
                              onClick={() => handleSelect('kg')}
                         >
                              kg
                         </p>
                    </div>

                    <div className='form1 d-grid align-items-center justify-content-center'>
                         <h4 className='text-center fw-bold'>What’s your current weight?</h4>
                         <input type="text" name={selectedOption} placeholder={`_${selectedOption}`} />

                         <h4 className='text-center fw-bold mt-3'>What’s your target weight?</h4>
                         <input type="text" name={selectedOption} placeholder={`_${selectedOption}`} />

                    </div>
                    <div className='d-flex align-items-center justify-content-center '>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormWeight