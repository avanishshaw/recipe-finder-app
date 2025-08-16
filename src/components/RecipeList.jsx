import React from "react";
import { Link } from "react-router-dom";

export default function RecipeList({ recipes, isLoading }) {
  if (isLoading) return <p className="p-4 text-center text-blue-500 font-medium">Searching for recipes...</p>;
  if (!recipes.length) return <p className="p-4 text-center text-gray-500">No results found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
          <div className="border rounded-lg overflow-hidden bg-white shadow hover:shadow-xl transition">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-36 object-cover"/>
            <p className="p-3 text-center font-semibold text-gray-800">{recipe.strMeal}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
