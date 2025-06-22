import React from "react";

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <span className="text-sm">&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    LinkedIn
                </a>
                <a href="mailto:tuemail@ejemplo.com" className="hover:text-white transition">
                    Contacto
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;