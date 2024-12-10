import React, { useContext, useState, useEffect } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';

const FormWeight = ({ handleNext }) => {
     const [selectedOption, setSelectedOption] = useState('lb');
     const [currentWeight, setCurrentWeight] = useState('');
     const [targetWeight, setTargetWeight] = useState('');
     const { setFormData } = useContext(DataContext);

     // FormData handler, will update the form data with weight values
     useEffect(() => {
          setFormData(prev => ({
               ...prev,
               currentWeight: currentWeight,
               targetWeight: targetWeight,
               weightUnit: selectedOption,
          }));
     }, [currentWeight, targetWeight, selectedOption, setFormData]);

     // Handle select unit (lb or kg)
     const handleSelect = (option) => {
          setSelectedOption(option); // Change the selected unit
     };

     // Handle weight input changes
     const handleInputChange = (e) => {
          const { name, value } = e.target;
          if (name === 'currentWeight') {
               setCurrentWeight(value);
          } else if (name === 'targetWeight') {
               setTargetWeight(value);
          }
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
                         <input
                              type="text"
                              name="currentWeight"
                              value={currentWeight}
                              onChange={handleInputChange}
                              placeholder={`_${selectedOption}`}
                         />

                         <h4 className='text-center fw-bold mt-3'>What’s your target weight?</h4>
                         <input
                              type="text"
                              name="targetWeight"
                              value={targetWeight}
                              onChange={handleInputChange}
                              placeholder={`_${selectedOption}`}
                         />
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                         <NavigationButton handleNext={handleNext} />
                    </div>
               </div>
          </div>
     );
};

export default FormWeight;
