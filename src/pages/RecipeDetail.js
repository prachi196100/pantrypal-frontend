import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getRecipeById } from '../data/recipes';
import { useFavorites } from '../hooks/useFavorites';

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const recipe = getRecipeById(id);

  if (!recipe) {
    return (
      <div className="empty-state" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <i className="fas fa-exclamation-circle" style={{ fontSize: '4rem', color: '#f97316' }}></i>
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#f97316',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Go Home
        </button>
      </div>
    );
  }

  const favorite = isFavorite(recipe.id);

  return (
    <div className="recipe-detail">
      <div className="recipe-detail-header">
        <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
        
        <Link to="/" className="recipe-detail-back">
          <i className="fas fa-arrow-left"></i>
        </Link>
        
        <button 
          className="recipe-detail-favorite"
          onClick={() => toggleFavorite(recipe.id)}
          style={{ color: favorite ? '#ef4444' : 'inherit' }}
        >
          <i className={`${favorite ? 'fas' : 'far'} fa-heart`}></i>
        </button>
      </div>

      <div className="recipe-detail-content">
        <div className="recipe-detail-badges">
          <span className="detail-badge orange">
            <i className="fas fa-tag"></i> {recipe.category}
          </span>
          <span className="detail-badge">
            <i className="far fa-clock"></i> {recipe.time}
          </span>
          <span className="detail-badge">
            <i className="fas fa-signal"></i> {recipe.difficulty}
          </span>
        </div>

        <h1 className="recipe-detail-title">{recipe.title}</h1>

        <div className="recipe-stats">
          <div className="stat-item">
            <span className="stat-value">{recipe.calories}</span>
            <span className="stat-label">Calories</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{recipe.servings}</span>
            <span className="stat-label">Servings</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{recipe.ingredients.length}</span>
            <span className="stat-label">Ingredients</span>
          </div>
        </div>

        <div className="recipe-detail-section">
          <h3 className="section-heading">
            <i className="fas fa-shopping-basket"></i>
            Ingredients
          </h3>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="recipe-detail-section">
          <h3 className="section-heading">
            <i className="fas fa-list-ol"></i>
            Instructions
          </h3>
          <div className="instructions-text">
            {recipe.instructions.split('\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '1rem' }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;