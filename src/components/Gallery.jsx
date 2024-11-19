import React, { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
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
    const [useImageGallery, setUseImageGallery] = useState(false); // Toggle entre os dois estilos

    const imageGalleryItems = images.map((image) => ({
        original: image.src,
        thumbnail: image.src,
        description: '',
    }));

    return (
        <div className="bg-gray-100 min-h-screen p-5 flex flex-col items-center justify-center">
            {/* Botão para alternar entre os estilos */}
            <button
                className="mb-5 bg-[#eb1177] text-white py-2 px-4 rounded-lg"
                onClick={() => setUseImageGallery(!useImageGallery)}
            >
                {useImageGallery ? 'Usar Estilo Simples' : 'Usar Estilo Avançado'}
            </button>

            {useImageGallery ? (
                // ReactImageGallery
                <div style={{ width: '700px', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
                    <ReactImageGallery
                        items={imageGalleryItems}
                        showThumbs={true}
                        slideDuration={400}
                        showPlayButton={false}
                        showFullscreenButton={false}
                    />
                </div>
            ) : (
                // Estilo simples (seu código original)
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
                        <p className="mb-4">
                            Aproveite esta oportunidade única para adquirir os <br /> icônicos sapatos da Nike com
                            descontos imperdíveis!
                        </p>
                        <button className="bg-[#eb1177] text-white w-48 py-2 mt-2 rounded-lg text-lg font-semibold">
                            Ver Ofertas
                        </button>
                    </div>
                </div>
            )}

            {/* Indicadores para o estilo simples */}
            {!useImageGallery && (
                <div className="flex justify-center mt-2 space-x-2">
                    {images.map((image) => (
                        <span
                            key={image.id}
                            className={`w-3 h-3 rounded-full cursor-pointer ${
                                selectedImage.id === image.id ? 'bg-[#eb1177]' : 'bg-gray-500'
                            }`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;
