import React, { useContext, useEffect, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';

const FormHeight = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('Cm');
     const [heightValue, setHeightValue] = useState('');
     const [feetValue, setFeetValue] = useState('');
     const [inchValue, setInchValue] = useState('');
     const { setFormData } = useContext(DataContext);

     // FormData handler, will update the form data with height values
     useEffect(() => {
          setFormData(prev => ({
               ...prev,
               height: selectedOption === 'Cm' ? heightValue : `${feetValue}'${inchValue}"`,
          }));
     }, [heightValue, feetValue, inchValue, selectedOption, setFormData]);

     // Handle height input changes based on the selected option
     const handleHeightChange = (e) => {
          if (selectedOption === 'Cm') {
               setHeightValue(e.target.value);
          } else {
               // Update feet and inch values
               const name = e.target.name;
               if (name === 'Feet') {
                    setFeetValue(e.target.value);
               } else if (name === 'Inch') {
                    setInchValue(e.target.value);
               }
          }
     };

     // Select handler for Cm/Feet
     const handleSelect = (option) => {
          setSelectedOption(option);
     };


     return (
          <div>
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
                         {selectedOption === 'Cm' && (
                              <input
                                   type="number"
                                   name={selectedOption}
                                   value={heightValue}
                                   onChange={handleHeightChange}
                                   placeholder='_cm'
                              />
                         )}
                         {selectedOption === 'Feet' && (
                              <>
                                   <input
                                        type="number"
                                        name="Feet"
                                        value={feetValue}
                                        onChange={handleHeightChange}
                                        placeholder="_ft"
                                   />
                                   <input
                                        type="number"
                                        name="Inch"
                                        value={inchValue}
                                        onChange={handleHeightChange}
                                        placeholder="_in"
                                   />
                              </>
                         )}
                    </div>
                    <div className='mobile-button d-flex align-items-center'>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormHeight