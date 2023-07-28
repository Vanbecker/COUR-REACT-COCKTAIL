
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

import HomePage from './HomePage';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCocktails from './AllCocktails';
import RandomCocktail from './RandomCocktail';
import RandomCocktails from './RandomCocktails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllCocktails" element={<AllCocktails />} />
        <Route path="/Random-cocktail" element={<RandomCocktail />} />
        <Route path="/Random-cocktails" element={<RandomCocktails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
