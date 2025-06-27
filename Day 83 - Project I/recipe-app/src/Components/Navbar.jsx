import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const isActive = ({ isActive }) => (isActive ? "text-rose-500" : "");
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 font-['Inter'] text-lg">
      <NavLink to="/">
        <h1 className="text-3xl uppercase text-orange-500 font-[daffiys]">
          Recipie
        </h1>
      </NavLink>
      <div className="links flex gap-x-4 text-lg">
        <NavLink className={isActive} to={"/recpie"}>
          Recpie
        </NavLink>
        <NavLink className={isActive} to={"/create-recpie"}>
          Create Recpie
        </NavLink>
        <NavLink className={isActive} to={"/about"}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
