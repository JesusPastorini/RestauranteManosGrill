import React from 'react';
import bifeImage from '../assets/buffet1.jpg';

const SpecialDish: React.FC = () => {
    return (
        <section className="container mx-auto my-16 flex flex-col md:flex-row items-center">
            <img src={bifeImage} alt="Bife" className="w-full md:w-1/2 h-auto" />
            <div className="w-full md:w-1/2 p-8">
                <h2 className="text-4xl font-bold">Especial do Dia</h2>
                <p className="text-xl mt-4">Delicioso bife com acompanhamentos por apenas R$ 49,90</p>
            </div>
        </section>
    );
}

export default SpecialDish;
