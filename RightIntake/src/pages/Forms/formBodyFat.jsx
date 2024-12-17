import React, { useContext, useState } from "react";
import NavigationButton from "../../components/Button/navigationButton";
import {
  bodyfat1,
  bodyfat2,
  bodyfat3,
  bodyfat4,
  bodyfat5,
  bodyfat6,
  bodyfat7,
  bodyfat8,
} from "../../components/Images";
import DataContext from "../../components/Context/DataContext";

const FormBodyFat = ({ handleNext }) => {
  const [bodyFatLevel, setBodyFatLevel] = useState(0);
  const { setFormData } = useContext(DataContext);

  const handleRangeChange = (event) => {
    setBodyFatLevel(parseInt(event.target.value));
    setFormData((prev) => ({
      ...prev,
      bodyFatPercentage: getRangeLabel(event.target.value),
    }));
  };

  const getRangeLabel = (value) => {
    if (value <= 10) return "6-10%";
    if (value <= 14) return "11-14%";
    if (value <= 19) return "15-19%";
    if (value <= 24) return "20-24%";
    if (value <= 29) return "25-29%";
    if (value <= 34) return "30-34%";
    if (value <= 39) return "34-39%";
    return ">40%";
  };

  const getImageForRange = (value) => {
    if (value <= 10) return bodyfat1;
    if (value <= 14) return bodyfat2;
    if (value <= 19) return bodyfat3;
    if (value <= 24) return bodyfat4;
    if (value <= 29) return bodyfat5;
    if (value <= 34) return bodyfat6;
    if (value <= 39) return bodyfat7;
    return bodyfat8;
  };

  return (
    <>
      <div className="bodyfat-ui-container">
        <h4 className="text-center fw-bold mb-4">
          What is your current body fat?
        </h4>
        <div className="bodyfitness-range d-flex flex-wrap align-items-center justify-content-center gap-6">
          <div className="bodyimg-container d-flex justify-content-center">
            <img
              src={getImageForRange(bodyFatLevel)}
              alt="fitness"
              className="bodyfatimage"
            />
          </div>
          <div className="bodyfat-range-div d-flex flex-wrap justify-content-start position-relative">
            <div
              className="bubble"
              style={{
                position: "absolute",
                top: "-40px",
                left: `calc(${((bodyFatLevel - 4) / (40 - 4)) * 100}%)`,
                transform: "translateX(-50%)",
                background: "#d4fcd3",
                padding: "5px 10px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {getRangeLabel(bodyFatLevel)}
            </div>

            <div
              className="range-with-lines"
              style={{ width: "310px", position: "relative" }}
            >
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="interval-line"
                  style={{
                    position: "absolute",
                    left: `${(index + 1) * 14.35}%`,
                    // top: "6px",
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
                value={bodyFatLevel}
                onChange={handleRangeChange}
                min={6}
                max={41}
                step={5}
                style={{
                  width: "100%",
                  height: "6px",
                  appearance: "none",
                  background: "#F1BABA",
                  borderRadius: "5px",
                  outline: "none",
                  cursor: "pointer",
                  // overflow: "hidden",
                  position: "relative",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mobile-button d-flex align-items-center mt-3 submitbutton">
          <NavigationButton handleNext={handleNext} />
        </div>
      </div>
    </>
  );
};

export default FormBodyFat;
