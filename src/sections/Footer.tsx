import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logoManos.png';
import devLogo from '../assets/LogoJP.png';

const Footer: React.FC = () => {
    return (
        <div id="faleconosco" className="bg-lime-900">
            <div className="mx-14 mt-14">
                <footer className="footer flex flex-col md:flex-row justify-between items-start">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        <img src={logo} alt="Restaurante Logo" width={500} height={600} className="mb-8" />
                        <p className="text-center md:text-left">© 2024 Mano's Grill. Todos os direitos reservados.</p>
                    </div>

                    <div className="text-left mb-8 md:mb-0 text-white font-serif font-bold">
                        <h3 className="text-lg font-bold ">Horários de Funcionamento</h3>
                        <p>Seg a Sab: 11:30hs – 15hs</p>
                        <br></br>
                        <p>Delivery: Ifood</p>
                        <br></br>
                        <p>Janela de Comida Rápida:</p>
                        <p>a partir das 11:30h</p>
                        <a href="https://portifolio-mu-one-58.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src={devLogo} alt="Logo Desenvolvedor" className="h-12 mt-8" />
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-end justify-start">
                        <h3 className="text-lg font-serif font-bold text-center text-white">Fale Conosco </h3>
                        <br></br>
                        <div className="flex space-x-4 mt-2">
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
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;
