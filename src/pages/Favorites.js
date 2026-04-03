import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { useFavorites } from '../hooks/useFavorites';
import { recipesData } from '../data/recipes';

function Favorites() {
  const { favorites } = useFavorites();

  // Get full recipe objects from IDs
  const favoriteRecipes = recipesData.filter((recipe) => 
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">My Favorites</h1>
        <p className="page-subtitle">
          {favoriteRecipes.length} {favoriteRecipes.length === 1 ? 'recipe' : 'recipes'} saved
        </p>
      </header>

      {favoriteRecipes.length > 0 ? (
        <div className="recipes-grid" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {favoriteRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <i className="far fa-heart" style={{ color: '#f97316' }}></i>
          <h3>No favorites yet</h3>
          <p>Start exploring and save recipes you love!</p>
          <Link to="/search">
            <button 
              style={{
                marginTop: '1.5rem',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '500'
              }}
            >
              Browse Recipes
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorites;