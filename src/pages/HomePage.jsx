import React, { useState } from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import cam from '../assets/cam.png';
import cal from '../assets/cal.png';
import bon from '../assets/bon.png';
import hea from '../assets/hea.png';
import ten from '../assets/ten.png';
import ProductListing from '../components/ProductListing';
import featuredProducts from '../data/featuredProducts';
import SpecialOfferSection from '../components/SpecialOfferSection';


const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  
  img {
    width: 100px;
    height: 100px;
  }
  
  &.selected {
    outline: 2px solid #000;
  }
`;

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const products = [
    { name: 'Camisetas', imgSrc: cam },
    { name: 'Calças', imgSrc: cal },
    { name: 'Bonés', imgSrc: bon },
    { name: 'Headphones', imgSrc: hea },
    { name: 'Tênis', imgSrc: ten },
  ];

  const handleCircleClick = (index) => {
    setSelectedImage(index);
  };

  return (
  <div style={{ backgroundColor: '#F0F0F0' }}>
    <Gallery />
    <Section
      title={
        <Link
          to="/colecoes"
          style={{
            color: '#474747',
            fontWeight: 'bold',
            textDecoration: 'none',
            marginTop:'5px',
            marginLeft: '325px',
            marginBottom: '10px',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          Coleções em destaque
        </Link>
      }
      titleAlign="left"
    >
      <SectionContainer>
        <div style={styles.card}>
          <div style={styles.textContainer}>
            <div style={styles.discount}>30% OFF</div>
            <h3 style={styles.cardTitle}>Novo drop Supreme</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection1.png" alt="Novo drop Supreme" style={styles.cardImage} />
        </div>


       
        <div style={styles.card}>
          <div style={styles.textContainer}>
            <div style={styles.discount}>30% OFF</div>
            <h3 style={styles.cardTitle}>Coleção Adidas</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection2.png" alt="Coleção Adidas" style={styles.cardImage} />
        </div>

        <div style={styles.card}>
          <div style={styles.textContainer}>
            <div style={styles.discount}>30% OFF</div>
            <h3 style={styles.cardTitle}>Novo Beat Bass</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection3.png" alt="Novo Beat Bass" style={styles.cardImage} />
        </div>
      </SectionContainer>
    </Section>

    <h2 className="text-2xl text-[#474747] font-bold p-3 mb-4 mt-28 text-center">Coleções em Destaque</h2>
      <CircleContainer>
        {products.map((product, index) => (
          <Circle
            key={index}
            className={selectedImage === index ? 'selected' : ''}
            onClick={() => handleCircleClick(index)}
          >
            <img src={product.imgSrc} alt={product.name} style={{ width: '60%', height: '60%', margin: 'px', backgroundColor:'white', borderRadius: '50%' }} />
            <div>{product.name}</div>
          </Circle>
        ))}
      </CircleContainer>
      <Section
        className="flex justify-center mt-28"
        title="Produtos em alta"
        titleAlign="left"
        link={{ href: "/productListing", label: "Ver todos" }}
      />

      <section>
      <ProductListing products={featuredProducts.slice(0, 8)} columns="grid-cols-2 md:grid-cols-4" />
      </section>
      <SpecialOfferSection />
  </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    backgroundColor: '#D8E3F2',
    paddingTop: '30px',
    paddingBottom: '0px',
    borderRadius: '8px',
    width: '405px',
    height: '285px',
    transition: 'box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    marginBottom: '15px',
  },
  discount: {
    backgroundColor: '#E7FF86',
    color: '#474747',
    fontSize: '15px',
    padding: '10px 8px',
    borderRadius: '50px',
    fontWeight: 'bold',
    width: '96px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#1F1F1F',
    marginTop: '16px',
    marginBottom: '8px',
    fontSize: '29px',
  },
  buyButton: {
    backgroundColor: 'white',
    color: '#C92071',
    fontWeight: 'bold',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '8px',
  },
  cardImage: {
    width: '242px',
    height: '251px',
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: 'top',
    margin: 0,
    padding: 0,
    display: 'block',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: '16px',
  },


};

export default HomePage;
