import React, { useContext, useState } from 'react';
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import { useNavigate } from 'react-router';

const FormAboutSelf = ({ handleNext }) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const { setFormData } = useContext(DataContext);
  const navigation = useNavigate();

  const NavigationHandler = () => {
    navigation('/overallsummary')
  }

  // Set form data when any value is updated
  const updateFormData = () => {
    setFormData(prev => ({
      ...prev,
      aboutself: {
        name,
        contact: selectedCountryCode + contact,
        email,
      },
    }));
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
          <input
            id="fullName"
            className='form-control'
            type='text'
            value={name} // Bind the input value to state
            onChange={(e) => {
              setName(e.target.value);
              updateFormData(); // Update form data when name changes
            }}
          />
          <label htmlFor="email">Enter Your Email Address</label>
          <input
            id="email"
            className='form-control'
            type='email'
            value={email} // Bind the input value to state
            onChange={(e) => {
              setEmail(e.target.value);
              updateFormData(); // Update form data when email changes
            }}
          />
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
                    updateFormData(); // Update form data when country code changes
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
                    updateFormData(); // Update form data when country code changes
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
                    updateFormData(); // Update form data when country code changes
                  }}
                >
                  +91 (India)
                </a>
              </div>
            </div>
            <input
              id="contact"
              className='form-control'
              type='tel'
              value={contact} // Bind the input value to state
              onChange={(e) => {
                setContact(e.target.value);
                updateFormData(); // Update form data when contact changes
              }}
            />
          </div>
        </div>
      </div>

      <div className='d-flex align-items-center justify-content-center mb-4'>
        <NavigationButton handleNext={() => {
          NavigationHandler(), handleNext()
        }} />
      </div>
    </div>
  );
};

export default FormAboutSelf;
