// src/pages/FavoritesPage.jsx

import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length ? (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {favorites.map(recipe => (
            <li key={recipe.idMeal} className="border rounded p-4">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full mb-2" />
              <p className="font-semibold">{recipe.strMeal}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite recipes yet.</p>
      )}
    </div>
  );
}
