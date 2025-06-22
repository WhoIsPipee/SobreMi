import React from "react";

const Main: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Sobre Mí</h1>
            <p className="text-lg text-gray-600 max-w-xl text-center">
                ¡Hola! Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. 
                Este es el componente principal de mi página personal, construido con React y Tailwind CSS.
            </p>
        </main>
    );
};

export default Main;