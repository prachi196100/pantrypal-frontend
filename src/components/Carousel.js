import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200',
      badge: '🔥 Trending Now',
      title: 'Summer Special Recipes',
      desc: 'Fresh and healthy meals perfect for hot days'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200',
      badge: '⚡ Quick & Easy',
      title: '15-Minute Meals',
      desc: 'Delicious recipes for busy weeknights'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200',
      badge: '🍰 Sweet Treats',
      title: 'Weekend Baking',
      desc: 'Indulge in homemade desserts and pastries'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.image} alt={slide.title} className="carousel-image" />
          <div className="carousel-overlay">
            <span className="carousel-badge">{slide.badge}</span>
            <h2 className="carousel-title">{slide.title}</h2>
            <p className="carousel-desc">{slide.desc}</p>
          </div>
        </div>
      ))}
      
      <button className="carousel-nav prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="carousel-nav next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;