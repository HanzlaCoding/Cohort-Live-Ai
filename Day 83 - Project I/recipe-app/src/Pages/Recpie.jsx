import React, { useContext } from "react";
import { mainContext } from "../Context/MainContext";
import RecpieCard from "../Components/RecpieCard";
import { useNavigate } from "react-router-dom";

const Recpie = () => {
  const [data] = useContext(mainContext);
  const navigate = useNavigate();

  console.log("DATA:", data);

  // Defensive guard
  if (!Array.isArray(data)) {
    return (
      <div className="flex flex-col items-center justify-center gap-y-5 h-100">
        <h1 className="text-4xl font-[Inter] tracking-tighter">No Recipes Found. Create your own recipe now 👇!</h1>
        <button onClick={() => navigate("/create-recpie")} className="bg-orange-500 font-[Inter] text-white px-3 py-1 rounded-full text-sm cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors">Create Recipe</button>
        </div>
    );
  }

  return (
    <>
      {data.length > 0 ? (
        data.map((item, index) => (
          <RecpieCard
            key={index}
            id={index}
            title={item.title}
            chefName={item.chefName}
            ingredients={item.ingredients}
            instructions={item.instructions}
            image={item.image}
            category={item.category}
            description={item.description}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-5 h-100">
        <h1 className="text-4xl font-[Inter] tracking-tighter">No Recipes Found. Create your own recipe now 👇!</h1>
        <button onClick={() => navigate("/create-recpie")} className="bg-orange-500 font-[Inter] text-white px-3 py-1 rounded-full text-sm cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors">Create Recipe</button>
        </div>
      )}
    </>
  );
};

export default Recpie;
