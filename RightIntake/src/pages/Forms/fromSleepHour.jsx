import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';

const FormSleepHour = ({ handleNext }) => {

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
                    <h4 className='text-center fw-bold'>What’s your average sleep hour?</h4>
                    <button type="button" className={getButtonStyle('4-5 hours 🦇')} onClick={() => handleSelect( '4-5 hours 🦇')}> 4-5 hours 🦇</button>
                    <button type="button" className={getButtonStyle('5-6 hours 👩‍🦰')}  onClick={() => handleSelect('5-6 hours 👩‍🦰')}>5-6 hours 👩‍🦰</button>
                    <button type="button" className={getButtonStyle('7-8 hours  🌞')} onClick={() => handleSelect('7-8 hours  🌞')}>7-8 hours 🌞</button>
                    <button type="button" className={getButtonStyle('more than 8 hours 🐱')} onClick={() => handleSelect('more than 8 hours 🐱')}>more than 8 hours 🐱</button>
               </div>

               <div className='d-flex align-items-center justify-content-center '>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </div>
     )
}

export default FormSleepHour