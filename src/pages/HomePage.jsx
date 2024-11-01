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


const SectionContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os itens na horizontal */
  gap: 10px; /* Espaçamento entre os cards */
  flex-wrap: wrap; /* Permite que os cards quebrem linha se necessário */
  width: 100%;
  max-width: 1300px; /* Garante que o contêiner ocupe toda a largura disponível */
  padding: 0 20px;
  margin: 0 auto;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Espaçamento entre as imagens */
  flex-wrap: wrap; /* Permite que as imagens se movam para a próxima linha se necessário */
  margin-top: 20px; /* Espaçamento superior */
`;

const Circle = styled.div`
  display: flex;
  flex-direction: column; /* Alinha a imagem e o nome verticalmente */
  align-items: center; /* Centraliza os itens horizontalmente */
  cursor: pointer; /* Muda o cursor para indicar que é clicável */
  
  img {
    width: 100px; /* Largura da imagem */
    height: 100px; /* Altura da imagem */
  }
  
  /* Estilo para a seleção (opcional, se quiser indicar a seleção) */
  &.selected {
    outline: 2px solid #000; /* Contorno opcional para indicar que a imagem está selecionada */
  }
`;

const HomePage = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Estado para a imagem selecionada

  const products = [
    { name: 'Camisetas', imgSrc: cam },
    { name: 'Calças', imgSrc: cal },
    { name: 'Bonés', imgSrc: bon },
    { name: 'Headphones', imgSrc: hea },
    { name: 'Tênis', imgSrc: ten },
  ];

  const handleCircleClick = (index) => {
    setSelectedImage(index); // Atualiza a imagem selecionada
  };

  return (
  <div>
    <Gallery />
    <Section
      title={
        <Link
          to="/colecoes" // URL para onde o link deve redirecionar
          style={{
            color: '#474747', // Cor do texto
            fontWeight: 'bold',
            textDecoration: 'none', // Remove o sublinhado do link
            marginTop:'5px',
            marginLeft: '325px', // Afastar para a direita
            marginBottom: '10px', // Adiciona espaço embaixo do título
            display: 'inline-block', // Para que o margin tenha efeito corretamente
          }}
        >
          Coleções em destaque
        </Link>
      }
      titleAlign="left"
    >
      <SectionContainer>
        <div style={styles.card}>
          <div style={styles.textContainer}> {/* Novo contêiner para o título e botão */}
            <div style={styles.discount}>30% OFF</div>
            <h3 style={styles.cardTitle}>Novo drop Supreme</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection1.png" alt="Novo drop Supreme" style={styles.cardImage} />
        </div>


       
        <div style={styles.card}>
          <div style={styles.textContainer}> {/* Novo contêiner para o título e botão */}
            <div style={styles.discount}>30% OFF</div>
            <h3 style={styles.cardTitle}>Coleção Adidas</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection2.png" alt="Coleção Adidas" style={styles.cardImage} />
        </div>

        <div style={styles.card}>
          <div style={styles.textContainer}> {/* Novo contêiner para o título e botão */}
            <div style={styles.discount}>30% OFF</div>
            <h3 style={styles.cardTitle}>Novo Beat Bass</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection3.png" alt="Novo Beat Bass" style={styles.cardImage} />
        </div>
      </SectionContainer>
    </Section>

    <h2 className="text-2xl text-[#474747] font-bold p-3 mb-4 text-center">Coleções em Destaque</h2>
      <CircleContainer>
        {products.map((product, index) => (
          <Circle
            key={index}
            className={selectedImage === index ? 'selected' : ''}
            onClick={() => handleCircleClick(index)}
          >
            <img src={product.imgSrc} alt={product.name} style={{ width: '60%', height: '60%' }} />
            <div>{product.name}</div>
          </Circle>
        ))}
      </CircleContainer>
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
    width: '96px',      // Define a largura do badge
    height: '32px',     // Define a altura do badge
    display: 'flex',    // Para alinhar o texto no centro
    alignItems: 'center', // Alinha o texto verticalmente
    justifyContent: 'center', // Alinha o texto horizontalmente
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
    margin: 0,           // Remove margens
    padding: 0,          // Remove qualquer padding
    display: 'block',    // Garante que a imagem se expanda no container
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column', // Coloca os itens em coluna
    justifyContent: 'flex-start', // Alinha os itens ao topo
    marginLeft: '16px', // Para afastar do desconto
  },


};

export default HomePage;
