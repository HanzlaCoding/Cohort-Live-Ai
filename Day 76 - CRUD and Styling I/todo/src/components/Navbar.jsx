import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

const activeLink = (e) => (e.isActive ? "text-rose-500" : "")

  return (
    <>
      <nav className="w-[80%] py-2 border-b-1 border-zinc-500 rounded-md mx-auto flex items-center justify-between px-50 font-bold">
        
        <NavLink className={activeLink} to="/">Home</NavLink>

        <NavLink className={activeLink} to="/service">Service</NavLink>

        <NavLink className={activeLink} to="/product">Product</NavLink>
        
        <NavLink className={activeLink} to="/todo">Todo</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
