import { Link } from 'react-router-dom';
import React from 'react';


const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/AllCocktails">Liste des Cocktails</Link>
                    </li>
                    <li>
                        <Link to="/Random-cocktail">Cocktail Aléatoire</Link>
                    </li>
                    <li>
                        <Link to="/Random-cocktails">Cocktail Aléatoire deux</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
