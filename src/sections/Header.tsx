import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logoManos.png';
import ifoodIcon from '../assets/ifood.svg';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 w-full ${isScrolled ? 'bg-lime-900 bg-opacity-80' : 'bg-opacity-0'} shadow-md z-50 transition duration-1000`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Restaurante Logo" className="w-48 md:w-56" />
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <a href="https://www.ifood.com.br/delivery/novo-hamburgo-rs/restaurante-manos-grill-centro/02ddffd4-2424-4f45-9b56-479ad19e4b4b?prato=e46d055d-f4c6-49a2-a267-c3ccfc2dd231" target="_blank" rel="noopener noreferrer" className="relative group">
                        <img src={ifoodIcon} alt="iFood" className="w-20 h-20 transition-transform transform group-hover:scale-105" />
                        <div className="absolute inset-0 top-1/2 left-1/2 w-24 h-16 rounded-lg border-4 border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </a>
                </div>
                <nav className="flex flex-grow justify-end items-center">
                    <ul className="hidden md:flex space-x-4 text-xl">
                        <li><a href="#Buffet" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300">Buffet</a></li>
                        <li><a href="#services" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300">Serviços</a></li>
                        <li><a href="#location" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300">Localização</a></li>
                        <li><a href="#faleconosco" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300">Fale Conosco</a></li>
                    </ul>
                    <button className="md:hidden text-orange-300 border-r border-gray-300 pr-2" onClick={handleMenuToggle}>
                        <FaBars size={24} />
                    </button>
                </nav>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-lime-900 bg-opacity-80">
                    <ul className="flex flex-col items-center space-y-4 p-4">
                        <li><a href="#Buffet" className="text-orange-300 hover:text-gray-50" onClick={handleMenuToggle}>Buffet</a></li>
                        <li><a href="#services" className="text-orange-300 hover:text-gray-50" onClick={handleMenuToggle}>Serviços</a></li>
                        <li><a href="#location" className="text-orange-300 hover:text-gray-50" onClick={handleMenuToggle}>Localização</a></li>
                        <li><a href="#faleconosco" className="text-orange-300 hover:text-gray-50" onClick={handleMenuToggle}>Fale Conosco</a></li>
                        <li className="mt-4">
                            <a href="https://www.ifood.com.br/delivery/novo-hamburgo-rs/restaurante-manos-grill-centro/02ddffd4-2424-4f45-9b56-479ad19e4b4b" target="_blank" rel="noopener noreferrer">
                                <img src={ifoodIcon} alt="iFood" className="h-8 transition-transform transform hover:scale-105" />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
