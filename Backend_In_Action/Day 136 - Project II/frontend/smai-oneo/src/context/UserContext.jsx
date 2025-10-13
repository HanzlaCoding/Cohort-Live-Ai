import { createContext, useState } from "react";

// 1. Create the context
const UserContext = createContext();

// 2. Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user, setUser);

  // You can add more user-related logic here

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};