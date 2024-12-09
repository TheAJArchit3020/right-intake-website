import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';

const FormTrain = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');

     // select handler ...
     const handleSelect = (option) => {
          console.log(option);
          setSelectedOption(option);
     };

     const getButtonStyle = (option) => {
          return option === selectedOption ? 'selectedButton' : 'buttonTrained';
      };

     return (
          <div className='container'>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>How many times in a week do you train?</h4>
                    <button type="button" className={getButtonStyle('I haven’t trained before 😢')} onClick={() => handleSelect( 'I haven’t trained before 😢')}> I haven’t trained before 😢</button>
                    <button type="button" className={getButtonStyle('2-3 days in a week 🔥')}  onClick={() => handleSelect('2-3 days in a week 🔥')}>2-3 days in a week 🔥</button>
                    <button type="button" className={getButtonStyle('4-5 days in a week 🔥😮')} onClick={() => handleSelect('4-5 days in a week 🔥😮')}>4-5 days in a week 🔥😮</button>
                    <button type="button" className={getButtonStyle('6 days in a week 👑')} onClick={() => handleSelect('6 days in a week 👑')}>6 days in a week 👑</button>
               </div>

               <div className='d-flex align-items-center justify-content-center '>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </div>
     )
}

export default FormTrain