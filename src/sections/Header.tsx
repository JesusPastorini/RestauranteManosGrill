import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logoManos.png';
import ifoodIcon from '../assets/ifood.svg';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
            <div className="container mx-auto flex items-center justify-between font-serif font-bold">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Restaurante Logo" className="w-48 md:w-56" />
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                    <a href="https://www.ifood.com.br/delivery/novo-hamburgo-rs/restaurante-manos-grill-centro/02ddffd4-2424-4f45-9b56-479ad19e4b4b" target="_blank" rel="noopener noreferrer" className="relative group">
                        <img src={ifoodIcon} alt="iFood" className="w-20 h-20 transition-transform transform group-hover:scale-105" />
                        <div className="absolute inset-0 top-9 left-1/2 w-24 h-16 rounded-full border-4 border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </a>
                </div>
                <nav className="flex flex-grow justify-end items-center">
                    <div className="md:hidden flex space-x-4 mr-2">
                        <a href="https://www.facebook.com/rest.manosgrill/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={32} className="text-orange-300" />
                        </a>
                        <a href="https://www.instagram.com/restaurantemanosgrill/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={32} className="text-orange-300" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=%2B555135684494&context=ARAdqdePNYZumfQYCtFscWo720rKsP3XrE-HYyaG78gBE3kFBYh78IFeYu2wdkCNjet0G79VzwgEq96BOt-S6onjZ6A-pDO8PaFUbRdzxmc3c3bD7AahfZqx9Zk9dADhVTib0ctGWn2bRVG53gZerBTXSQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR1PgwTB6zRBDQzcY7mF05opw9C8U-Qhqm_mrjlO9ujvh5poGzqX3CSbUS4_aem_w7rh5yCUNM0PXaQWukKBFA" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={32} className="text-orange-300" />
                        </a>
                    </div>
                    <ul className="hidden md:flex space-x-4 text-xl">
                        <li><a href="#Buffet" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300" onClick={handleMenuToggle}>Buffet</a></li>
                        <li><a href="#services" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300" onClick={handleMenuToggle}>Serviços</a></li>
                        <li><a href="#location" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300" onClick={handleMenuToggle}>Localização</a></li>
                        <li><a href="#faleconosco" className="text-orange-300 hover:text-gray-50 hover:border-b-2 border-orange-300" onClick={handleMenuToggle}>Fale Conosco</a></li>
                    </ul>
                    <button className="md:hidden text-orange-300 border-r border-gray-300 pr-2" onClick={handleMenuToggle}>
                        <FaBars size={35} />
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
