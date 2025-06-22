import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="w-full h-screen flex flex-col gap-5 pt-10">
        <h2 className="text-3xl font-semibold">Service</h2>
        <p>details here...</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-red-500 w-fit text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 transition-colors"
        >
          Go Back
        </button>
      </main>
    </>
  );
};

export default ServiceDetails;
