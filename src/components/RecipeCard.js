import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

function RecipeCard({ recipe }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  const favorite = isFavorite(recipe.id);

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card animate-fade-in">
      <div className="recipe-image-container">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="recipe-image"
        />
        <span className="category-badge">{recipe.category}</span>
        <span className="time-badge">
          <i className="far fa-clock"></i> {recipe.time}
        </span>
        <button 
          className={`favorite-btn ${favorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          <i className={`${favorite ? 'fas' : 'far'} fa-heart`}></i>
        </button>
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-meta">
          <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>
            {recipe.difficulty}
          </span>
          <span><i className="fas fa-fire"></i> {recipe.calories || '350'} cal</span>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;