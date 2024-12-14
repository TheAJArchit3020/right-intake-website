import React, { useContext, useEffect, useState } from 'react';
import "./form.css";
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import axios from 'axios';
import { getfoodpreferences } from '../../components/apis';


const FormFoodPreference = ({ handleNext }) => {
     const [locationStatus, setLocationStatus] = useState("Awaiting permission...");
     const [address, setAddress] = useState(null);
     const { setFormData } = useContext(DataContext);
     const [foodpreferenceData, setFoodpreferenceData] = useState(null);
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

     useEffect(() => {
          requestLocation();
     }, []);

     const requestLocation = () => {
          if ("geolocation" in navigator) {
               navigator.geolocation.getCurrentPosition(
                    (position) => {
                         const { latitude, longitude } = position.coords;
                         console.log({ latitude, longitude });
                         fetchAddress(latitude, longitude);
                    },
                    (error) => {
                         if (error.code === error.PERMISSION_DENIED) {
                              setLocationStatus("Location access denied. Please enable it in your browser settings.");
                         } else if (error.code === error.POSITION_UNAVAILABLE) {
                              setLocationStatus("Location unavailable. Please try again later.");
                         } else {
                              setLocationStatus("An error occurred while fetching location.");
                         }
                    }
               );
          } else {
               setLocationStatus("Geolocation is not supported by your browser.");
          }
     };

     const fetchAddress = async (latitude, longitude) => {
          const apiKey = "AIzaSyButhal1hfnTwt0pl1ehGTHKOVYA-3vVvM"; 
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

          try {
               const response = await fetch(geocodingUrl);
               const data = await response.json();
               console.log({data})

               if (data.status === "OK") {
                    const components = data.results[0]?.address_components;
                    console.log({components})
                    const city = components.find((c) => c.types.includes("locality"))?.long_name || "Unknown City";
                    console.log(city)
                    const state = components.find((c) => c.types.includes("administrative_area_level_1"))?.long_name || "Unknown State";
                    console.log(state)
                    const country = components.find((c) => c.types.includes("country"))?.long_name || "Unknown Country";
                    console.log(country)

                    setCity(city);
                    getFoodPreferenceHandler(city, state, country);
               } else {
                    setAddress("Unable to fetch address. Try again later.");
               }
          } catch (error) {
               setAddress("Error fetching address: " + error.message);
          }
     };

     const getFoodPreferenceHandler = async (city, state, country) => {
          console.log(city, state, country)
          try {
               await axios.post(getfoodpreferences, {
                    location: {
                         city: 'Nagpur',
                         state: state,
                         country: country
                    }
               }).then((response) => {
                    console.log({response})
                    const mappedData = response.data.reduce((acc, categoryData) => {
                         const { category, items } = categoryData;
                         const key = category.toLowerCase().replace("andberries", "_berries"); // Adjust keys
                         acc[key] = items;
                         return acc;
                    }, {});

                    console.log({ mappedData });
                    setFoodpreferenceData(mappedData)
               });
          } catch (error) {
               alert(`${error}`);
          }
     };

     const handleSelection = (category, item) => {
          setSelectedItems((prevSelected) => {
               const updatedSelected = {
                    ...prevSelected,
                    [category]: prevSelected[category].includes(item)
                         ? prevSelected[category].filter((i) => i !== item)
                         : [...prevSelected[category], item],
               };

               setFormData(prev => ({
                    ...prev,
                    foodPreference: {
                         ...prev.foodPreference,
                         [category]: updatedSelected[category],
                    },
               }));

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
                    {foodpreferenceData && (
                         <>
                              {foodpreferenceData.veggies && (
                                   <div>
                                        <h4 className="vegg-title fw-bold">
                                             Veggies &nbsp;
                                             <span className="fw-normal vegg-span">(Select at least any one from the given items)</span>
                                        </h4>
                                        <div className="foodprefer-item-list">
                                             {foodpreferenceData.veggies.map((veggie, index) => (
                                                  <span
                                                       className={`foodprefer-item-span ${selectedItems.veggies.includes(veggie) ? "selected-item" : ""}`}
                                                       key={index}
                                                       onClick={() => handleSelection('veggies', veggie)}
                                                  >
                                                       {veggie}
                                                  </span>
                                             ))}
                                        </div>
                                        {validationErrors.veggies && (
                                             <p className="validation-error">Please select at least one veggie.</p>
                                        )}
                                   </div>
                              )}

                              {foodpreferenceData.carbs && (
                                   <div>
                                        <h4 className="vegg-title fw-bold">
                                             Carbs &nbsp;
                                             <span className="fw-normal vegg-span">(Select at least any one from the given items)</span>
                                        </h4>
                                        <div className="foodprefer-item-list">
                                             {foodpreferenceData.carbs.map((carb, index) => (
                                                  <span
                                                       className={`foodprefer-item-span ${selectedItems.carbs.includes(carb) ? "selected-item" : ""}`}
                                                       key={index}
                                                       onClick={() => handleSelection('carbs', carb)}
                                                  >
                                                       {carb}
                                                  </span>
                                             ))}
                                        </div>
                                        {validationErrors.carbs && (
                                             <p className="validation-error">Please select at least one carb item.</p>
                                        )}
                                   </div>
                              )}

                              {foodpreferenceData.fruits_berries && (
                                   <div>
                                        <h4 className="vegg-title fw-bold">
                                             Fruits & Berries &nbsp;
                                             <span className="fw-normal vegg-span">(Select at least any one from the given items)</span>
                                        </h4>
                                        <div className="foodprefer-item-list">
                                             {foodpreferenceData.fruits_berries.map((fruit, index) => (
                                                  <span
                                                       className={`foodprefer-item-span ${selectedItems.fruits_berries.includes(fruit) ? "selected-item" : ""}`}
                                                       key={index}
                                                       onClick={() => handleSelection('fruits_berries', fruit)}
                                                  >
                                                       {fruit}
                                                  </span>
                                             ))}
                                        </div>
                                        {validationErrors.fruits_berries && (
                                             <p className="validation-error">Please select at least one fruit or berry.</p>
                                        )}
                                   </div>
                              )}

                              {foodpreferenceData.meat && (
                                   <div>
                                        <h4 className="vegg-title fw-bold">
                                             Meat &nbsp;
                                             <span className="fw-normal vegg-span">(Optional)</span>
                                        </h4>
                                        <div className="foodprefer-item-list">
                                             {foodpreferenceData.meat.map((meat, index) => (
                                                  <span
                                                       className={`foodprefer-item-span ${selectedItems.meat.includes(meat) ? "selected-item" : ""}`}
                                                       key={index}
                                                       onClick={() => handleSelection('meat', meat)}
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
                                   handleNext();
                              } else {
                                   alert("Please complete all required selections.");
                              }
                         }}
                    />
               </div>
          </div>
     );
};


export default FormFoodPreference;
