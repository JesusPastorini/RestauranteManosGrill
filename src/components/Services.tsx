import React from 'react';
import { IoLogoNoSmoking } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { BiAccessibility } from "react-icons/bi";
import { GiCharging } from "react-icons/gi";
import { MdOutlineDeck } from "react-icons/md";

const services = [
    { icon: IoLogoNoSmoking, name: 'Proibido Fumar' },
    { icon: FaWifi, name: 'Wi-Fi' },
    { icon: BiAccessibility, name: 'Acessibilidade' },
    { icon: GiCharging, name: 'Carregamento de Celular' },
    { icon: MdOutlineDeck, name: 'Deck' },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="container mx-auto my-16">
            <h2 className="text-4xl font-bold text-center mb-8">Serviços</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {services.map((service, index) => (
                    <div key={index} className="text-center">
                        <service.icon className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-xl">{service.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
