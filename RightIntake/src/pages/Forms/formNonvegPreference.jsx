import React, { useContext, useEffect, useState } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';

const FormNonvegPreference = ({ handleNext }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const { setFormData } = useContext(DataContext);

  // Update formData whenever selectedOptions changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      weekdays: selectedOptions,
    }));
  }, [selectedOptions, setFormData]);

  // Toggle selection for a day
  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((day) => day !== option) // Remove if already selected
        : [...prev, option] // Add if not selected
    );
    
  };

  const WEEKS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className='container'>
      <div className='height-ui-container'>
        <h4 className='text-center fw-bold mb-4'>
          Which Days of the week you prefer to eat Non-Vegetarian Food
        </h4>
        <div className='grp-button d-flex flex-wrap align-items-center justify-content-center gap-4 mb-4'>
          {WEEKS.map((week, index) => (
            <div
              className={`weekday-card ${
                selectedOptions.includes(week) ? 'weekday-card-active' : ''
              }`}
              key={index}
              onClick={() => handleSelect(week)}
            >
              <span>{week}</span>
            </div>
          ))}
        </div>

        <div className='nonveg-submit-btn d-flex align-items-center justify-content-center'>
          <NavigationButton handleNext={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default FormNonvegPreference;
