import React, { useState } from 'react';
import "./form.css";
import FormLanding from './formLanding';
import NavbarComponent from '../../components/navbarComponent/navbar';
import FormHeight from './formHeight';
import { Button, ProgressBar } from 'react-bootstrap';
import { previcon } from '../../components/Images';
import FormWeight from './formWeight';
import FormDietPreference from './formDietPreference';

const FormLayout = () => {
     const [progress, setProgress] = useState(0); // Progress percentage
     const [currentStep, setCurrentStep] = useState(0); // Tracks the current visible component
     const [isShown, setIsShown] = useState(false)


     // toggle progress bar ...
     const showprogresshandler = () => {
          setIsShown(true)
          handleNext()
     }

     const handleNext = () => {
          if (currentStep < components.length - 1) {
               setCurrentStep(currentStep + 1);
               setProgress(((currentStep + 1) / (components.length - 1)) * 100);
          }
     };

     const handlePrev = () => {
          if (currentStep > 0) {
               setCurrentStep(currentStep - 1);
               setProgress((currentStep - 1) / (components.length - 1) * 100);
          }
     };

     const components = [
          <FormLanding showprogresshandler={showprogresshandler} />,
          <FormHeight handleNext={handleNext} />,
          <FormWeight handleNext={handleNext} />,
          <FormDietPreference handleNext={handleNext} />,
     ];

    
     return (
          <>
               <NavbarComponent />

               {/* Progress bar */}
               {isShown && <div className="container my-4 d-flex align-items-center gap-2">
                    <img src={previcon} alt="previcon" width={20} onClick={handlePrev} />
                    <ProgressBar variant="success" now={progress} />
               </div>}

               {/* Display current component */}
               <div className="container">
                    {components[currentStep]}
               </div>

               
          </>
     );
};

export default FormLayout;
