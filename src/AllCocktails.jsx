


////

import React, { useState, useEffect } from 'react';

const AllCocktails = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchCocktails = async () => {
            try {
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setCocktails(data.drinks);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCocktails();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Liste des cocktails</h1>
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
        </div>
    );
};

export default AllCocktails;

