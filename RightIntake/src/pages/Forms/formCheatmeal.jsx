import React, { useState } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import { cheatmealimage } from '../../components/Images';

const FormCheatmeal = ({ handleNext }) => {
     const [selectedItems, setSelectedItems] = useState({ meal: [] });

     const CHEETMEAL = [
          { meal: 'Apple', imageUrl: cheatmealimage },
          { meal: 'Mango', imageUrl: cheatmealimage },
          { meal: 'Panipuri', imageUrl: cheatmealimage },
          { meal: 'Dosa', imageUrl: cheatmealimage },
          { meal: 'Burger', imageUrl: cheatmealimage },
          { meal: 'Pasta', imageUrl: cheatmealimage },
          { meal: 'Maggi', imageUrl: cheatmealimage },
     ];

     const handleSelection = (item) => {
          setSelectedItems((prevSelected) => ({
               ...prevSelected,
               meal: prevSelected.meal.includes(item)
                    ? prevSelected.meal.filter((i) => i !== item) // Remove if already selected
                    : [...prevSelected.meal, item], // Add if not selected
          }));
     };

     return (
          <div className="container cheatmeal-ui-container">
               <h4 className="cheatmeal-head fw-bold text-center">Select your cheat meal</h4>
               <p className="text-center">
                    (Select up to 5 cheat meals to treat yourself to a cheat meal and satisfy your cravings without the guilt!)
               </p>
               <div className='d-flex align-items-center justify-content-center'>

                    <div className="cheatmeal-container">
                         {CHEETMEAL &&
                              CHEETMEAL.map((item, index) => (
                                   <div
                                        className={`cheatmeal-card ${selectedItems.meal.includes(item.meal) ? 'cheatmeal-selected-item' : ''
                                             }`}
                                        key={index + 1}
                                        onClick={() => handleSelection(item.meal)}
                                   >
                                        <img src={item.imageUrl} alt="cheatmeal-image" width={250} />
                                        <p>{item.meal}</p>
                                   </div>
                              ))}
                    </div>
               </div>
               <div className="cheatmeal-button d-flex align-items-center justify-content-center mt-4 mb-5">
                    <NavigationButton handleNext={handleNext} />
               </div>
          </div>
     );
};

export default FormCheatmeal;
