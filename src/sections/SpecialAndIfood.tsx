import bifeImage from '../assets/buffet1.jpg';
import marmImage from '../assets/marmita2.jpeg';
import ifoodIcone from '../assets/ifood.svg';
import imgOfert from '../assets/ofertaManos4.jpeg';
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
                <div className="w-full md:w-1/2 p-12">
                    <h2 className="text-4xl font-bold text-orange-300">Peça pelo iFood</h2>
                    <div className="mt-4 flex items-center">
                        <p className="text-xl">Sua refeição favorita a um clique de distância.</p>
                    </div><br></br>
                    <a href="https://www.ifood.com.br/delivery/novo-hamburgo-rs/restaurante-manos-grill-centro/02ddffd4-2424-4f45-9b56-479ad19e4b4b" target="_blank" rel="noopener noreferrer" className="block mt-4">
                        <div className="icon-border">
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
