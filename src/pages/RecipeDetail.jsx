import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const { favorites, dispatch } = useContext(FavoritesContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then(res => res.json())
      .then(data => setRecipe(data.meals[0]));
  }, [recipeId]);

  if (!recipe) return <p>Loading...</p>;

  // Ingredient parsing logic
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ing && ing.trim()) ingredients.push(`${ing} - ${measure}`);
  }

  const isFavorited = favorites.some(f => f.idMeal === recipe.idMeal);

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600">&larr; Back to search</Link>
      <h1 className="text-2xl my-2">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full max-w-sm mb-4" />
      <button
        className={`px-4 py-2 rounded ${
          isFavorited ? "bg-red-400" : "bg-green-400"
        } text-white mb-4`}
        onClick={() => {
          if (isFavorited)
            dispatch({ type: "REMOVE_FAVORITE", payload: recipe.idMeal });
          else dispatch({ type: "ADD_FAVORITE", payload: recipe });
        }}
      >
        {isFavorited ? "Remove from Favorites 💔" : "Add to Favorites ❤️"}
      </button>
      <p className="mb-2"><strong>Category:</strong> {recipe.strCategory}</p>
      <p className="mb-2">{recipe.strInstructions}</p>
      <h2 className="text-xl mt-4 mb-2 font-semibold">Ingredients</h2>
      <ul className="list-disc ml-6">
        {ingredients.map((ing, ix) => (
          <li key={ix}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
