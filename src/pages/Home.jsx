import React, { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { favorites } = useContext(FavoritesContext);

  const searchRecipes = async query => {
    if (!query) return;
    setIsLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Site Header */}
      <header className="p-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-2">Recipe Finder</h1>
        <p className="text-lg text-gray-500">Discover recipes & save your favorites</p>
      </header>
      {/* Beautiful Search Bar */}
      <div className="flex justify-center mb-6">
        <SearchBar onSearch={searchRecipes} />
      </div>
      {/* Favorites Section */}
      {favorites.length > 0 && (
        <section className="mx-auto max-w-5xl mb-8">
          <h2 className="text-2xl font-bold text-pink-600 mb-4">My Favorites</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {favorites.map(recipe => (
              <div key={recipe.idMeal} className="border rounded shadow bg-white p-2">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded h-36 object-cover" />
                <p className="text-center font-medium mt-2">{recipe.strMeal}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Search Results Section */}
      <main className="mx-auto max-w-5xl pb-8">
        <RecipeList recipes={recipes} isLoading={isLoading} />
      </main>
    </div>
  );
}
