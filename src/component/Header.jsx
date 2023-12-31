
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    // Chemin d'accès à l'image de votre logo
    // const logoImageSrc = './images/logo192.png'; // {logoImageSrc} 

    // État pour stocker la valeur de la recherche
    const [searchQuery, setSearchQuery] = useState('');

    // Hook navigate pour la redirection
    const navigate = useNavigate();

    // Fonction pour mettre à jour la valeur de la recherche
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Fonction pour gérer la soumission du formulaire de recherche
    const handleSubmit = (e) => {
        e.preventDefault();
        // Effectuer l'action de recherche ici avec la valeur de "searchQuery"
        console.log("Recherche soumise :", searchQuery);
        // Réinitialiser la valeur de la recherche après la soumission du formulaire
        setSearchQuery('');
        // Redirection vers la page des résultats de recherche avec la valeur de l'input dans l'URL
        navigate(`/search-results?search=${searchQuery}`);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* Utilisez la variable "logoImageSrc" comme valeur de l'attribut "src" */}
                <Link className="navbar-brand" to="/"><img src='/images/logo192.png' alt="Logo" /></Link>
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
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/ShowCocktailPage">Cocktail SHOW</Link>
                        </li> */}
                    </ul>
                </div>
                {/* Barre de recherche */}
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Recherche"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-success" type="submit">Rechercher</button>
                </form>
            </div>
        </nav>
    );
};

export default Header;



