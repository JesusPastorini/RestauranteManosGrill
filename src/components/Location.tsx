import React from 'react';

const Location: React.FC = () => {
    return (
        <section id="location" className="my-32">
            <h2 className="text-4xl font-bold text-center mb-4">Localização</h2>
            <p className="mb-4 text-center">Av. Pedro Adams Filho, 5662 - Centro, Novo Hamburgo</p>
            <div className="w-full h-96">
                <iframe
                    title="Localização do Restaurante"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.0275298011356!2d-51.13231392911148!3d-29.682765928156186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519429ee54d2df5%3A0x51fbc1e7a48be49!2sRestaurante%20Mano&#39;s%20Grill!5e0!3m2!1spt-BR!2sbr!4v1719461928661!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}

export default Location;
