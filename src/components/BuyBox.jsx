// src/components/BuyBox.js
import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '../assets/star-icon.svg';

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="buy-box">
      <h2 style={{ fontSize: '32px', color: '#1F1F1F' }}>{name}</h2>
      <p style={{ fontSize: '12px', color: '#474747' }}>Ref: {reference}</p>

      <div className="rating">
        <span style={{ fontSize: '14px', color: '#F6AA1C' }}>{stars}</span>
        <img src={StarIcon} alt="star" />
        <span style={{ fontSize: '14px', color: '#8F8F8F' }}>{rating} avaliações</span>
      </div>

      <div className="price">
        <span style={{ fontSize: '32px', color: '#474747' }}>R${price}</span>
        {priceDiscount && (
          <span style={{ fontSize: '16px', color: '#CCCCCC', textDecoration: 'line-through' }}>
            R${price}
          </span>
        )}
        {priceDiscount && <span style={{ fontSize: '32px', color: '#474747' }}>R${priceDiscount}</span>}
      </div>

      <p style={{ fontSize: '14px', color: '#474747' }}>{description}</p>

      {children}

      <Link to={`/cart`} className="buy-button">
        <button style={{ backgroundColor: '#F6AA1C', color: 'white', fontSize: '16px' }}>
          Comprar
        </button>
      </Link>
    </div>
  );
};

export default BuyBox;
