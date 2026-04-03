import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipesData } from '../data/recipes';

function CategoryPage() {
  const { categoryName } = useParams();
  
  // Filter recipes by category
  const recipes = recipesData.filter(recipe => 
    recipe.category.toLowerCase().replace(/ & /g, '-') === categoryName.toLowerCase()
  );

  const categoryIcons = {
    'healthy': '🥦',
    'quick-easy': '⚡',
    'desserts': '🍰',
    'vegetarian': '🥗'
  };

  const displayName = categoryName ? 
    categoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ') : 
    'Category';

  return (
    <div>
      <div className="categories-container">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to Categories
        </Link>

        <div className="category-header">
          <span className="category-icon">
            {categoryIcons[categoryName.toLowerCase()] || '🍽️'}
          </span>
          <div>
            <h1 className="category-title">{displayName}</h1>
            <span className="recipe-count">({recipes.length} recipes)</span>
          </div>
        </div>

        {recipes.length > 0 ? (
          <div className="recipes-grid" style={{ padding: 0 }}>
            {recipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <i className="fas fa-folder-open"></i>
            <h3>No recipes found</h3>
            <p>Check back later for new {displayName} recipes!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;