import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, showDiscount }) => {
  const { id, name, image, description, price, priceDiscount } = product;
  const navigate = useNavigate();

  // Função para redirecionar ao clicar no card
  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="relative p-4 rounded-lg mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <img src={image} alt={name} className="w-full h-auto mb-4 bg-white" />

      {showDiscount && priceDiscount && (
        <div className="absolute top-8 left-9 bg-yellow-light text-black font-bold text-sm rounded-lg px-2 py-1">
          30%
        </div>
      )}

      <h3 className="text-sm text-light-gray">{name}</h3>
      <p className="text-light-gray-2 mb-2">{description}</p>
      <div className="flex items-center space-x-2">
        {priceDiscount && (
          <span className="text-gray-400 line-through">
            R${price.toFixed(2)}
          </span>
        )}
        <span className="text-dark-gray font-semibold">
          R${priceDiscount ? priceDiscount.toFixed(2) : price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
