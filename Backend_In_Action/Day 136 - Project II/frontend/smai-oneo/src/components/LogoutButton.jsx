// LogoutButton.jsx (or inline the logic if preferred)
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // Assuming this path is correct

const LogoutButton = ({ className }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    document.cookie = "token=";
    // 2. Clear token/user data from localStorage/sessionStorage (if used)
    localStorage.removeItem("token");

    // 3. Redirect to the login page or home page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className={className}>
      Logout
    </button>
  );
};

export default LogoutButton;
