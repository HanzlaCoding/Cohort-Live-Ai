import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../Context/MainContext";
import { useForm } from "react-hook-form";

const RecipeDetail = () => {
  const { id } = useParams();
  const [data, setData] = useContext(mainContext); // Ensure your context returns an array
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 
  const recipe = data.find((item) => parseInt(id) === item.id);

  const updateHandler = (updatedFields) => {
    const updatedData = data.map((item) =>
      item.id === parseInt(id) ? { ...item, ...updatedFields } : item
    );
    setData(updatedData);
    reset();
  };
  

  return (
    <>
      {recipe ? (
        <div className="min-h-screen p-10  font-[Inter]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Side: Recipe Display Card */}
            <div className="md:w-1/2 bg-white rounded-xl shadow-md overflow-hidden p-4">
              <img
                src={
                  recipe?.image || "https://source.unsplash.com/600x400/?food"
                }
                alt="Recipe"
                className="w-full h-60 object-cover object-center rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-1">
                <strong>Chef:</strong> {recipe.chefName || "Unknown Chef"}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Category:</strong> {recipe.category || "Uncategorized"}
              </p>
              <p className="text-gray-600 mb-3">
                <strong>Description:</strong>{" "}
                {recipe.description || "No description available."}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong>{" "}
                {recipe.ingredients || "No ingredients listed."}
              </p>
              <p className="text-gray-700">
                <strong>Instructions:</strong>{" "}
                {recipe.instructions || "No instructions available."}
                and steam.
              </p>
            </div>

            {/* Right Side: Update Form */}
            <div className="md:w-1/2 bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Update Recipe</h3>
              <form
                className="space-y-4"
                onSubmit={handleSubmit(updateHandler)}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL
                  </label>
                  <input
                    {...register("image", { required: true })}
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                {errors.image && (
                  <p className="text-sm text-red-500 my-1">
                    Please add some url.
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                {errors.title && (
                  <p className="text-sm text-red-500 my-1">
                    Please add some of your favorite.
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Chef Name
                  </label>
                  <input
                    {...register("chef", { required: true })}
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                {errors.chef && (
                  <p className="text-sm text-red-500 my-1">
                    Please add some of your favorite.
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    {...register("category", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Select a category</option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Dessert</option>
                  </select>
                </div>
                {errors.category && (
                  <p className="text-sm text-red-500 my-1">
                    Please select your categoty.
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={2}
                  ></textarea>
                </div>
                {errors.description && (
                  <p className="text-sm text-red-500 my-1">
                    Please add some description.
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ingredients
                  </label>
                  <textarea
                    {...register("ingredients", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={2}
                  ></textarea>
                </div>
                {errors.ingredients && (
                  <p className="text-sm text-red-500 my-1">
                    Please add some ingredients.
                  </p>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Instructions
                  </label>
                  <textarea
                    {...register("instructions", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={3}
                  ></textarea>
                </div>
                {errors.instructions && (
                  <p className="text-sm text-red-500 my-1">
                    Please add some instructions.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded mt-2"
                >
                  Update Recipe
                </button>
              </form>
            </div>
          </div>
        </div>
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

export default RecipeDetail;
