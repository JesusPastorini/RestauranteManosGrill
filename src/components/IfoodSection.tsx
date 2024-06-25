import React from 'react';
import ifoodImage from '../assets/ifood.png';

const IfoodSection: React.FC = () => {
    return (
        <section className="container mx-auto my-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-8">
                <h2 className="text-4xl font-bold">Peça pelo iFood</h2>
                <p className="text-xl mt-4">Faça seu pedido pelo iFood e receba no conforto de sua casa.</p>
            </div>
            <img src={ifoodImage} alt="iFood" width={100} height={100} className="w-full md:w-1/2 h-auto" />
        </section>
    );
}

export default IfoodSection;
