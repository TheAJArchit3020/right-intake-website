import React, { useContext, useEffect, useState } from "react";
import "./form.css";
import "./responsive.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router";
import DataContext from "../../components/Context/DataContext";
import { getfoodpreferences } from "../../components/apis";
import axios from "axios";
import Loading from "../LoadingAnimation/Loading";
const FormLanding = ({ showprogresshandler }) => {
  const [age, setAge] = useState("");
  const [agree, setAgree] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [error, setError] = useState("");
  const { setFormData } = useContext(DataContext);
  const [isLoading, setisLoading] = useState(false);
  const [locationStatus, setLocationStatus] = useState(
    "Awaiting permission..."
  );
  const { foodPreferenceData, setfoodPreferenceData } = useContext(DataContext);
  const [address, setAddress] = useState({
    city: "",
    state: "",
    country: "",
  });
  useEffect(() => {
    console.log("Updated foodPreferenceData:", foodPreferenceData);
  }, [foodPreferenceData]);
  useEffect(() => {
    console.log("requesting Location");
    requestLocation();
  }, []);
  const requestLocation = () => {
    if ("geolocation" in navigator) {
      console.log("Geolocation in navigator is there");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log({ latitude, longitude });
          fetchAddress(latitude, longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setLocationStatus(
              "Location access denied. Please enable it in your browser settings."
            );
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
      console.log({ data });

      if (data.status === "OK") {
        // Extract city, state, and country from `plus_code.compound_code`
        const compoundCode = data.plus_code?.compound_code;
        console.log("Compound Code:", compoundCode);

        if (compoundCode) {
          // Ensure we only split after the space following the first part
          const locationString = compoundCode.substring(
            compoundCode.indexOf(" ") + 1
          );
          console.log("Extracted Location String:", locationString);

          // Use split and trim to extract city, state, and country
          const [city, state, country] = locationString
            .split(",")
            .map((s) => s.trim()); // Trim whitespace

          // Update the state with the extracted values
          setAddress({ city, state, country });
          console.log("Address updated:", { city, state, country });
        } else {
          console.error("Plus code not found in response.");
          setAddress({ city: "Unknown", state: "Unknown", country: "Unknown" });
        }
      } else {
        console.error("Unable to fetch address. Status:", data.status);
        setAddress({ city: "Error", state: "Error", country: "Error" });
      }
    } catch (error) {
      console.error("Error fetching address:", error.message);
      setAddress({ city: "Error", state: "Error", country: "Error" });
    }
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
          console.log("FoodPreference Data is set: " + foodPreferenceData);
          setisLoading(false);
        });
    } catch (error) {
      alert(`${error}`);
    }
  };

  // formData handler .....
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      age: age,
    }));
  }, [age]);

  const handleSubmit = async () => {
    // Validation
    if (!age || isNaN(age)) {
      setError("Please enter a valid age.");
      return;
    }
    if (!agree) {
      setError("You must agree to the terms and conditions.");
      return;
    }
    setisLoading(true);
    await getFoodPreferenceHandler(
      address.city,
      address.state,
      address.country
    );
    setFormData((prev) => ({
      ...prev,
      city: address.city,
      state: address.state,
      country: address.country,
    }));
    setError(""); // Clear error if validation passes
    console.log("Form submitted successfully:", { age, agree });
    showprogresshandler();
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);

    // Remove error if valid age is entered
    if (value && !isNaN(value)) {
      setError("");
    }
  };

  const handleAgreeChange = (e) => {
    const isChecked = e.target.checked;
    setAgree(isChecked);

    // Remove error if checkbox is checked
    if (isChecked) {
      setError("");
    }
  };

  const handleAgreeChange2 = (e) => {
    const isChecked = e.target.checked;
    setAgree2(isChecked);
  };
  if (isLoading) {
    return (
      <Loading message="Please wait a sec we are setting up some cool things."></Loading>
    );
  }

  return (
    <div className="form-conatiner">
      <div className="form-header mt-0 mb-4">
        <h3>Build your personalized diet and workout routine</h3>
        <p>according to your preferences</p>
      </div>
      <div className="age-input-group d-flex justify-content-center gap-4 align-items-center fw-bold mb-4">
        <label htmlFor="age" className="fw-bold mb-0">
          YOUR AGE
        </label>
        <input
          className="age-input"
          type="number"
          name="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div className="grp-input-check d-flex justify-content-center gap-4 align-items-center fw-bold">
        <input
          className="agree-input"
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleAgreeChange}
          id="agree-checkbox"
        />
        <p className="agree-terms-para">
          By continuing, you agree to our{" "}
          <Link to={"/termsandservices"}> Terms of service </Link> and
          acknowledge our <Link to={"/termsandservices"}> Privacy policy </Link>
        </p>
      </div>
      <div className="grp-input-check d-flex justify-content-center gap-4 align-items-center fw-bold mt-0">
        <input
          type="checkbox"
          className="agree-input"
          name="agree2"
          checked={agree2}
          onChange={handleAgreeChange2}
        />
        <p className="agree-terms-para">
          I would like to receive updates about products, services, and special
          offers from RightIntake via email
        </p>
      </div>
      {error && <div className="text-danger mb-3 text-center">{error}</div>}
      <div className="mobile-button d-flex">
        <button className="letsGoButton" onClick={handleSubmit}>
          Lets Go
        </button>
      </div>
    </div>
  );
};

export default FormLanding;
