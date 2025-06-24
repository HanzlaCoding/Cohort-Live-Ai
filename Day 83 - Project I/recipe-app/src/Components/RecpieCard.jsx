import React from "react";
import { Link } from "react-router-dom";

const RecpieCard = ({
  id,
  title = "Untitled Recipe",
  chefName = "Unknown Chef",
  image = "https://source.unsplash.com/600x400/?food",
  category = "Uncategorized",
  description = "No description available.",
}) => {
  return (
    <Link
      to={`/recpie/details/${id}`}
      className="block max-w-sm mx-auto group transition-all duration-300 ease-in-out hover:scale-[1.015]"
    >
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden">
        {/* Image */}
        <div className="w-full h-44 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-800 line-clamp-1">
              {title}
            </h2>
            <span className="text-[10px] font-medium bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full uppercase">
              {category}
            </span>
          </div>

          <p className="text-xs text-gray-500 line-clamp-1">By {chefName}</p>

          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecpieCard;
