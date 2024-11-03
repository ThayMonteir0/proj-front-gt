import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-auto">
                {products.slice(0, 8).map((product, index) => (
                    <ProductCard key={index} product={product} showDiscount={index < 2} />
                ))}
            </div>
        </div>
    );
};

export default ProductListing;