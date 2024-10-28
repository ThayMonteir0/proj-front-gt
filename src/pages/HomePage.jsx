import React from 'react';
import Section from '../components/Section';
import styled from 'styled-components';

// Estilizando o contêiner para centralizar os cards
const SectionContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza os itens na horizontal */
  gap: 16px; /* Espaçamento entre os cards */
  flex-wrap: wrap; /* Permite que os cards quebrem linha se necessário */
  max-width: 100%; /* Garante que o contêiner ocupe toda a largura disponível */
  margin: 0 auto; /* Centraliza o contêiner em relação ao pai */
`;

const HomePage = () => {
  return (
    <Section title="Coleções em destaque" titleAlign="center">
      <SectionContainer>
        {/* Card 1 */}
        <div style={styles.card}>
          <div style={styles.discountBadge}>30% OFF</div>
          <div>
            <h3 style={styles.cardTitle}>Novo drop Supreme</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection1.png" alt="Novo drop Supreme" style={styles.cardImage} />
        </div>

        {/* Card 2 */}
        <div style={styles.card}>
          <div style={styles.discountBadge}>30% OFF</div>
          <div>
            <h3 style={styles.cardTitle}>Coleção Adidas</h3>
            <button style={styles.buyButton}>Comprar</button>
          </div>
          <img src="/collection2.png" alt="Coleção Adidas" style={styles.cardImage} />
        </div>

        {/* Card 3 */}
        <div style={styles.card}>
          <div style={styles.discountBadge}>30% OFF</div>
          <div>
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
    alignItems: 'flex-start', // Alinha os itens à esquerda dentro do card
    backgroundColor: '#D8E3F2',
    padding: '16px',
    borderRadius: '8px',
    maxWidth: '300px',
    width: '100%', // Garante que os cards ocupem 100% do espaço disponível
    transition: 'box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  discountBadge: {
    backgroundColor: '#E7FF86',
    color: '#333',
    fontSize: '14px',
    padding: '4px 8px',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  buyButton: {
    backgroundColor: 'white',
    color: '#C92071',
    fontWeight: 'bold',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '8px', // Adiciona espaço entre o título e o botão
  },
  cardImage: {
    width: '80px',
    height: 'auto',
    borderRadius: '4px',
    marginTop: '16px', // Adiciona espaço entre o conteúdo do card e a imagem
  },
};

export default HomePage;
