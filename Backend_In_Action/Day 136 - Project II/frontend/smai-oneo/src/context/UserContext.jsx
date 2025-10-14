// In your context/UserContext.jsx
import { createContext, useState } from "react";

// 1. Export the context object itself
export const UserContext = createContext();

// 2. The Provider component (which you already had)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
