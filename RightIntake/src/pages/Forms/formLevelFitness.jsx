import React, { useContext, useState } from "react";
import NavigationButton from "../../components/Button/navigationButton";
import { Form } from "react-bootstrap";
import { fitnessimg1, fitnessimg2 } from "../../components/Images";
import DataContext from "../../components/Context/DataContext";

const FormLevelFitness = ({ handleNext }) => {
  const [fitnessLevel, setFitnessLevel] = useState(0);
  const { formData, setFormData } = useContext(DataContext);

  // Define descriptions for fitness levels
  const fitnessDescriptions = {
    newcomer: [
      "Whenever I sit on the floor, it's hard for me to stand up.",
      "Sitting on the floor feels like signing up for a one-way ticket to struggle town.",
      "Walking up two flights of stairs? That’s my cardio for the week.",
      "My idea of a workout is carrying all the grocery bags in one trip.",
      "I tried stretching once, and my body said, 'Let’s not do that again.'",
      "Squats? More like trying to sit on an invisible chair and failing gracefully.",
    ],
    amateur: [
      "I do workout videos at home—well, I mostly watch them, but it counts, right?",
      "Once a week at the gym is basically a fitness routine, I swear.",
      "I started doing pushups, but then I realized I really just wanted to lie down.",
      "My playlist says 'beast mode,' but my body says 'nap mode.'",
    ],
    pro: [
      "My rest day includes a light jog, just to stay 'rested.'",
      "Meal prep, macros, and gym selfies—fitness isn’t a hobby, it’s a personality.",
      "I lift heavy, train hard, and my gym bag is basically my second home.",
    ],
  };

  // Determine the category and corresponding text
  let fitnessCategory = "";
  let fitnessText = "";

  if (fitnessLevel >= 0 && fitnessLevel <= 5) {
    fitnessCategory = "Newcomer";
    fitnessText = fitnessDescriptions.newcomer[fitnessLevel];
  }
  // } else if (fitnessLevel >= 1 && fitnessLevel <= 5) {
  //   fitnessCategory = "Newcomer";
  //   fitnessText = fitnessDescriptions.newcomer[fitnessLevel - 1];
  //}
  else if (fitnessLevel >= 6 && fitnessLevel <= 9) {
    fitnessCategory = "Amateur";
    fitnessText = fitnessDescriptions.amateur[fitnessLevel - 6] || "";
  } else if (fitnessLevel >= 10 && fitnessLevel <= 12) {
    fitnessCategory = "Pro";
    fitnessText = fitnessDescriptions.pro[fitnessLevel - 10] || "";
  }

  // Handle change event for the range input
  const handleRangeChange = (event) => {
    setFitnessLevel(Number(event.target.value)); // Update the fitness level
    setFormData((prev) => ({
      ...prev,
      fitnesslevel:
        "Fitness Category: " +
        fitnessCategory +
        "| Fitness Level: " +
        fitnessText,
    }));
    console.log(formData);
  };

  return (
    <>
      <div className="fitness-ui-container">
        <h4 className="text-center fw-bold mb-4">
          What’s your current level of fitness?
        </h4>
        <div className="range-wrapper d-flex align-items-center justify-content-center">
          <div className="fitness-range d-flex align-items-center justify-content-center gap-3">
            <img src={fitnessimg1} alt="fitnessimg1" width={30} />
            <div
              className="range-with-lines"
              style={{ position: "relative", width: "100%" }}
            >
              {[...Array(11)].map((_, index) => (
                <div
                  key={index}
                  className="interval-line"
                  style={{
                    position: "absolute",
                    left: `${(index + 1) * 8.2}%`,
                    top: "50%",
                    transform: "translateY(-40%)",
                    height: "12px",
                    width: "1px",
                    backgroundColor: "#000",
                  }}
                />
              ))}

              <input
                type="range"
                value={fitnessLevel}
                onChange={handleRangeChange}
                min={0}
                max={12}
                step={1}
                style={{
                  width: "100%",
                  height: "6px",
                  appearance: "none",
                  background: "#F1BABA",
                  borderRadius: "5px",
                  outline: "none",
                  cursor: "pointer",
                  // overflow: "hidden",
                  // position: "relative",
                }}
              />
            </div>
            <img src={fitnessimg2} alt="fitnessimg1" width={30} />
          </div>
        </div>
        <div className="fitness-new-commer d-flex align-items-center justify-content-center">
          <div className="fitness-newcommer-ui mt-4">
            <p className="fw-bold">{fitnessCategory}</p>
            <p>{fitnessText}</p>
          </div>
        </div>
        <div className="mobile-button d-flex align-items-center">
          <NavigationButton isActive={true} handleNext={handleNext} />
        </div>
      </div>
    </>
  );
};

export default FormLevelFitness;
