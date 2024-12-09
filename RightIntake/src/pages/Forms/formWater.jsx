import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';

const FormWater = ({ handleNext }) => {

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
                    <h4 className='text-center fw-bold'>How much water do drink in a day?</h4>
                    <button type="button" className={getButtonStyle('less than 1 litre 🥛')} onClick={() => handleSelect( 'less than 1 litre 🥛')}>less than 1 litre 🥛</button>
                    <button type="button" className={getButtonStyle('1 -2 litres a day 🥛🥛')}  onClick={() => handleSelect('1 -2 litres a day 🥛🥛')}>1 -2 litres a day 🥛🥛</button>
                    <button type="button" className={getButtonStyle('2-3 litres a day 🥛🥛🥛')} onClick={() => handleSelect('2-3 litres a day 🥛🥛🥛')}>2-3 litres a day 🥛🥛🥛</button>
                    <button type="button" className={getButtonStyle('more than 4 litres a day 🌊')} onClick={() => handleSelect('more than 4 litres a day 🌊')}>more than 4 litres a day 🌊</button>
               </div>

               <div className='d-flex align-items-center justify-content-center '>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </div>
     )
}

export default FormWater