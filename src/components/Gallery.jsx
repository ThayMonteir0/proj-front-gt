import React, { useState } from 'react';
import nikeAirImage from '../assets/nikeAir.svg';
import estoqueImage from '../assets/qEstoque.png';

const Gallery = () => {
    const images = [
        { id: 1, src: nikeAirImage },
        { id: 2, src: nikeAirImage },
        { id: 3, src: nikeAirImage },
        { id: 4, src: nikeAirImage },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="bg-gray-100 min-h-screen p-5 flex flex-col items-center justify-center">
            <div className="flex items-center gap-10 flex-row-reverse">
                <div className="w-[700px]">
                    {selectedImage ? (
                        <img src={selectedImage.src} alt="Sapato Nike" className="w-full object-cover rounded-md" />
                    ) : (
                        <p className="text-center text-gray-600"></p>
                    )}
                </div>
                <div className="text-content text-left">
                    <h1 className="text-2xl text-[#F6AA1C] mb-2">Melhores ofertas personalizadas</h1>
                    <img src={estoqueImage} alt="Queima de Estoque" />
                    <p className="mb-4">Aproveite esta oportunidade única para adquirir os <br /> icônicos sapatos da Nike com descontos imperdíveis!</p>
                    <button className="bg-[#eb1177] text-white w-48 py-2 mt-2 rounded-lg text-lg font-semibold">
                        Ver Ofertas
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-2 space-x-2">
                {images.map((image) => (
                     <span
                     key={image.id}
                     className={`w-3 h-3 rounded-full cursor-pointer ${selectedImage.id === image.id ? 'bg-[#eb1177]' : 'bg-gray-500'}`}
                     onClick={() => setSelectedImage(image)}
                 />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
