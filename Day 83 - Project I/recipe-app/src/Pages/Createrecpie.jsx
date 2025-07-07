import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { mainContext } from "../Context/MainContext";
import { useNavigate } from "react-router-dom";

const Createrecpie = () => {
  const [data, setData] = useContext(mainContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: (data?.length || 0) // Ensure data is an array and generate a unique id
    };
    const updatedRecipes = [...(data || []), newRecipe];
    setData(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    reset();
    navigate("/recpie");
  };

  return (
    <>
      <div className="min-h-screen px-6 py-12 font-['Playfair_Display']">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
          <h1 className="text-3xl font-['Playfair_Display'] text-center mb-5">
            Express Your Recipe
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Share your delicious recipes with the world! Fill out the form below
            to submit your recipe.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 gap-6 font-['Inter'] text-sm"
          >
            {/* Upload Image */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Recipe Image Link
              </label>
              <input
                {...register("image", { required: true })}
                type="text"
                placeholder="Add a image link pls..."
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Recipe Title
              </label>
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="Add a title pls..."
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              />
              {errors.title && (
                <span className="text-red-500 text-xs">Please add a title</span>
              )}
            </div>

            {/* Chef Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Chef Name
              </label>
              <input
                {...register("chefName", { required: true })}
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              />
              {errors.chefName && (
                <span className="text-red-500 text-xs">Required</span>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <select
                {...register("category", { required: true })}
                className="w-full px-3 py-1.5 border border-gray-300 rounded bg-white focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              >
                <option value="">Choose...</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Supper">Supper</option>
                <option value="Snacks">Snacks</option>
                <option value="Dessert">Dessert</option>
              </select>
              {errors.category && (
                <span className="text-red-500 text-xs">Select one</span>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                rows={2}
                placeholder="Quick summary"
                className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              ></textarea>
              {errors.description && (
                <span className="text-red-500 text-xs">Required</span>
              )}
            </div>

            {/* Ingredients */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Ingredients
              </label>
              <textarea
                {...register("ingredients", { required: true })}
                rows={3}
                placeholder="e.g. Flour, Sugar, Milk"
                className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              ></textarea>
              {errors.ingredients && (
                <span className="text-red-500 text-xs">Required</span>
              )}
            </div>

            {/* Instructions */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-1">
                Instructions
              </label>
              <textarea
                {...register("instructions", { required: true })}
                rows={3}
                placeholder="Step-by-step guide"
                className="w-full px-3 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring focus:ring-amber-300 transition-all"
              ></textarea>
              {errors.instructions && (
                <span className="text-red-500 text-xs">Required</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white text-sm py-2 rounded-md transition-all"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Createrecpie;