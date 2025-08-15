import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchRecipes = async (query) => {
    if (!query) return;
    setIsLoading(true);
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/search.php?s=${query}`);
    const data = await res.json();
    setRecipes(data.meals || []);
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar onSearch={searchRecipes} />
      <RecipeList recipes={recipes} isLoading={isLoading} />
    </>
  );
}

