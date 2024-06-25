import React from 'react';
import heroImage from '../assets/buffet1.jpg';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-5xl font-bold">Bem-vindo ao Restaurante</h1>
            </div>
        </section>
    );
}

export default HeroSection;
