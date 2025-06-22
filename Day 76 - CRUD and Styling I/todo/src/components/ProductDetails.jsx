import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const {name} = useParams();

  return (
    <>
      <main className="w-full h-screen flex flex-col gap-5 pt-10">
        <h2 className="text-3xl font-semibold">{name}</h2>
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

export default ProductDetails;