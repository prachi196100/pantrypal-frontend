import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home', icon: 'fas fa-home' },
    { path: '/search', name: 'Search', icon: 'fas fa-search' },
    { path: '/add', name: 'Add Recipe', icon: 'fas fa-plus-circle' },
    { path: '/favorites', name: 'Favorites', icon: 'fas fa-heart' },
    { path: '/about', name: 'About', icon: 'fas fa-info-circle' },
    { path: '/login', name: 'Login', icon: 'fas fa-user' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i className="fas fa-utensils"></i>
          </div>
          <span className="logo-text">Pantry<span>Pal</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              <i className={link.icon}></i>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        
        <button className="hamburger" onClick={() => setIsMenuOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close" onClick={() => setIsMenuOpen(false)}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="menu-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              <i className={link.icon}></i>
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div 
        className={`overlay ${isMenuOpen ? 'show' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;
