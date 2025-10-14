import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom"; // Use Navigate for redirects

const UserAuthWrapper = ({ children }) => {
  // Destructure the context values
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  console.log(user, token);

  if (user?.token == token) {
    alert(user.token);
    return <Navigate to="/user-profile" replace />;
  }
  else{
    <Navigate to="/login" replace/>
  }

  // 2. If the user IS authenticated, simply return the child component (e.g., <UserProfile />)
  return children;
};

export default UserAuthWrapper;
