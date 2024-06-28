import React from 'react';
import bifeImage from '../assets/buffet1.jpg';
import ifoodImage from '../assets/marmita2.jpeg';

const SpecialAndIfood: React.FC = () => {
    return (
        <section className="container mx-auto my-16">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <img src={bifeImage} alt="Bife" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 p-12">
                    <h2 className="text-4xl font-bold">Especial do Dia</h2>
                    <p className="text-xl mt-4">Delicioso bife com acompanhamentos por apenas R$ 49,90</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 p-12">
                    <h2 className="text-4xl font-bold">Peça pelo iFood</h2>
                    <p className="text-xl mt-4">Faça seu pedido pelo iFood e receba no conforto de sua casa.</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={ifoodImage} alt="iFood" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}

export default SpecialAndIfood;
