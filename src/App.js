
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

import HomePage from './page/HomePage';
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCocktails from './page/AllCocktails';
import RandomCocktail from './page/RandomCocktail';
import RandomCocktails from './page/RandomCocktails';
import SearchResultsPage from './page/SearchResultsPage';
import ShowCocktailPage from './page/ShowCocktailPage';
import ListCocktailsByCategoryPage from './page/ListCocktailsByCategoryPage';



function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllCocktails" element={<AllCocktails />} />
        <Route path="/Random-cocktail" element={<RandomCocktail />} />
        <Route path="/Random-cocktails" element={<RandomCocktails />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/cocktails/show/:id" element={<ShowCocktailPage />} />
        <Route path="/cocktails/:categoryName" element={<ListCocktailsByCategoryPage />} />

      </Routes>

      <Footer />

    </BrowserRouter>


  );
}

export default App;
