import React from 'react';
import Footer from "../components/Footer";
import Section from "../components/Section";

const HomePage = () => {
  return (
    <div>
      <Section
        title="Produtos em Destaque" 
        titleAlign="center" 
      >
        <h1>colocar as proximas coisas</h1>
      </Section>
      <Footer />
    </div>
  );
};

export default HomePage;
