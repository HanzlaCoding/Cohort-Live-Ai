import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Service = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen flex flex-col gap-5 pt-10">
      <h2 className="text-3xl font-semibold">Service</h2>
      <button
        onClick={() => navigate("/service/details")}
        className="bg-blue-500 w-fit text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors"
      >
        See Details
      </button>
      <hr className="opacity-70 border-zinc-500" />
      <Outlet />
    </main>
  );
};

export default Service;