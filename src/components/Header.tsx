import React, { useEffect, useState } from 'react';
import logo from '../assets/logoManos.png';
import ifoodIcon from '../assets/ifood.png';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 w-full bg-white ${isScrolled ? 'bg-opacity-80' : 'bg-opacity-0'} shadow-md z-50 transition duration-1000`}>
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Restaurante Logo" width={100} height={100} className="h-12" />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="https://www.ifood.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={ifoodIcon} alt="iFood" width={100} height={100} className="h-8" />
                    </a>
                </div>
                <nav className="flex flex-grow justify-end">
                    <ul className="flex space-x-4">
                        <li><a href="#menu" className="text-gray-800 hover:text-gray-600">Menu</a></li>
                        <li><a href="#services" className="text-gray-800 hover:text-gray-600">Serviços</a></li>
                        <li><a href="#location" className="text-gray-800 hover:text-gray-600">Localização</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
