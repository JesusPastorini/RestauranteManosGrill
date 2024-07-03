import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import historyImage1 from '../assets/history1.jpg';
import historyImage2 from '../assets/history2.jpg';
import historyImage3 from '../assets/history3.jpg';
import historyImage4 from '../assets/history4.jpg';
import historyImage5 from '../assets/history5.jpg';
import historyImage6 from '../assets/history6.jpg';
import historyVideo from '../assets/history7.mp4';
import historyImage8 from '../assets/history8.jpg';
import historyImage9 from '../assets/history9.jpg';

const IntroModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative max-w-4xl w-full p-6 rounded-lg shadow-lg">
                <Slider {...settings}>
                    <div className="flex justify-center">
                        <img src={historyImage1} alt="História 1" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage2} alt="História 2" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage3} alt="História 3" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage4} alt="História 4" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage5} alt="História 5" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage6} alt="História 6" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <video className="w-full h-auto max-h-96" controls style={{ maxHeight: '600px' }}>
                            <source src={historyVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage8} alt="História 8" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                    <div className="flex justify-center">
                        <img src={historyImage9} alt="História 9" className="w-full h-auto max-h-96 object-contain" style={{ maxHeight: '600px' }} />
                    </div>
                </Slider>
                <button
                    className="absolute top-4 right-4 text-white text-2xl bg-red-600 p-2 rounded"
                    onClick={onClose}
                >
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default IntroModal;
