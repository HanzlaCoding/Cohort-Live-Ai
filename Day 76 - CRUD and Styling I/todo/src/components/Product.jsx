import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const handleClick = (productName) => {
    navigate(`/product/details/${productName}`);
  };

  return (
    <main className="w-full min-h-50 flex flex-col gap-5 pt-5">
      <div className="product p-4 rounded-md w-fit text-zinc-100 flex flex-col gap-3 m-2">
        <h1 className="text-3xl font-semibold">Product 1</h1>
        <p>This is the product description.</p>
        <button
          onClick={() => handleClick("Product 1")}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors"
        >
          See Details
        </button>
      </div>

      <div className="product p-4 rounded-md w-fit text-zinc-100 flex flex-col gap-3 m-2">
        <h1 className="text-3xl font-semibold">Product 2</h1>
        <p>This is the product description.</p>
        <button
          onClick={() => handleClick("Product 2")}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors"
        >
          See Details
        </button>
      </div>

      <div className="product p-4 rounded-md w-fit text-zinc-100 flex flex-col gap-3 m-2">
        <h1 className="text-3xl font-semibold">Product 3</h1>
        <p>This is the product description.</p>
        <button
          onClick={() => handleClick("Product 3")}
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors"
        >
          See Details
        </button>
      </div>
    </main>
  );
};

export default Product;
