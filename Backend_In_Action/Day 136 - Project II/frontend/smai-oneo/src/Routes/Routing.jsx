import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";

const Routing = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Register />} />
    <Route path="/user-profile" element={<UserProfile />} />
  </Routes>
);

export default Routing;
