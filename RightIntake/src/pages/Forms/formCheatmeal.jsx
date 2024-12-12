import React, { useContext, useState, useEffect } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import { cheatmealimage } from '../../components/Images';
import DataContext from '../../components/Context/DataContext';

const FormCheatmeal = ({ handleNext }) => {
     const [selectedItems, setSelectedItems] = useState({ meal: [] });
     const [validationError, setValidationError] = useState(false);
     const { setFormData } = useContext(DataContext);

     const CHEETMEAL = [
          { meal: 'Apple', imageUrl: cheatmealimage },
          { meal: 'Mango', imageUrl: cheatmealimage },
          { meal: 'Panipuri', imageUrl: cheatmealimage },
          { meal: 'Dosa', imageUrl: cheatmealimage },
          { meal: 'Burger', imageUrl: cheatmealimage },
          { meal: 'Pasta', imageUrl: cheatmealimage },
          { meal: 'Maggi', imageUrl: cheatmealimage },
          { meal: 'Maggi', imageUrl: cheatmealimage },
          { meal: 'Maggi', imageUrl: cheatmealimage },
          { meal: 'Maggi', imageUrl: cheatmealimage },
          { meal: 'Maggi', imageUrl: cheatmealimage },
     ];

     useEffect(() => {
          // Update formData outside of render
          if (selectedItems.meal.length > 0) {
               setFormData((prev) => ({
                    ...prev,
                    meal: selectedItems.meal,
               }));
          }
     }, [selectedItems, setFormData]); // Run effect when selectedItems changes

     const handleSelection = (item) => {
          setSelectedItems((prevSelected) => {
               const updatedMealSelection = prevSelected.meal.includes(item)
                    ? prevSelected.meal.filter((i) => i !== item) // Remove if already selected
                    : [...prevSelected.meal, item]; // Add if not selected

               return { meal: updatedMealSelection };
          });

          // Clear validation error when an item is selected
          if (validationError) {
               setValidationError(false);
          }
     };

     const validateSelections = () => {
          if (selectedItems.meal.length === 0) {
               setValidationError(true);
               return false;
          }
          return true;
     };

     return (
          <div className='cheatmeal-content'>
               <h4 className="cheatmeal-head fw-bold text-center">Select your cheat meal</h4>
               <p className="text-center">
                    (Select up to 5 cheat meals to treat yourself to a cheat meal and satisfy your cravings without the guilt!)
               </p>
               <div className='d-flex align-items-center justify-content-center'>
                    <div className="cheatmeal-container">
                         {CHEETMEAL.map((item, index) => (
                              <div
                                   className={`cheatmeal-card ${selectedItems.meal.includes(item.meal) ? 'cheatmeal-selected-item' : ''}`}
                                   key={index}
                                   onClick={() => handleSelection(item.meal)}
                              >
                                   <img src={item.imageUrl} alt="cheatmeal-image" width={230} />
                                   <p>{item.meal}</p>
                              </div>
                         ))}
                    </div>
               </div>

               {validationError && (
                    <p className="validation-error text-center">Please select at least one cheat meal.</p>
               )}

               <div className="mobile-button d-flex align-items-center mt-4">
                    <NavigationButton
                         handleNext={() => {
                              if (validateSelections()) {
                                   handleNext();
                              }
                         }}
                    />
               </div>
          </div>
     );
};

export default FormCheatmeal;
