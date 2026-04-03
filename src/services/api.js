import axios from 'axios';

// YOUR BACKEND URL - Replace with your actual backend URL
const API_URL = 'https://pantrypal-backend.vercel.app';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const register = (data) => api.post('/api/auth/register', data);
export const login = (data) => api.post('/api/auth/login', data);
export const getProfile = () => api.get('/api/auth/me');
export const toggleFavorite = (recipeId) => api.post(`/api/auth/favorites/${recipeId}`);
export const getFavorites = () => api.get('/api/auth/favorites');

// Recipe APIs
export const getRecipes = () => api.get('/api/recipes');
export const getRecipe = (id) => api.get(`/api/recipes/${id}`);
export const createRecipe = (data) => api.post('/api/recipes', data);
export const updateRecipe = (id, data) => api.put(`/api/recipes/${id}`, data);
export const deleteRecipe = (id) => api.delete(`/api/recipes/${id}`);
export const searchRecipes = (params) => api.get('/api/recipes/search', { params });

export default api;