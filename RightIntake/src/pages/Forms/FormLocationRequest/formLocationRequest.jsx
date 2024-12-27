import React, { useEffect, useContext, useState } from "react";
import Select from "react-select";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import { getfoodpreferences } from "../../../components/apis";
import NavigationButton from "../../../components/Button/navigationButton";
import DataContext from "../../../components/Context/DataContext";
import Loading from "../../LoadingAnimation/Loading";
import axios from "axios";
import "./formLocationRequest.css";

const FormLocationRequest = ({ handleNext }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const { setFormData, setfoodPreferenceData } = useContext(DataContext);
  useEffect(() => {
    GetCountries().then((data) => {
      setCountries(
        data.map((c) => ({
          value: c.id,
          label: c.name,
        }))
      );
    });
  }, []);
  const handleCountryChange = (selectedOption) => {
    setIsLocationSelected(false);
    setCountry(selectedOption);
    setStates([]);
    setState(null);
    setCities([]);
    setCity(null);

    if (selectedOption) {
      GetState(selectedOption.value).then((data) => {
        setStates(
          data.map((s) => ({
            value: s.id,
            label: s.name,
          }))
        );
      });
    }
  };

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
    setIsLocationSelected(false);
    setCities([]);
    setCity(null);

    if (selectedOption) {
      GetCity(country.value, selectedOption.value).then((data) => {
        setCities(
          data.map((c) => ({
            value: c.id,
            label: c.name,
          }))
        );
      });
    }
  };

  const handleCityChange = (selectedOption) => {
    setCity(selectedOption);
    setIsLocationSelected(true);
  };

  const handleSubmit = async () => {
    if (!country || !state || !city) {
      return;
    }
    console.log({
      country: country.label,
      state: state.label,
      city: city.label,
    });
    setisLoading(true);
    await getFoodPreferenceHandler(city.label, state.label, country.label);
    setFormData((prev) => ({
      ...prev,
      city: city.label,
      state: state.label,
      country: country.label,
    }));
    handleNext();
  };

  const getFoodPreferenceHandler = async (city, state, country) => {
    console.log("Inside get food preference handler");
    console.log(city, state, country);
    try {
      console.log("Sending Location data to the api");
      await axios
        .post(getfoodpreferences, {
          location: {
            city: city,
            state: state,
            country: country,
          },
        })
        .then((response) => {
          console.log({ response });
          const mappedData = response.data.reduce((acc, categoryData) => {
            const { category, items } = categoryData;
            const key = category
              .toLowerCase()
              .replace("andberries", "_berries"); // Adjust keys
            acc[key] = items;
            return acc;
          }, {});

          console.log({ mappedData });
          setfoodPreferenceData(mappedData);
          setisLoading(false);
        });
    } catch (error) {
      alert(`${error}`);
    }
  };

  if (isLoading) {
    return (
      <Loading message="Please wait a sec we are setting up some cool things."></Loading>
    );
  }
  return (
    <>
      <div className="formLocationRequest-container">
        <div className="location-request-wrapper">
          <div className="location-request-head">
            <span>We need your location to give you the best results</span>
          </div>
          <div className="location-select-container">
            <div className="location-select-group">
              <Select
                options={countries}
                value={country}
                onChange={handleCountryChange}
                placeholder="Select Country"
                className="custom-select"
              />
            </div>
            <div className="location-select-group">
              <Select
                options={states}
                value={state}
                onChange={handleStateChange}
                placeholder="Select State"
                className="custom-select"
                isDisabled={!country}
              />
            </div>
            <div className="location-select-group">
              <Select
                options={cities}
                value={city}
                onChange={handleCityChange}
                placeholder="Select City"
                className="custom-select"
                isDisabled={!state}
              />
            </div>
          </div>
        </div>
        <div className="mobile-button d-flex align-items-center">
          <NavigationButton
            isActive={isLocationSelected}
            handleNext={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default FormLocationRequest;
