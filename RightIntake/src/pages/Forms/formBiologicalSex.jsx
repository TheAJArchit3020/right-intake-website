import React, { useContext, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import { male } from '../../components/Images';
import { female } from '../../components/Images';
import DataContext from '../../components/Context/DataContext'; 
import "./responsive.css"


const FormBioLoigicalSex = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
     const { setFormData } = useContext(DataContext);

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);
          setFormData(prev => ({
               ...prev,
               sex: option,
          }));
     };

     const getButtonStyle = (option) => {
          return option === selectedOption ? 'selectedgenderButton' : 'genderbutton';
     };

     return (
          <>

               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>Choose your biological sex</h4>
                    <div className='buttonContainergender'>

                         <div className='genderOption'>
                              <button type="button"
                                   className={getButtonStyle('male')}
                                   onClick={() => handleSelect('male')}>
                                   <img src={male}
                                        style={{
                                             width: 70,
                                             height: 70,
                                             filter: selectedOption === 'male' ? 'invert(100%)' : 'none'
                                        }}
                                   />
                              </button>
                              <h4 className='maletext'>Male</h4>
                         </div>

                         <div className='genderOption'>
                              <button type="button"
                                   className={getButtonStyle('female')}
                                   onClick={() => handleSelect('female')}>
                                   <img src={female}
                                        style={{
                                             width: 70,
                                             height: 70,
                                             filter: selectedOption === 'female' ? 'invert(100%)' : 'none'
                                        }}
                                   />
                              </button>
                              <h4 className='femaletext'>Female</h4>

                         </div>

                    </div>
               </div>

               <div className='mobile-button d-flex align-items-center'>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </>
     )
}

export default FormBioLoigicalSex