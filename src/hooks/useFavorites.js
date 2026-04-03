import { useState, useEffect } from 'react';

// Custom hook to manage favorites with localStorage
export function useFavorites() {
  // Initialize state from localStorage or empty array
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('pantrypal_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('pantrypal_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add a recipe to favorites
  const addFavorite = (recipeId) => {
    setFavorites((prev) => {
      if (prev.includes(recipeId)) return prev;
      return [...prev, recipeId];
    });
  };

  // Remove a recipe from favorites
  const removeFavorite = (recipeId) => {
    setFavorites((prev) => prev.filter((id) => id !== recipeId));
  };

  // Toggle favorite status
  const toggleFavorite = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  // Check if a recipe is favorite
  const isFavorite = (recipeId) => favorites.includes(recipeId);

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}