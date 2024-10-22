import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductListingPage from './ProductListingPage';
import ProductViewPage from './ProductViewPage';

// Definindo o componente de layout
const HomePage = ({ children }) => {
  return (
    <div>
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      {children} {(HomePage, ProductListingPage, ProductViewPage)}

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
};

export default HomePage;