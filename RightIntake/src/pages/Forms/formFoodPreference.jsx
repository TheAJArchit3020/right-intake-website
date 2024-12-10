import React, { useEffect, useState } from 'react';
import "./form.css"
import NavigationButton from '../../components/Button/navigationButton';

const FormFoodPreference = ({ handleNext }) => {
     const [locationStatus, setLocationStatus] = useState("Awaiting permission...");
     const [address, setAddress] = useState(null);
     const [city, setCity] = useState('Nagpur');
     const [selectedItems, setSelectedItems] = useState({
          veggies: [],
          carbs: [],
          meat: [],
          fruits_berries: [],
     });

     useEffect(() => {
          requestLocation();
     }, []);

     const requestLocation = () => {
          if ("geolocation" in navigator) {
               navigator.geolocation.getCurrentPosition(
                    (position) => {
                         const { latitude, longitude } = position.coords;
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
          const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your API key
          const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

          try {
               const response = await fetch(geocodingUrl);
               const data = await response.json();

               if (data.status === "OK") {
                    const results = data.results[0];
                    setAddress(results.formatted_address);

                    // Extract city from the address components
                    const cityComponent = results.address_components.find((component) =>
                         component.types.includes("locality")
                    );
                    if (cityComponent) {
                         setCity(cityComponent.long_name);
                    }
               } else {
                    setAddress("Unable to fetch address. Try again later.");
               }
          } catch (error) {
               setAddress("Error fetching address: " + error.message);
          }
     };

     const CTYFOODITEMS = {
          Nagpur: {
               veggies: ["Carrot", "Potato", "Tomato", "Carrot", "Potato", "Tomato"],
               carbs: ["Rice", "Wheat", "Bread"],
               meat: ["Chicken", "Mutton"],
               fruits: ["Orange", "Banana", "Papaya"],
               berries: ["Strawberry", "Gooseberry"],
          },
          Pune: {
               veggies: ["Spinach", "Cabbage", "Peas"],
               carbs: ["Oats", "Quinoa", "Pasta"],
               meat: ["Fish", "Prawns"],
               fruits: ["Apple", "Grapes", "Guava"],
               berries: ["Blueberry", "Raspberry"],
          },
          Mumbai: {
               veggies: ["Capsicum", "Cauliflower", "Pumpkin"],
               carbs: ["Idli", "Dosa", "Roti"],
               meat: ["Crab", "Lobster"],
               fruits: ["Mango", "Pineapple", "Kiwi"],
               berries: ["Blackberry", "Mulberry"],
          },
     };
     const handleSelection = (category, item) => {
          setSelectedItems((prevSelected) => ({
            ...prevSelected,
            [category]: prevSelected[category].includes(item)
              ? prevSelected[category].filter((i) => i !== item) // Remove if already selected
              : [...prevSelected[category], item], // Add if not selected
          }));
        };

     const isItemSelected = (category, item) => selectedItems[category].includes(item);  


     return (
          <div className="foodprefer-ui-container">
               <h4 className="foodprefer-head fw-bold text-center">What is your food preference?</h4>

               <div className="vegg-div">
                    {city && CTYFOODITEMS[city] ? (
                         <>
                              <h4 className="vegg-title fw-bold">
                                   Veggies &nbsp;
                                   <span className="fw-normal vegg-span">
                                        (Select at least any one from the given items)
                                   </span>
                              </h4>
                              <div className='foodprefer-item-list'>
                                   {CTYFOODITEMS[city].veggies.map((veggie, index) => (
                                        <span className={`foodprefer-item-span ${isItemSelected('veggies', veggie) ? "selected-item" : ""
                                             }`} key={index} onClick={() => handleSelection('veggies', veggie)}>{veggie}</span>
                                   ))}
                              </div>

                              <h4 className="vegg-title fw-bold">Carbs &nbsp;
                                   <span className="fw-normal vegg-span">
                                        (Select at least any one from the given items)
                                   </span></h4>
                              <div className='foodprefer-item-list'>
                                   {CTYFOODITEMS[city].carbs.map((carb, index) => (
                                        <span className={`foodprefer-item-span ${isItemSelected('carbs', carb) ? "selected-item" : ""
                                             }`} key={index} onClick={() => handleSelection('carbs', carb)}>{carb}</span>
                                   ))}
                              </div>

                              <h4 className="vegg-title fw-bold">Meat &nbsp;
                                   <span className="fw-normal vegg-span">
                                        (Select at least any one from the given items)
                                   </span></h4>
                              <div className='foodprefer-item-list'>
                                   {CTYFOODITEMS[city].meat.map((meat, index) => (
                                        <span className={`foodprefer-item-span ${isItemSelected('meat', meat) ? "selected-item" : ""
                                             }`} key={index} onClick={() => handleSelection('meat', meat)}>{meat}</span>
                                   ))}
                              </div>

                              <h4 className="vegg-title fw-bold">Fruits & Berries &nbsp;
                                   <span className="fw-normal vegg-span">
                                        (Select at least any one from the given items)
                                   </span></h4>
                              <div className='foodprefer-item-list'>
                                   {CTYFOODITEMS[city].fruits.map((fruit, index) => (
                                        <span className={`foodprefer-item-span ${isItemSelected('fruits_berries', fruit) ? "selected-item" : ""
                                             }`} key={index} onClick={() => handleSelection('fruits_berries', fruit)}>{fruit}</span>
                                   ))}
                              </div>


                         </>
                    ) : (
                         <p>{address ? "City not found in food items list." : locationStatus}</p>
                    )}
               </div>

               <div className='foodprefer-button d-flex align-items-center justify-content-center'>
                    <NavigationButton handleNext={handleNext} />
               </div>

          </div>
     );
};

export default FormFoodPreference;
