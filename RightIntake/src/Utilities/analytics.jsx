import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initializeAnalytics = () => {
  ReactGA.initialize("G-8C0M31WDCT"); // Replace with your Measurement ID
};

// Log a custom event
export const logEvent = (name, params) => {
  ReactGA.event(name, params);
};
