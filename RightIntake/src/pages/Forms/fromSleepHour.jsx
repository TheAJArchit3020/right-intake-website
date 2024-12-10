import React, { useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import { batemoji } from '../../components/Images';
import { catemoji } from '../../components/Images';
import { humanemoji } from '../../components/Images';
import { sunemoji } from '../../components/Images';
const FormSleepHour = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
    
     
     const emojiMapping = {
          '🦇': batemoji,
          '👩‍🦰': humanemoji,
          '🌞': sunemoji,
          '🐱': catemoji
     };

     // select handler ...
     const handleSelect = (option) => {
          console.log(option);
          setSelectedOption(option);

          setTimeout(()=>{
               handleNext();
          },1000);          
     };

     const getButtonStyle = (option) => {
          return option === selectedOption ? 'selectedButton' : 'buttonTrained';
      };
      const renderWithEmojiImages = (text) => {
          return text.split(' ').map((part, index) => {
            // Check if the part is an emoji, and replace it with the respective image
            if (emojiMapping[part]) {
              return (
                <img
                  key={index}
                  src={emojiMapping[part]}
                  alt={part}
                  style={{ width: 20, height: 20, marginLeft: 5 }}
                />
              );
            }
            return <span key={index}>{part} </span>; // Return the part if not an emoji
          });
        };
     return (
          <div className='container'>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='text-center fw-bold'>What’s your average sleep hour?</h4>
                    <button type="button" className={getButtonStyle('4-5 hours 🦇')} onClick={() => handleSelect( '4-5 hours 🦇')}> {renderWithEmojiImages('4-5 hours 🦇')}</button>
                    <button type="button" className={getButtonStyle('5-6 hours 👩‍🦰')}  onClick={() => handleSelect('5-6 hours 👩‍🦰')}>{renderWithEmojiImages('5-6 hours 👩‍🦰')}</button>
                    <button type="button" className={getButtonStyle('7-8 hours  🌞')} onClick={() => handleSelect('7-8 hours  🌞')}>{renderWithEmojiImages('7-8 hours  🌞')}</button>
                    <button type="button" className={getButtonStyle('more than 8 hours 🐱')} onClick={() => handleSelect('more than 8 hours 🐱')}>{renderWithEmojiImages('more than 8 hours 🐱')}</button>
               </div>

             
          </div>
     )
}

export default FormSleepHour