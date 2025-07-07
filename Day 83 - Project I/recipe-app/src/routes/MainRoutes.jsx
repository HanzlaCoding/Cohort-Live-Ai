import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import CreateRecpie from "../Pages/Createrecpie";
import Recpie from "../Pages/Recpie";
import RecpieDetail from "../Pages/RecpieDetail";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recpie" element={<Recpie />} />
        <Route path="/create-recpie" element={<CreateRecpie />} />
        <Route path="/recpie/details/:id" element={<RecpieDetail />} />
      </Routes>
    </>
  );
};

export default MainRoutes;