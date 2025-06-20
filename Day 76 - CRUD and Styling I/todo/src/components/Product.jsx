import React from "react";

const Product = () => {
 

  return (
    <div className="product p-3 rounded-md bg-zinc-100 w-fit text-zinc-800 flex flex-col gap-3 m-2">
      <h1 className="text-3xl font-semibold">Product 1</h1>
      <p>This is the product description.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition-colors">
        See Details
      </button>
    </div>
  );
};

export default Product;