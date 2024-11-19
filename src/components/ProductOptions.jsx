// src/components/ProductOptions.js
import React, { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <div className="product-options">
      {options.map((option, index) => {
        const isSelected = selected === option;
        return (
          <div
            key={index}
            onClick={() => handleSelect(option)}
            className={`option ${shape} ${type} ${isSelected ? 'selected' : ''}`}
            style={{
              borderRadius: shape === 'square' ? radius : '50%',
              backgroundColor: type === 'color' ? option : 'transparent',
              border: isSelected ? '2px solid #C92071' : '1px solid #B5B6F2',
              width: shape === 'square' ? '46px' : '31px',
              height: shape === 'square' ? '46px' : '31px',
            }}
          >
            {type === 'text' && <span style={{ fontSize: '24px', color: '#1F1F1F' }}>{option}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;
