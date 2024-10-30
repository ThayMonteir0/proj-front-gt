import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const HomePage = () => {
  return (
    <Section
      title={
        <Link
          to="/colecoes" // URL para onde o link deve redirecionar
          style={{
            color: '#474747', // Cor do texto
            fontWeight: 'bold',
            textDecoration: 'none', // Remove o sublinhado do link
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
