import React from 'react';
import ProductCard from './ProductCard';

const ProductListing = ({ products, columns = "grid-cols-2 md:grid-cols-3" }) => {
  return (
    <div className="flex justify-center">
      <div className={`grid gap-4 mx-auto ${columns}`}>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            showDiscount={index < 2 && product.priceDiscount !== undefined} // Exibe o desconto apenas nos dois primeiros cards
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
