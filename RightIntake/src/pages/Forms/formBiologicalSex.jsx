import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
<<<<<<< HEAD

=======
import { male } from '../../components/Images';
import { female } from '../../components/Images';
>>>>>>> d7cb446216de705e258aab5c9fd96b90cb03cb02


const FormBioLoigicalSex = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');

     // select handler ...
     const handleSelect = (option) => {
          console.log(option);
          setSelectedOption(option);
     };

     const getButtonStyle = (option) => {
          return option === selectedOption ? 'selectedgenderButton' : 'genderbutton';
<<<<<<< HEAD
     };

=======
      };
        
>>>>>>> d7cb446216de705e258aab5c9fd96b90cb03cb02
     return (
          <div className='container'>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>Choose your biological sex</h4>
<<<<<<< HEAD
                    <div className='buttonContainer'>

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

=======
                    <div className='buttonContainergender'>

                    <div className='genderOption'>
                    <button type="button"
                     className={getButtonStyle('male')} 
                     onClick={() => handleSelect( 'male')}>
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
                    style={{ width: 70, 
                    height: 70,
                    filter: selectedOption === 'female' ? 'invert(100%)' : 'none'
                    }}
                    />
                    </button>
                    <h4 className='femaletext'>Female</h4>

                    </div>

                    </div>
               </div>
              
>>>>>>> d7cb446216de705e258aab5c9fd96b90cb03cb02
               <div className='d-flex align-items-center justify-content-center '>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </div>
     )
}

export default FormBioLoigicalSex