import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RxExitFullScreen } from "react-icons/rx";

import ex2 from '../assets/buffet1.jpg';

const Gallery: React.FC = () => {
    const images = [
        ex2, ex2, ex2
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
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
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
        <section className="container mx-auto my-16">
            <h2 className="text-4xl font-bold text-center mb-8">Galeria de Fotos</h2>
            <div className="overflow-hidden h-96">
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
            <div className="mt-8 p-4 bg-gray-100 text-center">
                <p className="text-xl">Conheça mais sobre o nosso buffet e os deliciosos pratos que preparamos especialmente para você.</p>
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
