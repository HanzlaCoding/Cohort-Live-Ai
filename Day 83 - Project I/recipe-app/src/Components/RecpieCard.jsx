import React from "react";
import { Link } from "react-router-dom";

const RecpieCard = ({
  id,
  title = "Untitled Recipe",
  chefName = "Unknown Chef",
  imageUrl = "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=410&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  category = "Uncategorized",
  description = "No description available.",
}) => {
  return (
       <>
       <div className="recipes-cards p-5 flex flex-wrap items-center gap-10">
       <div key={id} className="card shrink-0 h-40 w-95 overflow-hidden rounded-lg bg-zinc-50 flex items-center justify-between gap-x-2 font-[inter]">
                <img className='w-1/2 h-full object-cover rounded-xl' src={imageUrl} alt="" />
                <div className="content flex py-2 px-2 flex-col gap-y-2">
                <div className="cat-text w-full flex justify-between items-center">
                <div className="main">
                <h4 className='text-xl mb-1 font-bold'>{title.slice(0, 6).concat('...')}</h4>
                <p className='text-xs text-zinc-500'>by {chefName.slice(0, 10).concat('...')}</p>
                </div>
                <p className="category text-xs bg-amber-300 px-3 py-1 rounded-full w-fit">{category}</p>
                </div>
                <p className='text-xs text-gray-600'>{description.slice(0, 30).concat('...')}</p>
                <Link to={`/recpie/details/${id}`}>
                <button className='bg-orange-500 text-white px-3 py-2 rounded-full text-xs cursor-pointer flex items-center justify-center gap-x-2 hover:bg-orange-600 transition-colors'>View Recipe</button>
                </Link>
                </div>
            </div>
            </div>
       </>
  );
};

export default RecpieCard;