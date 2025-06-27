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
      {renderRecpie && renderRecpie.length > 0 ? (
        renderRecpie
      ) : (
        <iframe className="w-full h-100" src="https://lottie.host/embed/978691f1-a48f-4f14-9699-155c492a4276/p1NguTQ7d6.lottie"></iframe>
      )}
    </>
  );
};

export default Recpie;
