import React from 'react';

function About() {
  return (
    <div>
      <div className="about-hero">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200" 
          alt="Cooking"
          className="about-hero-image"
        />
      </div>

      <div className="about-content">
        <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Our Story
        </h1>
        
        <p className="about-text">
          Welcome to <strong>PantryPal</strong>, your digital kitchen companion! We believe that 
          great cooking starts with what you already have. Our mission is to help home cooks 
          discover delicious recipes using ingredients from their pantry.
        </p>
        
        <p className="about-text">
          Founded in 2024, PantryPal began with a simple idea: reduce food waste while 
          making home cooking more accessible and enjoyable. Whether you're a beginner 
          or experienced chef, our curated recipes will inspire your next meal.
        </p>
        
        <p className="about-text">
          Join our community of food lovers and start your culinary journey today!
        </p>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ display: 'inline-flex', gap: '2rem', fontSize: '2rem' }}>
            <span>🍳</span>
            <span>🥗</span>
            <span>🍰</span>
            <span>🍕</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;