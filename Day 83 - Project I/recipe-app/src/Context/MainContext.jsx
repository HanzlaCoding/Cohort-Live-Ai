import { createContext, useEffect, useState } from "react"

export const mainContext = createContext(null);

const MainContext = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")));
  },[]);

  return (
    <>
      <mainContext.Provider value={[data, setData]}>
        {children}
      </mainContext.Provider>
    </>
  );
};

export default MainContext;
