import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-120 h-20 bg-[#F1DDB6] flex items-center justify-between px-10 font-['Inter'] text-lg mx-auto">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/recpie"}>Recpie</NavLink>
      <NavLink to={"/create-recpie"}>Create Recpie</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </nav>
  );
};

export default Navbar;
