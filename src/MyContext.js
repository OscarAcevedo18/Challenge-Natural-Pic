import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const endpoint = "/fotos.json";

  const dataConsult = async () => {
    const response = await (await fetch(endpoint)).json();
    const dataImg = response.photos;
    setData(dataImg);
  };

  useEffect(() => {
    dataConsult();
  }, []);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default AppProvider;