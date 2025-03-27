import React, { useContext, useState } from "react";
import "./form.css";
import FormLanding from "./FormLanding/formLanding";
import FormHeight from "./formHeight";
import { ProgressBar } from "react-bootstrap";
import { previcon } from "../../components/Images";
import FormWeight from "./formWeight";
import FormDietPreference from "./formDietPreference";
import DataContext from "../../components/Context/DataContext";
import FormLevelFitness from "./formLevelFitness";
import FormNonvegPreference from "./formNonvegPreference";
import FormVegPreference from "./formVegPreference";
import FormWorkout from "./formWorkout";
import FormHomeWorkout from "./formHomeWorkout";
import FormTrain from "./formTrain";
import FormSleepHour from "./fromSleepHour";
import FormWater from "./formWater";
import FormAboutSelf from "./formAboutSelf";
import FormBioLoigicalSex from "./formBiologicalSex";
import FormHealthConditions from "./formHealthConditions";
import FormOccupation from "./formOccupation";
import FormFoodPreference from "./formFoodPreference";
import FormBodyFat from "./formBodyFat";
import FormCheatmeal from "./formCheatmeal";
import FormLocationRequest from "./FormLocationRequest/formLocationRequest";
import { useNavigate } from "react-router";

const FormLayout = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const { isLocationData, formData } = useContext(DataContext);

  // toggle progress bar ...
  const showprogresshandler = () => {
    setIsShown(true);
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < components.length - 1) {
      const nextStep = components[currentStep + 1].path;
      navigate(`/dietplanform/${nextStep}`);
      setCurrentStep(currentStep + 1);
      setProgress(((currentStep + 1) / (components.length - 1)) * 100);
      console.log(progress);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      const prevStep = components[currentStep - 1].path;
      setCurrentStep(currentStep - 1);
      navigate(`/dietplanform/${prevStep}`);
      setProgress(((currentStep - 1) / (components.length - 1)) * 100);
    }
  };

  const components = [
    {
      path: "landing",
      component: <FormLanding showprogresshandler={showprogresshandler} />,
    },
    ...(isLocationData === false
      ? [
          {
            path: "location-request",
            component: <FormLocationRequest handleNext={handleNext} />,
          },
        ]
      : []),
    {
      path: "biological-sex",
      component: <FormBioLoigicalSex handleNext={handleNext} />,
    },
    {
      path: "occupation",
      component: <FormOccupation handleNext={handleNext} />,
    },
    { path: "height", component: <FormHeight handleNext={handleNext} /> },
    { path: "weight", component: <FormWeight handleNext={handleNext} /> },
    {
      path: "fitness-level",
      component: <FormLevelFitness handleNext={handleNext} />,
    },
    {
      path: "diet-preference",
      component: <FormDietPreference handleNext={handleNext} />,
    },
    ...(formData?.dietType === "Non-Veg"
      ? [
          {
            path: "non-veg-preference",
            component: <FormNonvegPreference handleNext={handleNext} />,
          },
        ]
      : []),
    {
      path: "veg-preference",
      component: <FormVegPreference handleNext={handleNext} />,
    },
    { path: "workout", component: <FormWorkout handleNext={handleNext} /> },
    ...(formData?.workoutPreference === "home workout"
      ? [
          {
            path: "home-workout",
            component: <FormHomeWorkout handleNext={handleNext} />,
          },
        ]
      : []),
    { path: "body-fat", component: <FormBodyFat handleNext={handleNext} /> },
    { path: "train", component: <FormTrain handleNext={handleNext} /> },
    {
      path: "health-conditions",
      component: <FormHealthConditions handleNext={handleNext} />,
    },
    {
      path: "food-preference",
      component: <FormFoodPreference handleNext={handleNext} />,
    },
    { path: "cheatmeal", component: <FormCheatmeal handleNext={handleNext} /> },
    {
      path: "sleep-hours",
      component: <FormSleepHour handleNext={handleNext} />,
    },
    { path: "water-intake", component: <FormWater handleNext={handleNext} /> },
    {
      path: "about-self",
      component: <FormAboutSelf handleNext={handleNext} />,
    },
    // <FormOverallSummary handleNext={handleNext} />,
  ];

  return (
    <>

      {/* Progress bar */}
      {isShown && (
        <div className="container my-4 d-flex align-items-center gap-2">
          <img
            className="previous-btn"
            src={previcon}
            alt="previcon"
            width={20}
            onClick={handlePrev}
          />
          <ProgressBar variant="success" now={progress} />
        </div>
      )}

      {/* Display current component */}
      <div>
        {console.log(currentStep)}
        {components[currentStep].component}
      </div>
    </>
  );
};

export default FormLayout;
