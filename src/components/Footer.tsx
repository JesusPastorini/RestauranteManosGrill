import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logoManos.png';
import devLogo from '../assets/LogoJP.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer p-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                <img src={logo} alt="Restaurante Logo" width={500} height={600} className="mb-8" />
                <p className="text-center md:text-left">© 2024 Restaurante. Todos os direitos reservados.</p>
            </div>

            <div className="text-center mb-8 md:mb-0">
                <h3 className="text-lg font-bold">Horários</h3>
                <p>FUNCIONANDO APENAS COM RESERVAS PELO 11 3258 2578</p>
                <p>Ter a Dom: 12hs – 17hs e 19hs – 21hs</p>
                <img src={devLogo} alt="Logo Desenvolvedor" className="h-12 mt-32" />
            </div>

            <div className="flex flex-col items-center md:items-end">
                <h3 className="text-lg font-bold">Fale Conosco</h3>
                <div className="flex space-x-4 mt-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
