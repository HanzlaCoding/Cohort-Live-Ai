import React, { createContext, useState } from "react";

export const mainContext = createContext(null);

const MainContext = ({ children }) => {
  const [data, setData] = useState([]);
  // console.log(data);

  return (
    <>
      <mainContext.Provider value={[data, setData]}>
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainContext;
