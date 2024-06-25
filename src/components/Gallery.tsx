import React from 'react';

import ex2 from '../assets/buffet1.jpg';
import ex3 from '../assets/oferrtBuffet.jpeg';
import ex4 from '../assets/react.svg';
const Gallery: React.FC = () => {
    const images = [
        ex2, ex3, ex3, ex4
    ];

    return (
        <section className="container mx-auto my-16">
            <h2 className="text-4xl font-bold text-center mb-8">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Foto ${index + 1}`} className="w-full h-auto object-cover" />
                ))}
            </div>
            <div className="mt-8 p-4 bg-gray-100 text-center">
                <p className="text-xl">Conheça mais sobre o nosso buffet e os deliciosos pratos que preparamos especialmente para você.</p>
            </div>
        </section>
    );
}

export default Gallery;
