import React, { useState } from 'react';
import NavigationButton from '../../components/Button/navigationButton';

const FormAboutSelf = ({ handleNext }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (option) => {
    console.log(option);
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
  };

  return (
    <div className='container'>
      <div className='diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3'>
        <h4 className='text-center fw-bold'>Let us know about yourself?</h4>
        {/* form */}
        <div className='w-100 max-w-400'>
          <label htmlFor="fullName">Enter Your Full Name</label>
          <input id="fullName" className='form-control' type='text' />
          <label htmlFor="email">Enter Your Email Address</label>
          <input id="email" className='form-control' type='email' />
          <label htmlFor="contact">Enter Your Mobile Number</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <button
                className='btn dropdown-toggle'
                type='button'
                onClick={toggleDropdown} 
              >
                {selectedCountryCode || '+91'}
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                <a
                  className='dropdown-item'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCountryCode('+1');
                    setIsDropdownOpen(false); 
                  }}
                >
                  +1 (USA)
                </a>
                <a
                  className='dropdown-item'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCountryCode('+44');
                    setIsDropdownOpen(false); 
                  }}
                >
                  +44 (UK)
                </a>
                <a
                  className='dropdown-item'
                  href='#'
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedCountryCode('+91');
                    setIsDropdownOpen(false);
                  }}
                >
                  +91 (India)
                </a>
              </div>
            </div>
            <input id="contact" className='form-control' type='tel' />
          </div>
        </div>
      </div>
      
      <div className='d-flex align-items-center justify-content-center'>
        <NavigationButton handleNext={handleNext} />
      </div>
    </div>
  );
};

export default FormAboutSelf;
