import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mainContext } from "../Context/MainContext";
import { useForm } from "react-hook-form";

const RecipeDetail = () => {
  const { id } = useParams();
  const [data, setData] = useContext(mainContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const recipe = data.find((item) => parseInt(id) === item.id);

  // Prefill form with recipe data
  useEffect(() => {
    if (recipe) {
      reset({
        image: recipe.image || "",
        title: recipe.title || "",
        chef: recipe.chefName || "",
        category: recipe.category || "",
        description: recipe.description || "",
        ingredients: recipe.ingredients || "",
        instructions: recipe.instructions || "",
      });
    }
  }, [recipe, reset]);

  const updateHandler = (updatedFields) => {
    const updatedData = data.map((item) =>
      item.id === parseInt(id)
        ? { ...item, ...updatedFields, chefName: updatedFields.chef }
        : item
    );
    setData(updatedData);
    reset();
  };

  const deleteRecipe = () => {
    const updatedRecipe = data.filter((item) => item.id !== parseInt(id));
    setData(updatedRecipe);
    navigate("/recpie");
  };

  return (
    <>
      {recipe ? (
        <div className="min-h-screen p-10 font-[Inter]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            {/* Left Side: Recipe Display Card */}
            <div className="md:w-1/2 bg-white rounded-xl shadow-md overflow-hidden p-4">
              <img
                src={recipe?.image || "https://source.unsplash.com/600x400/?food"}
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
                <strong>Description:</strong> {recipe.description || "No description available."}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> {recipe.ingredients || "No ingredients listed."}
              </p>
              <p className="text-gray-700">
                <strong>Instructions:</strong> {recipe.instructions || "No instructions available."}
              </p>
            </div>

            {/* Right Side: Update Form */}
            <div className="md:w-1/2 bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Update Recipe</h3>
              <form className="space-y-4" onSubmit={handleSubmit(updateHandler)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    {...register("image", { required: true })}
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.image && <p className="text-sm text-red-500">Please add some url.</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    {...register("title", { required: true })}
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.title && <p className="text-sm text-red-500">Please add a title.</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Chef Name</label>
                  <input
                    {...register("chef", { required: true })}
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.chef && <p className="text-sm text-red-500">Please add a chef name.</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
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
                  {errors.category && <p className="text-sm text-red-500">Please select a category.</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    {...register("description", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={2}
                  />
                  {errors.description && <p className="text-sm text-red-500">Please add a description.</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ingredients</label>
                  <textarea
                    {...register("ingredients", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={2}
                  />
                  {errors.ingredients && <p className="text-sm text-red-500">Please add ingredients.</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Instructions</label>
                  <textarea
                    {...register("instructions", { required: true })}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={3}
                  />
                  {errors.instructions && <p className="text-sm text-red-500">Please add instructions.</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded mt-2"
                >
                  Update Recipe
                </button>
                <button
                  onClick={deleteRecipe}
                  type="button"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-2"
                >
                  Delete Recipe
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
