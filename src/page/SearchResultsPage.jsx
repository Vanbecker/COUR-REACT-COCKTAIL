import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResultsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');

    const [cocktails, setCocktails] = useState([]);
    const [searchError, setSearchError] = useState(false);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                if (data.drinks) {
                    setCocktails(data.drinks);
                    setSearchError(false);
                } else {
                    setCocktails([]);
                    setSearchError(true);
                }
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCocktails();
    }, [search]);

    return (
        <div className="container mt-4">
            {searchError ? (
                <h1>Aucun résultat pour "{search}"</h1>
            ) : (
                <>
                    <h1>Résultats de recherche pour "{search}"</h1>
                    <div className="row">
                        {cocktails.map((cocktail) => (
                            <div key={cocktail.idDrink} className="col-md-4 mb-4">
                                <div className="card">
                                    <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink} />
                                    <div className="card-body">
                                        <h5 className="card-title">{cocktail.strDrink}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchResultsPage;




