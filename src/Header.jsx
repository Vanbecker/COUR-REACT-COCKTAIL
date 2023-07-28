import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    // Chemin d'accès à l'image de votre logo
    const logoImageSrc = './images/logo192.png';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* Utilisez la variable "logoImageSrc" comme valeur de l'attribut "src" */}
                <Link className="navbar-brand" to="/"><img src={logoImageSrc} alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/AllCocktails">Liste des Cocktails</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Random-cocktail">Cocktail Aléatoire</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Random-cocktails">Cocktail Aléatoire deux</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
