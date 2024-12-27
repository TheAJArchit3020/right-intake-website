import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [foodPreferenceData, setfoodPreferenceData] = useState([]);
  const [isLocationData, setIsLocationData] = useState(false);
  const [CountryCurrency, setCountryCurrency] = useState("");
  const contextValue = {
    formData,
    setFormData,
    foodPreferenceData,
    setfoodPreferenceData,
    isLocationData,
    setIsLocationData,
  };
  console.log("The location data is: " + isLocationData);
  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
export default DataContext;
