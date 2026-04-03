import React, { useState } from 'react';

function AddRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    time: '',
    difficulty: '',
    ingredients: '',
    instructions: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Recipe added successfully! (Demo only)');
    console.log(formData);
  };

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Add New Recipe</h1>
      </header>

      <div className="form-container">
        <form className="recipe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Title <span className="required">*</span>
            </label>
            <input 
              type="text"
              name="title"
              className="form-input"
              placeholder="Recipe title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Category</label>
              <select 
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="healthy">Healthy</option>
                <option value="quick">Quick & Easy</option>
                <option value="desserts">Desserts</option>
                <option value="vegetarian">Vegetarian</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Cooking Time</label>
              <input 
                type="text"
                name="time"
                className="form-input"
                placeholder="e.g., 30 min"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Difficulty</label>
            <select 
              name="difficulty"
              className="form-select"
              value={formData.difficulty}
              onChange={handleChange}
            >
              <option value="">Select difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Ingredients</label>
            <textarea 
              name="ingredients"
              className="form-textarea"
              placeholder="List ingredients separated by commas..."
              value={formData.ingredients}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Instructions</label>
            <textarea 
              name="instructions"
              className="form-textarea"
              placeholder="Step by step instructions..."
              value={formData.instructions}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">Recipe Image</label>
            <div className="image-upload">
              <i className="fas fa-cloud-upload-alt"></i>
              <p>Click to upload image</p>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            <i className="fas fa-plus"></i> Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipe;