import React, { useContext, useState } from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import "./responsive.css"

const FormOccupation = ({ handleNext }) => {

     const [selectedOption, setSelectedOption] = useState('');
     const { setFormData } = useContext(DataContext);

     // select handler ...
     const handleSelect = (option) => {
          setSelectedOption(option);
          setFormData(prev => ({
               ...prev,
               occupation: option,
          }));
     };

     const getStyle = (option) => {
          return selectedOption === option ? 'selectedButton' : 'occupationbutton';
     };
     return (
          <>
           <div className='mobile'>
               <div className='d-flex flex-column align-items-center justify-content-center gap-3 mb-5'>                  
                    <h4 className='text-center fw-bold'>What is Your Occupation?</h4>
                    <button type="button" className={getStyle('Student')} onClick={() => handleSelect('Student')}>Student</button>
                    <button type="button" className={getStyle('Home-maker')} onClick={() => handleSelect('Home-maker')}>Home maker</button>
                    <button type="button" className={getStyle('Medical professional')} onClick={() => handleSelect('Medical professional')}>Medical professional</button>
                    <button type="button" className={getStyle('It-Professional')} onClick={() => handleSelect('It-Professional')}>It Professional</button>
                    <button type="button" className={getStyle('CEO’s/Business owners')} onClick={() => handleSelect('CEO’s/Business owners')}>CEO’s/Business owners</button>
                    <button type="button" className={getStyle('Finance and Banking')} onClick={() => handleSelect('Finance and Banking')}>Finance and Banking</button>
                    <div className="othercontainer">
                         <h4 className="textTag" >Others</h4>
                         <input className="inputContainer"
                              onFocus={() => handleSelect('Others')}
                              onChange={(e) => handleSelect(e.target.value)}
                              placeholder="Enter your text"
                         />
                    </div>
                    </div>
                    </div>
               <div className='mobile-button d-flex align-items-center'>
                    <NavigationButton handleNext={handleNext} />
               </div>
          </>
     )
}
``
export default FormOccupation