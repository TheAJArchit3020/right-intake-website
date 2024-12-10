import React, { useState } from 'react';
import NavigationButton from '../../components/Button/navigationButton';

const FormHealthConditions = ({ handleNext }) => {
    const [selectedHealthConditons, setSelectedHealthConditons] = useState([]);
    const [allergies, setAllergies] = useState('');

    const healthConditionOptions = [
        { id: 1, label: 'None' },
        { id: 2, label: 'Diabetics' },
        { id: 3, label: 'PCOS' },
        { id: 4, label: 'Hyper tension' },
        { id: 5, label: 'Physical injuries' },
        { id: 6, label: 'Depression' },
        { id: 7, label: 'Sleep issues' },
        { id: 8, label: 'Anger issues' },
        { id: 9, label: 'Thyroid' },
    ];

    const handleSelection = (label) => {
        if (label === 'None') {
            setSelectedHealthConditons([label]); // If "None" is selected, clear all other selections
        } else {
            setSelectedHealthConditons((prev) => {
                const newSelections = prev.includes(label)
                    ? prev.filter((condition) => condition !== label) // Deselect the condition if already selected
                    : [...prev.filter((condition) => condition !== 'None'), label]; // Add condition and deselect "None"
                return newSelections;
            });
        }
    };

    const handleButtonClick = (condition) => {
        handleSelection(condition);
    };

    // Render the selected condition that should be moved to the top
    const renderSelectedConditions = () => {

     if (selectedHealthConditons.length === 0) {
          return (
              <div className="selectedConditionsContainer">
                  <button
                      key="None"
                      className="selectedCondition noneSelected"
                      onClick={() => handleSelection('None')}
                  >
                      None
                  </button>
              </div>
          );
      }
      
        return (
            <div className="selectedConditionsContainer">
                {selectedHealthConditons.map((condition) => (
                    <button
                        key={condition}
                        className={`selectedCondition ${condition === 'None' ? 'noneSelected' : ''}`}
                        onClick={() => handleSelection(condition)}
                    >
                        {condition}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className='container'>
            <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
                <h4 className='text-center fw-bold'>Any Known Health Conditions and Food Allergy?</h4>

                <div className='healthConditionConatiner'>
                    <h4 className='headerText'>Select any following health condition</h4>

                    {/* Render the selected conditions (buttons) above the list */}
                    {renderSelectedConditions()}

                    <div className='buttonContainer'>
                        {healthConditionOptions
                            .filter((option) => !selectedHealthConditons.includes(option.label))
                            .map((option) => (
                                <button
                                    key={option.id}
                                    className={`button ${selectedHealthConditons.includes(option.label) ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick(option.label)}
                                >
                                    {option.label}
                                </button>
                            ))}
                    </div>
                </div>

                <div className='allergyConatiner'>
                    <h4 className='headerText'>Do you have any allergies or intolerances to specific foods we should be aware of?</h4>
                    <input
                        className="allergyInput"
                        placeholder="Enter your allergies or intolerances"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)} // Store allergies input
                    />
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-center navbutton'>
                <NavigationButton handleNext={handleNext} /> {/* Navigate to the next screen */}
            </div>
        </div>
    );
};

export default FormHealthConditions;
