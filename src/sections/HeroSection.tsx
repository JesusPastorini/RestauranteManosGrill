import { Typewriter } from 'react-simple-typewriter';
import heroImage from '../assets/buffet1.jpg';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="font-serif text-orange-300 text-5xl font-bold">
                    <Typewriter
                        words={['Bem-vindos ao Restaurante', 'Mano\'s Grill']}
                        loop={0} // loop infinito
                        typeSpeed={100} // Velocidade de digitação
                        deleteSpeed={20}
                        delaySpeed={2000} // Tempo de atraso entre palavras
                    />
                </h1>
            </div>
        </section>
    );
}

export default HeroSection;
