import React, { useContext, useEffect, useState } from "react";
import "./form.css";
import NavigationButton from "../../components/Button/navigationButton";
import DataContext from "../../components/Context/DataContext";
import axios from "axios";
import { getfoodpreferences } from "../../components/apis";
import { logEvent } from "../../Utilities/analytics";
const FormFoodPreference = ({ handleNext }) => {
  const { foodPreferenceData, setFormData } = useContext(DataContext);
  const [foodPreferences, setFoodPreferences] = useState({});
  const [selectedItems, setSelectedItems] = useState({
    veggies: [],
    carbs: [],
    meat: [],
    fruits_berries: [],
  });
  const [validationErrors, setValidationErrors] = useState({
    veggies: false,
    carbs: false,
    fruits_berries: false,
  });

  const isFormValid =
    selectedItems.veggies.length > 0 &&
    selectedItems.carbs.length > 0 &&
    selectedItems.fruits_berries.length > 0;
  const handleSelection = (category, item) => {
    setSelectedItems((prevSelected) => {
      const updatedSelected = {
        ...prevSelected,
        [category]: prevSelected[category].includes(item)
          ? prevSelected[category].filter((i) => i !== item)
          : [...prevSelected[category], item],
      };
      setFoodPreferences({
        ...foodPreferences,
        [category]: updatedSelected[category],
      });

      return updatedSelected;
    });

    if (validationErrors[category]) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [category]: false,
      }));
    }
  };

  const validateSelections = () => {
    const errors = {
      veggies: selectedItems.veggies.length === 0,
      carbs: selectedItems.carbs.length === 0,
      fruits_berries: selectedItems.fruits_berries.length === 0,
    };

    setValidationErrors(errors);

    return !Object.values(errors).some((error) => error);
  };

  return (
    <div className="foodprefer-ui-container">
      <h4 className="foodprefer-head fw-bold text-center">
        What is your food preference?
      </h4>

      <div className="vegg-div">
        {foodPreferenceData && (
          <>
            {foodPreferenceData.veggies && (
              <div>
                <h4 className="vegg-title fw-bold">
                  Veggies &nbsp;
                  <span className="fw-normal vegg-span">
                    (Select at least any one from the given items)
                  </span>
                </h4>
                <div className="foodprefer-item-list">
                  {foodPreferenceData.veggies.map((veggie, index) => (
                    <span
                      className={`foodprefer-item-span ${
                        selectedItems.veggies.includes(veggie)
                          ? "selected-item"
                          : ""
                      }`}
                      key={index}
                      onClick={() => handleSelection("veggies", veggie)}
                    >
                      {veggie}
                    </span>
                  ))}
                </div>
                {validationErrors.veggies && (
                  <p className="validation-error">
                    Please select at least one veggie.
                  </p>
                )}
              </div>
            )}

            {foodPreferenceData.carbs && (
              <div>
                <h4 className="vegg-title fw-bold">
                  Carbs &nbsp;
                  <span className="fw-normal vegg-span">
                    (Select at least any one from the given items)
                  </span>
                </h4>
                <div className="foodprefer-item-list">
                  {foodPreferenceData.carbs.map((carb, index) => (
                    <span
                      className={`foodprefer-item-span ${
                        selectedItems.carbs.includes(carb)
                          ? "selected-item"
                          : ""
                      }`}
                      key={index}
                      onClick={() => handleSelection("carbs", carb)}
                    >
                      {carb}
                    </span>
                  ))}
                </div>
                {validationErrors.carbs && (
                  <p className="validation-error">
                    Please select at least one carb item.
                  </p>
                )}
              </div>
            )}

            {foodPreferenceData.fruits_berries && (
              <div>
                <h4 className="vegg-title fw-bold">
                  Fruits & Berries &nbsp;
                  <span className="fw-normal vegg-span">
                    (Select at least any one from the given items)
                  </span>
                </h4>
                <div className="foodprefer-item-list">
                  {foodPreferenceData.fruits_berries.map((fruit, index) => (
                    <span
                      className={`foodprefer-item-span ${
                        selectedItems.fruits_berries.includes(fruit)
                          ? "selected-item"
                          : ""
                      }`}
                      key={index}
                      onClick={() => handleSelection("fruits_berries", fruit)}
                    >
                      {fruit}
                    </span>
                  ))}
                </div>
                {validationErrors.fruits_berries && (
                  <p className="validation-error">
                    Please select at least one fruit or berry.
                  </p>
                )}
              </div>
            )}

            {foodPreferenceData.meat && (
              <div>
                <h4 className="vegg-title fw-bold">
                  Meat &nbsp;
                  <span className="fw-normal vegg-span">(Optional)</span>
                </h4>
                <div className="foodprefer-item-list">
                  {foodPreferenceData.meat.map((meat, index) => (
                    <span
                      className={`foodprefer-item-span ${
                        selectedItems.meat.includes(meat) ? "selected-item" : ""
                      }`}
                      key={index}
                      onClick={() => handleSelection("meat", meat)}
                    >
                      {meat}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mobile-button d-flex align-items-center">
        <NavigationButton
          handleNext={() => {
            if (validateSelections()) {
              logEvent("food_preferences_selected", {
                category: "User Actions",
                label: "Food Preferences",
              });
              setFormData((prev) => ({
                ...prev,
                foodPreference: foodPreferences,
              }));
              handleNext();
            } else {
              alert("Please complete all required selections.");
            }
          }}
          isActive={isFormValid}
        />
      </div>
    </div>
  );
};

export default FormFoodPreference;
