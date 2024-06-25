import React from 'react';
import logo from '../assets/logoManos.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer p-8 flex flex-col items-center">
            <div className="p-8 flex flex-col items-center">
                <img src={logo} alt="Restaurante Logo" width={100} height={100} className="h-12 mb-4 md:mb-0" />
                <p className="text-center">© 2024 Restaurante. Todos os direitos reservados.</p>
                <div className="text-center">
                    <p>Desenvolvido por SeuNome</p>
                    <p>Contato: contato@seunome.com</p>
                    <p>Horários: Seg - Dom: 10:00 - 14:00</p>
                    <p>Redes Sociais: Facebook | Instagram | Twitter</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;