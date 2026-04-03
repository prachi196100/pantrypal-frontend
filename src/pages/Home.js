import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import RecipeCard from '../components/RecipeCard';
import { recipesData } from '../data/recipes';

function Home() {
  const categories = [
    { id: 1, name: 'Healthy', count: 12, icon: '🥦', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
    { id: 2, name: 'Quick & Easy', count: 8, icon: '⚡', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
    { id: 3, name: 'Desserts', count: 15, icon: '🍰', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400' },
    { id: 4, name: 'Vegetarian', count: 10, icon: '🥗', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400' }
  ];

  // Get first 3 recipes as featured
  const featuredRecipes = recipesData.slice(0, 3);

  return (
    <div>
      {/* Discount Banner */}
      <div className="discount-banner">
        🎉 New Users: Get 50% OFF Premium Recipes! Limited Time Only 🎉
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Categories Section */}
      <div className="section-header">
        <h2 className="section-title">Browse Categories</h2>
        <Link to="/search">
          <button className="view-all-btn">View All</button>
        </Link>
      </div>

      <div className="categories-section">
        <div className="category-grid">
          {categories.map(cat => (
            <Link to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-')}`} key={cat.id} className="category-card">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <div className="category-info">
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-recipes">{cat.count} recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Recipes */}
      <div className="section-header">
        <h2 className="section-title">Featured Recipes</h2>
        <Link to="/search">
          <button className="view-all-btn">View All</button>
        </Link>
      </div>

      <div className="recipes-section">
        <div className="recipes-grid">
          {featuredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;