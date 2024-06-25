import React from 'react';

const Location: React.FC = () => {
    return (
        <section id="location" className="my-16">
            <h2 className="text-4xl font-bold text-center mb-8">Localização</h2>
            <div className="w-full h-64">
                <iframe
                    title="Localização do Restaurante"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508764!2d144.95373531531594!3d-37.81627927975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776e3f0f48f15a!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sau!4v1613980339236!5m2!1sen!2sau"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}

export default Location;
