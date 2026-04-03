import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import AddRecipe from './pages/AddRecipe';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Login from './pages/Login';
import CategoryPage from './pages/CategoryPage';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/add" element={<AddRecipe />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;