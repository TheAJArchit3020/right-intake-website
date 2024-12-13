import React, { useContext, useState } from 'react'
import { cryemoji } from '../../components/Images';
import { fireemoji } from '../../components/Images';
import { shockemoji } from '../../components/Images';
import { crownemoji } from '../../components/Images';
import DataContext from '../../components/Context/DataContext';

const FormTrain = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
     const { setFormData } = useContext(DataContext);

     const emojiMapping = {
          '😢': cryemoji,
          '🔥': fireemoji,
          '😮': shockemoji,
          '👑': crownemoji
     };

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);
          setFormData(prev => ({
               ...prev,
               train: option,
          }));
          setTimeout(() => {
               handleNext();
          }, 500);
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
                    <h4 className='text-center fw-bold'>How many times in a week do you train?</h4>
                    <button type="button" className={getButtonStyle('I haven’t trained before 😢')} onClick={() => handleSelect('I haven’t trained before 😢')}>   {renderWithEmojiImages('I haven’t trained before 😢')}</button>
                    <button type="button" className={getButtonStyle('2-3 days in a week 🔥 ')} onClick={() => handleSelect('2-3 days in a week 🔥 ')}>{renderWithEmojiImages('2-3 days in a week 🔥')}</button>
                    <button type="button" className={getButtonStyle('4-5 days in a week 🔥 😮')} onClick={() => handleSelect('4-5 days in a week 🔥 😮')}>{renderWithEmojiImages('4-5 days in a week 🔥 😮')}</button>
                    <button type="button" className={getButtonStyle('6 days in a week 👑')} onClick={() => handleSelect('6 days in a week 👑')}> {renderWithEmojiImages('6 days in a week 👑')}</button>
               </div>
          </div>
     )
}

export default FormTrain