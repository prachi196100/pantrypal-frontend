import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality coming soon!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-icon" style={{ margin: '0 auto', width: '60px', height: '60px', fontSize: '1.5rem' }}>
            <i className="fas fa-utensils"></i>
          </div>
        </div>
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to access your recipes</p>

        <div className="social-login">
          <button className="social-btn">
            <i className="fab fa-google" style={{ color: '#ea4335' }}></i>
          </button>
          <button className="social-btn">
            <i className="fab fa-github" style={{ color: '#333' }}></i>
          </button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="email"
              className="form-input"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn" style={{ marginTop: '1rem' }}>
            Sign In
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', color: '#6b7280' }}>
          Don't have an account?{' '}
          <Link to="/" style={{ color: '#f97316', textDecoration: 'none', fontWeight: '500' }}>
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;