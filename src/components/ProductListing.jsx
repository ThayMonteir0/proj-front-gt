import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products, columns = "grid-cols-2 md:grid-cols-3" }) => {
    return (
        <div className="flex justify-center">
            <div className={`grid gap-4 mx-auto ${columns}`}>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} showDiscount={index < 2} />
                ))}
            </div>

            <div className="product-listing">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <span>R${product.price}</span>
                        {product.priceDiscount && <span>R${product.priceDiscount}</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
