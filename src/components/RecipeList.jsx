import { Link } from 'react-router-dom';

export default function RecipeList({ recipes, isLoading }) {
  if (isLoading) return <p className="text-center">Searching for recipes...</p>;
  if (!recipes.length) return <p className="text-center">No results found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
          <div className="border rounded overflow-hidden hover:shadow-lg">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <p className="p-2 text-center font-medium">{recipe.strMeal}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
