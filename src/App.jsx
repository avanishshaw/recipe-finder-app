import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import RecipeDetailPage from './pages/RecipeDetail';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;