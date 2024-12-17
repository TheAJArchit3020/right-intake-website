import React, { useContext, useState } from "react";
import DataContext from "../../components/Context/DataContext";

const FormDietPreference = ({ handleNext }) => {
  const { setFormData } = useContext(DataContext);
  const [selectedOptions, setSelectedOptions] = useState("");

  // select handler ...
  const handleSelect = (option) => {
    console.log(option);
    setSelectedOptions(option);
    setFormData((prev) => ({
      ...prev,
      dietType: option,
    }));
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  return (
    <div className="container">
      <div className="diet-ui-container d-flex flex-column align-items-center justify-content-center gap-3">
        <h4 className="text-center fw-bold">
          What type of diet do you prefer?
        </h4>
        <button
          type="button"
          className={`veg-button`}
          style={{
            background:
              selectedOptions === "Vegetarian"
                ? "linear-gradient(90deg, rgba(255, 145, 145, 0.6) 0%, rgba(255, 208, 208, 0.6) 100%)"
                : "linear-gradient(90deg, rgba(159, 235, 159, 60%) 0%, rgba(215, 249, 215, 60%) 100%)",
          }}
          onClick={() => handleSelect("Vegetarian")}
        >
          Vegetarian
        </button>
        <button
          type="button"
          className={`nonveg-button `}
          style={{
            background:
              selectedOptions === "Non-Veg"
                ? "linear-gradient(90deg, rgba(255, 145, 145, 0.6) 0%, rgba(255, 208, 208, 0.6) 100%)"
                : "linear-gradient(90deg, rgba(159, 235, 159, 60%) 0%, rgba(215, 249, 215, 60%) 100%)",
          }}
          onClick={() => handleSelect("Non-Veg")}
        >
          Non-Veg
        </button>
      </div>
    </div>
  );
};

export default FormDietPreference;
