// src/components/ProductOptions/index.jsx
import React, { useState } from 'react';

const ProductOptions = ({ options, shape, radius, type }) => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="flex gap-4 mt-2">
            {options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => setSelected(index)}
                    style={{
                        borderRadius: shape === 'circle' ? '50%' : radius,
                        width: shape === 'circle' ? '31px' : 'auto',
                        height: shape === 'circle' ? '31px' : '46px',
                        border: selected === index ? '2px solid #C92071' : '1px solid #CCCCCC',
                    }}
                    className="flex items-center justify-center cursor-pointer"
                >
                    {type === 'text' ? (
                        <span style={{ fontSize: '24px', color: '#666666' }}>{option}</span>
                    ) : (
                        <div style={{ backgroundColor: option, width: '100%', height: '100%' }} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductOptions;