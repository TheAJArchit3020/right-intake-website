import { createContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

     const [formData, setFormData] = useState({});

     const contextValue = {
          formData, setFormData
     };

     return (
          <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
     );
};

export default DataContext;
