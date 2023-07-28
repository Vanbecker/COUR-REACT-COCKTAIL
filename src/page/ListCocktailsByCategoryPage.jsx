import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ListCocktailsByCategoryPage = () => {
    const { categoryName } = useParams();
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchCocktailsByCategory = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`);
                if (!response.ok) {
                    throw new Error('Réponse ok');
                }
                const data = await response.json();
                setCocktails(data.drinks);
            } catch (error) {
                console.error('Pas de réponse:', error);
            }
        };

        fetchCocktailsByCategory();
    }, [categoryName]);

    return (
        <div className="container mt-4">
            <h1 className="text-center">Cocktails de la catégorie "{categoryName}"</h1>
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

export default ListCocktailsByCategoryPage;
