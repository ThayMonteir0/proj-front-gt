// src/pages/ProductViewPage.js
import React from 'react';
import Gallery from '../components/Gallery';
import ProductOptions from '../components/ProductOptions';
import BuyBox from '../components/BuyBox';
import ProductListing from '../components/ProductListing';

const ProductViewPage = () => {
  const product = {
    id: 1,
    name: 'Nome do Produto',
    reference: 'REF12345',
    price: 199.99,
    priceDiscount: 149.99,
    description: 'Descrição do produto...',
    stars: 4.5,
    rating: 150,
    images: [
      { src: '/product-image-1.png' },
      { src: '/product-image-2.png' },
    ],
    options: {
      size: ['39', '41', '42'],
      color: ['#000', '#111', '#222'],
    },
  };

  const recommendedProducts = [
    {
      name: 'Produto 1',
      image: 'https://url.imagem/do/produto1.png',
      price: 200,
      priceDiscount: 149.9,
    },
    {
      name: 'Produto 2',
      image: 'https://url.imagem/do/produto2.png',
      price: 49.9,
    },
  ];

  return (
    <div className="product-view-page">
      <div className="product-view">
        <Gallery
          images={product.images}
          showThumbs={true}
          width="700px"
          height="570px"
          radius="4px"
        />
        <BuyBox
          name={product.name}
          reference={product.reference}
          stars={product.stars}
          rating={product.rating}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
        >
          <ProductOptions
            options={product.options.size}
            radius="4px"
            shape="square"
            type="text"
          />
          <ProductOptions
            options={product.options.color}
            radius="50%"
            shape="circle"
            type="color"
          />
        </BuyBox>
      </div>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{ text: 'Ver todos', href: '/products' }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;
