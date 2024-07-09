import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RxExitFullScreen } from "react-icons/rx";

import img1 from '../assets/gal1.jpg';
import img2 from '../assets/gal2.jpg';
//import img3 from '../assets/gal3.jpg';
import img4 from '../assets/gal4.jpg';
import img5 from '../assets/gal7.jpeg';
import img6 from '../assets/gal6.jpeg';

const Gallery: React.FC = () => {
    const images = [
        img1, img2, img4, img5, img6
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [interactingWithSlider, setInteractingWithSlider] = useState(false);

    const openModal = (image: string) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleBeforeChange = () => {
        setInteractingWithSlider(true);
    };

    const handleAfterChange = () => {
        setInteractingWithSlider(false);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: handleBeforeChange,
        afterChange: handleAfterChange,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="container mx-auto my-16 bg-amber-100">
            <h2 className="text-4xl font-serif font-bold text-center mb-8 mt-5">Galeria de Fotos</h2>
            <div className="overflow-hidden h-64">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="px-2">
                            <img
                                src={image}
                                alt={`Foto ${index + 1}`}
                                className="w-full h-full object-cover cursor-pointer transition-transform transform hover:scale-105"
                                onClick={() => {
                                    if (!interactingWithSlider) {
                                        openModal(image);
                                    }
                                }}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="mt-2 p-4 bg-amber-100 text-center">
                <p className="text-xl">Conheça mais sobre o nosso restaurante e os deliciosos pratos que preparamos especialmente para você.</p>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex justify-center items-center" onClick={closeModal}>
                    <button className="absolute top-4 right-4 text-white text-xl" onClick={closeModal}><RxExitFullScreen /></button>
                    <img src={selectedImage} alt="Imagem em tamanho grande" className="max-w-full max-h-full" />
                </div>
            )}
        </section>
    );
}

export default Gallery;
