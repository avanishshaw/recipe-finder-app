import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/lookup.php?i=${recipeId}`)
      .then(res => res.json())
      .then(data => setRecipe(data.meals[0]));
  }, [recipeId]);

  const getIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${ingredient} - ${measure}`);
      }
    }
    return ingredients;
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500">&larr; Back to search</Link>
      <h1 className="text-2xl font-bold">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt="" className="w-full md:w-1/2 my-4" />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p className="my-4">{recipe.strInstructions}</p>
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc ml-6">
        {getIngredients().map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
