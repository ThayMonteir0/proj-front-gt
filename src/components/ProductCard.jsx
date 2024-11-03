import React from 'react';

const ProductCard = ({ product, showDiscount }) => {
  const { name, image, description, price, priceDiscount } = product;

  return (
    <div className="relative p-4 border rounded-lg mb-4">
      <img src={image} alt={name} className="w-full h-auto mb-4" />
      
      {/* Indicador de desconto somente se showDiscount for true */}
      {showDiscount && priceDiscount && (
        <div className="absolute top-2 left-2 bg-yellow-light text-black font-bold text-sm rounded-lg px-2 py-1">
          30%
        </div>
      )}

      <h3 className="text-sm text-light-gray">{name}</h3>
      <p className="text-light-gray-2 mb-2">{description}</p>
      <div className="flex items-center space-x-2">
        {priceDiscount && (
          <span className="text-light-gray line-through">R${price.toFixed(2)}</span>
        )}
        <span className="text-dark-gray font-semibold">
          R${priceDiscount ? priceDiscount.toFixed(2) : price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
