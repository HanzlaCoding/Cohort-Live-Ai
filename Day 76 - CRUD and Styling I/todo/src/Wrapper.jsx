import React, { createContext, useState } from "react";

export const todoContext = createContext(null);

const Wrapper = ({ children }) => {
  
 const [task, setTask] = useState([]);

  return (
    <todoContext.Provider value={[task, setTask]}>
      {children}
    </todoContext.Provider>
  );
};

export default Wrapper;
