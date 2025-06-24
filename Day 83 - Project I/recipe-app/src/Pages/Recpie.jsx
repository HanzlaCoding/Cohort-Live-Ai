/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { mainContext } from "../Context/MainContext";
import RecpieCard from "../Components/RecpieCard";

const Recpie = () => {
  const [data, setData] = useContext(mainContext);

  const renderRecpie = data.map((items, index) => {
    const {
      title,
      chefName,
      ingredients,
      instructions,
      image,
      category,
      description,
    } = items;

    return (
      <RecpieCard
        key={index}
        id={index}
        title={title}
        chefName={chefName}
        ingredients={ingredients}
        instructions={instructions}
        image={image}
        category={category}
        description={description}
      />
    );
  });

  return (
    <>
      {renderRecpie || renderRecpie.length > 0 ? (
        renderRecpie
      ) : (
        <div className="h-140 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-gray-700 font-[Inter]">
            Recipe Not Found
          </h1>
          <img
            className="h-20 ml-3 rounded-full"
            src="https://i.pinimg.com/originals/4d/d7/60/4dd76056feee92a2f0e669afc2361678.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Recpie;
