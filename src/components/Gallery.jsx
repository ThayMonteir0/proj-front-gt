import React, { useState, useEffect } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import nikeAirImage from '../assets/nikeAir.svg';
import estoqueImage from '../assets/qEstoque.png';

const Gallery = ({ customImages, showThumbs, width, height, radius }) => {
  // Se customImages for fornecido, usamos ele; caso contrário, usamos o padrão local
  const defaultImages = [
    { id: 1, src: nikeAirImage },
    { id: 2, src: nikeAirImage },
    { id: 3, src: nikeAirImage },
    { id: 4, src: nikeAirImage },
  ];
  const images = customImages || defaultImages;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isProductViewPage, setIsProductViewPage] = useState(false);

  useEffect(() => {
    // Verifica se estamos na ProductViewPage com base na URL
    setIsProductViewPage(window.location.pathname.includes('productviewpage'));
  }, []);

  const imageGalleryItems = images.map((image) => ({
    original: image.src,
    thumbnail: image.src,
    description: '',
  }));

  return (
    <div className="p-5 flex flex-col items-center justify-center">
      {/* Condiciona a exibição da galeria com base na página */}
      {isProductViewPage ? (
        // Estilo avançado com ReactImageGallery
        <div
          style={{
            width: width || '100%',
            height: height || '500px',
            borderRadius: radius || '8px',
            overflow: 'hidden',
          }}
        >
          <ReactImageGallery
            items={imageGalleryItems}
            showThumbs={showThumbs !== undefined ? showThumbs : true}
            slideDuration={400}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      ) : (
        // Estilo simples para HomePage
        <div className="flex items-center gap-10 flex-row-reverse mt-5">
          <div className="w-full md:w-[700px]">
            {selectedImage ? (
              <img
                src={selectedImage.src}
                alt="Sapato Nike"
                className="w-full object-cover rounded-md"
                style={{ borderRadius: radius }}
              />
            ) : (
              <p className="text-center text-gray-600">Imagem não encontrada</p>
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

      {/* Indicadores para o estilo simples (só aparece na HomePage) */}
      {!isProductViewPage && (
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
