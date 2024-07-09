import bifeImage from '../assets/buffet1.jpg';
import marmImage from '../assets/marmita2.jpeg';
import ifoodIcone from '../assets/ifood.svg';
import imgOfert from '../assets/Tabela1.jpeg';
import imgIfood from '../assets/iFood1.jpeg';
import '../components/SpecialAndIfood.css';

const SpecialAndIfood: React.FC = () => {
    return (
        <section id="Buffet" className="container mx-auto my-16 bg-white">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2">
                    <img src={bifeImage} alt="Bife" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2">
                    <img src={imgOfert} alt="Oferta" className="w-full h-auto" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="relative w-full md:w-1/2">
                    <img src={imgIfood} alt="Oferta" className="w-full h-auto" />
                    <a href="https://www.ifood.com.br/delivery/novo-hamburgo-rs/restaurante-manos-grill-centro/02ddffd4-2424-4f45-9b56-479ad19e4b4b" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2 -translate-y-1/4 icon-border w-20 h-14 md:w-16 md:h-14 lg:w-28 lg:h-20">
                            <img src={ifoodIcone} alt="iFood" className="w-32 h-auto" />
                        </div>
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={marmImage} alt="Marmita" className="w-full h-auto" />
                </div>
            </div>
        </section>
    );
}

export default SpecialAndIfood;
