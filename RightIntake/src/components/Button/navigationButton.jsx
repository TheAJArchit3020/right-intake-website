import React from 'react'
import { Button } from 'react-bootstrap'
import { rightarrow } from '../Images'

const NavigationButton = ({ handleNext }) => {
     return (
          <button className='btn-continue d-flex align-items-center justify-content-center text-white gap-3 fw-bold' onClick={() => handleNext()}>
               <span>Continue</span>
               <img src={rightarrow} alt="rightarrow" width={20} />
          </button>
     )
}

export default NavigationButton