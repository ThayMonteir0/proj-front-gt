import React from 'react';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-dark-gray">{name}</h1>
            <p className="text-sm text-light-gray-2">Ref: {reference}</p>
            <div className="flex items-center gap-2">
                <span className="flex items-center justify-center bg-warning rounded-lg text-white px-2">
                    {stars}★
                </span>
                <span className="text-light-gray">{rating} avaliações</span>
            </div>
            <div className="flex items-center gap-2">
                {priceDiscount && (
                    <>
                        <span className="text-xl text-light-gray-2 line-through">R${price}</span>
                        <span className="text-2xl text-dark-gray-2">R${priceDiscount}</span>
                    </>
                )}
                {!priceDiscount && <span className="text-2xl text-dark-gray-2">R${price}</span>}
            </div>
            <p className="text-sm text-dark-gray-2">{description}</p>
            {children}
            <button className="bg-warning text-white py-2 px-4 rounded-md">Comprar</button>
        </div>
    );
};

export default BuyBox;
