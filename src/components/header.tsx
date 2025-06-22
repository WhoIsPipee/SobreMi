import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 py-4 px-8 text-white flex items-center justify-between">
            <h1 className="m-0 text-3xl font-bold">Sobre Mí</h1>
            <nav className="flex space-x-6">
                <a 
                    href="#about" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    Acerca
                </a>
                <a 
                    href="#projects" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    Proyectos
                </a>
                <a 
                    href="#contact" 
                    className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                    Contacto
                </a>
            </nav>
        </header>
    );
};

export default Header;