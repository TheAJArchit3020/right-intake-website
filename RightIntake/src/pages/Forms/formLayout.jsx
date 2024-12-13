import React, { useContext, useState } from 'react';
import "./form.css";
import FormLanding from './formLanding';
import NavbarComponent from '../../components/navbarComponent/navbar';
import FormHeight from './formHeight';
import { ProgressBar } from 'react-bootstrap';
import { previcon } from '../../components/Images';
import FormWeight from './formWeight';
import FormDietPreference from './formDietPreference';
import DataContext from '../../components/Context/DataContext';
import FormBMI from './formBMI';
import FormLevelFitness from './formLevelFitness';
import FormNonvegPreference from './formNonvegPreference';
import FormVegPreference from './formVegPreference';
import FormWorkout from './formWorkout';
import FormHomeWorkout from './formHomeWorkout';
import FormTrain from './formTrain';
import FormSleepHour from './fromSleepHour';
import FormWater from './formWater';
import FormAboutSelf from './formAboutSelf';
import FormBioLoigicalSex from './formBiologicalSex';
import FormHealthConditions from './formHealthConditions';
import FormOccupation from './formOccupation';
import FormFoodPreference from './formFoodPreference';
import FormBodyFat from './formBodyFat';
import FormBodyfatInsight from './formBodyfatInsight';
import FormCheatmeal from './formCheatmeal';
import FormOverallSummary from './formOverallSummary';

const FormLayout = () => {
     const [progress, setProgress] = useState(0);
     const [currentStep, setCurrentStep] = useState(0);
     const [isShown, setIsShown] = useState(false)
     const { formData } = useContext(DataContext);


     // toggle progress bar ...
     const showprogresshandler = () => {
          setIsShown(true)
          handleNext()
     }

     const handleNext = () => {
          console.log({ formData })
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
          <FormBioLoigicalSex handleNext={handleNext} />,
          <FormOccupation handleNext={handleNext} />,
          <FormHeight handleNext={handleNext} />,
          <FormWeight handleNext={handleNext} />,
          <FormBMI handleNext={handleNext} />,
          <FormLevelFitness handleNext={handleNext} />,
          <FormDietPreference handleNext={handleNext} />,

          ...(formData?.dietPreference === 'Non-Veg'
               ? [<FormNonvegPreference handleNext={handleNext} />]
               : []),

          <FormVegPreference handleNext={handleNext} />,
          <FormWorkout handleNext={handleNext} />,

          ...(formData?.workout === 'HOME WORKOUT'
               ? [<FormHomeWorkout handleNext={handleNext} />]
               : []),

          <FormBodyFat handleNext={handleNext} />,
          <FormBodyfatInsight handleNext={handleNext} />,
          <FormTrain handleNext={handleNext} />,
          <FormHealthConditions handleNext={handleNext} />,
          <FormFoodPreference handleNext={handleNext} />,
          <FormCheatmeal handleNext={handleNext} />,
          <FormSleepHour handleNext={handleNext} />,
          <FormWater handleNext={handleNext} />,
          <FormAboutSelf handleNext={handleNext} />,
          <FormOverallSummary handleNext={handleNext} />,
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
               <div>
                    {components[currentStep]}
               </div>


          </>
     );
};

export default FormLayout;
