import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, register } from '../services/api';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let response;
      
      if (isLogin) {
        // LOGIN - Call backend API
        console.log('Logging in with:', formData.email);
        response = await login({
          email: formData.email,
          password: formData.password
        });
        console.log('Login response:', response.data);
      } else {
        // REGISTER - Call backend API
        console.log('Registering user:', formData.username);
        response = await register({
          username: formData.username,
          email: formData.email,
          password: formData.password
        });
        console.log('Register response:', response.data);
      }

      // Save token and user data to localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('userId', response.data._id);

      alert(isLogin ? '✅ Login successful!' : '✅ Registration successful!');
      navigate('/'); // Go to home page after login
      
    } catch (error) {
      console.error('Auth error:', error);
      setError(
        error.response?.data?.message || 
        '❌ Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-icon" style={{ margin: '0 auto', width: '60px', height: '60px', fontSize: '1.5rem' }}>
            <i className="fas fa-utensils"></i>
          </div>
        </div>
        
        <h2 className="login-title">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="login-subtitle">
          {isLogin ? 'Sign in to access your recipes' : 'Join PantryPal today'}
        </p>

        {error && (
          <div style={{
            background: '#fee2e2',
            color: '#991b1b',
            padding: '0.75rem',
            borderRadius: '8px',
            marginBottom: '1rem',
            fontSize: '0.9rem'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <input 
                type="text"
                name="username"
                className="form-input"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required={!isLogin}
              />
            </div>
          )}

          <div className="form-group">
            <input 
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input 
              type="password"
              name="password"
              className="form-input"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            style={{ marginTop: '1rem' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Please wait...
              </>
            ) : (
              isLogin ? 'Sign In' : 'Create Account'
            )}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', color: '#6b7280' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            style={{
              color: '#f97316',
              textDecoration: 'none',
              fontWeight: '600',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {isLogin ? 'Get Started' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;