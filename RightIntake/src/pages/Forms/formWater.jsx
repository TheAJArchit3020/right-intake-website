import React, { useContext, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import { waterglassemoji } from '../../components/Images';
import { wavemoji } from '../../components/Images';
import DataContext from '../../components/Context/DataContext';
const FormWater = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
     const { setFormData } = useContext(DataContext);

     const emojiMapping = {
          '🥛': waterglassemoji,
          '🌊': wavemoji,
     };

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);

          setFormData(prev => ({
               ...prev,
               waterdrink: option,
          }));

          setTimeout(() => {
               handleNext();
          }, 500);
     };

     const getButtonStyle = (option) => {
          return option === selectedOption ? 'selectedButton' : 'buttonTrained';
     };

     const renderWithEmojiImages = (text) => {
          return text.split(/(\p{Emoji_Presentation}+)/gu).map((part, index) => {
               // Check if the part is an emoji, and replace it with the respective image
               if (emojiMapping[part]) {
                    return (
                         <img
                              key={`${part}-${index}`} // Ensure a unique key
                              src={emojiMapping[part]}
                              alt={part}
                              style={{ width: 20, height: 20, marginLeft: 5 }}
                         />
                    );
               }
               return <span key={`${part}-${index}`}>{part} </span>; // Handle non-emoji parts
          });
     };


     return (
          <>
               <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h4 className='water-intake-heading text-center fw-bold'>How much water do drink in a day?</h4>
                    <button type="button" className={getButtonStyle('less than 1 litre 🥛')}
                         onClick={() => handleSelect('less than 1 litre 🥛')}>
                         {renderWithEmojiImages('less than 1 litre 🥛')}
                    </button>

                    <button type="button" className={getButtonStyle('1 -2 litres a day 🥛🥛')}
                         onClick={() => handleSelect('1 -2 litres a day 🥛🥛')}>
                         1 -2 litres a day
                         <img src={waterglassemoji} alt="water glass" style={{ width: 20, height: 20, marginLeft: 5 }} />
                         <img src={waterglassemoji} alt="water glass" style={{ width: 20, height: 20, marginLeft: 5 }} />
                    </button>

                    <button type="button" className={getButtonStyle('2-3 litres a day 🥛🥛🥛')}
                         onClick={() => handleSelect('2-3 litres a day 🥛🥛🥛')}>
                         2-3 litres a day
                         <img src={waterglassemoji} alt="water glass" style={{ width: 20, height: 20, marginLeft: 5 }} />
                         <img src={waterglassemoji} alt="water glass" style={{ width: 20, height: 20, marginLeft: 5 }} />
                         <img src={waterglassemoji} alt="water glass" style={{ width: 20, height: 20, marginLeft: 5 }} />
                    </button>

                    <button type="button" className={getButtonStyle('more than 4 litres a day 🌊')}
                         onClick={() => handleSelect('more than 4 litres a day 🌊')}>
                         {renderWithEmojiImages('more than 4 litres a day 🌊')}
                    </button>
               </div>


          </>
     )
}

export default FormWater