import React from 'react';

const Footer = () => {
    return (
        // Début du footer avec des classes Bootstrap pour le style
        <footer className="bg-light text-center py-4">
            <div className="container">
                {/* Paragraphe affichant l'année actuelle */}
                <p className="mb-0">&copy; {new Date().getFullYear()}. Tous droits réservés.</p>
                {/* Paragraphe indiquant que le site est réalisé avec React */}
                <p className="mb-0">Site réalisé avec React.</p>
            </div>
        </footer>
        // Fin du footer
    );
};

export default Footer;
