import React, { useState, useMemo } from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipesData } from '../data/recipes';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [timeLimit, setTimeLimit] = useState('any');
  const [difficulty, setDifficulty] = useState('any');

  // Use data from our recipes file
  const allRecipes = recipesData;

  // Filter and sort recipes
  const filteredRecipes = useMemo(() => {
    let result = [...allRecipes];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(r => 
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (category !== 'all') {
      result = result.filter(r => r.category.toLowerCase() === category.toLowerCase());
    }

    // Filter by time limit
    if (timeLimit !== 'any') {
      const maxTime = parseInt(timeLimit);
      result = result.filter(r => r.timeValue <= maxTime);
    }

    // Filter by difficulty
    if (difficulty !== 'any') {
      result = result.filter(r => r.difficulty.toLowerCase() === difficulty.toLowerCase());
    }

    // Sort by time (shortest first)
    result.sort((a, b) => a.timeValue - b.timeValue);

    return result;
  }, [searchTerm, category, timeLimit, difficulty]);

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Search Recipes</h1>
        <p className="page-subtitle">Find your perfect meal</p>
      </header>

      <div className="search-section">
        <div className="search-container">
          <div className="search-box">
            <i className="fas fa-search search-icon"></i>
            <input 
              type="text"
              className="search-input"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filters-row">
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <select 
                className="filter-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="healthy">Healthy</option>
                <option value="quick & easy">Quick & Easy</option>
                <option value="desserts">Desserts</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Time Limit</label>
              <select 
                className="filter-select"
                value={timeLimit}
                onChange={(e) => setTimeLimit(e.target.value)}
              >
                <option value="any">Any Time</option>
                <option value="15">Under 15 min</option>
                <option value="30">Under 30 min</option>
                <option value="60">Under 1 hour</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Difficulty</label>
              <select 
                className="filter-select"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        <p className="sort-info">
          Showing <span>{filteredRecipes.length}</span> recipes 
          {category !== 'all' && ` in ${category}`}
          {timeLimit !== 'any' && ` under ${timeLimit} min`}
        </p>

        {filteredRecipes.length > 0 ? (
          <div className="recipes-grid">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <i className="fas fa-search"></i>
            <h3>No recipes found</h3>
            <p>Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;