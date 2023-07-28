

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowCocktailPage = () => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        const fetchCocktail = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCocktail();
    }, [id]);

    return (
        <div className="container mt-4">
            {cocktail ? (
                <>
                    <h1>{cocktail.strDrink}</h1>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                    <p>{cocktail.strInstructions}</p>
                </>
            ) : (
                <p>Chargement en cours...</p>
            )}
        </div>
    );
};

export default ShowCocktailPage;

