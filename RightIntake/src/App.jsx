import "./App.css";
import RoutesComponent from "./components/routeComponent/routes";
import { DataProvider } from "./components/Context/DataContext";
import { useEffect } from "react";
import { initializeAnalytics } from "./Utilities/analytics";
function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);
  return (
    <>
      <DataProvider>
        <RoutesComponent />
      </DataProvider>
    </>
  );
}

export default App;
