import React, { useContext, useState, useEffect } from "react";
import NavigationButton from "../../components/Button/navigationButton";
import { cheatmealimage } from "../../components/Images";
import DataContext from "../../components/Context/DataContext";
import { getCheatMeal } from "../../components/apis";
import axios from "axios";
const FormCheatmeal = ({ handleNext }) => {
  const [cheatMeals, setCheatMeals] = useState([]);
  const [selectedItems, setSelectedItems] = useState({ meal: [] });
  const [validationError, setValidationError] = useState(false);
  const { setFormData } = useContext(DataContext);

  const isFormValid = selectedItems.meal.length > 0 && selectedItems.meal.length <= 5;
  useEffect(() => {
    // Fetch cheat meal data from backend
    const fetchCheatMeals = async () => {
      try {
        const response = await axios.get(getCheatMeal); // Assuming this is an API call returning a promise
        console.log(response);
        setCheatMeals(response.data); // Update cheatMeals state with the fetched data
      } catch (error) {
        console.error("Error fetching cheat meals:", error);
      }
    };
    fetchCheatMeals();
  }, []);

  useEffect(() => {
    // Update formData outside of render
    if (selectedItems.meal.length > 0) {
      setFormData((prev) => ({
        ...prev,
        cheatMeals: selectedItems.meal,
      }));
    }
  }, [selectedItems, setFormData]); // Run effect when selectedItems changes

  const handleSelection = (item) => {
    setSelectedItems((prevSelected) => {
      const updatedMealSelection = prevSelected.meal.includes(item)
        ? prevSelected.meal.filter((i) => i !== item) // Remove if already selected
        : [...prevSelected.meal, item]; // Add if not selected

      return { meal: updatedMealSelection };
    });

    // Clear validation error when an item is selected
    if (validationError) {
      setValidationError(false);
    }
  };

  const validateSelections = () => {
    if (selectedItems.meal.length === 0) {
      setValidationError(true);
      return false;
    }
    return true;
  };

  return (
    <div className="cheatmeal-content">
      <h4 className="cheatmeal-head fw-bold text-center">
        Select your cheat meal
      </h4>
      <p className="text-center">
        (Select up to 5 cheat meals to treat yourself to a cheat meal and
        satisfy your cravings without the guilt!)
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <div className="cheatmeal-container">
          {cheatMeals.map((item, index) => (
            <div
              className={`cheatmeal-card ${
                selectedItems.meal.includes(item.name)
                  ? "cheatmeal-selected-item"
                  : ""
              }`}
              key={index}
              onClick={() => handleSelection(item.name)}
            >
              <img src={item.imageUrl} alt={item.name} width={230} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {validationError && (
        <p className="validation-error text-center">
          Please select at least one cheat meal.
        </p>
      )}

      <div className="mobile-button d-flex align-items-center mt-4">
        <NavigationButton
          // handleNext={() => {
          //   if (validateSelections()) {
          //     handleNext();
          //   }
          // }}
          isActive={isFormValid}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default FormCheatmeal;
