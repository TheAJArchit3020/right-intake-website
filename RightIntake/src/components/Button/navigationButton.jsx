import React from 'react'
import { Button } from 'react-bootstrap'
import { rightarrow } from '../Images'

const NavigationButton = ({ handleNext,isActive }) => {
     const getButtonStyle=(isActive)=>{
          return isActive ? 'letsGoButton' : 'deactivatedbutton';
       };
     return (
          <button disabled={!isActive} className={getButtonStyle(isActive)} onClick={() => handleNext()}>
               <span>Continue</span>
               <img src={rightarrow} alt="rightarrow" width={20} />
          </button>
     )
}

export default NavigationButton