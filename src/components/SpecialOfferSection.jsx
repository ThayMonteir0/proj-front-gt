import React from 'react';
import styled from 'styled-components';
import sneakerImage from '../assets/sneakerImage.png';

const SpecialOfferSection = () => (
  <SectionWrapper className="flex items-center p-5 mt-52 bg-white">
    <ImageWrapper className="flex-shrink-0">
      <img src={sneakerImage} alt="Air Jordan de edição especial" className="w-full object-cover rounded-md" />
    </ImageWrapper>
    <TextContent className="ml-8 text-left">
      <Title className="text-primary text-2 text-[#eb1177] font-bold mb-2">Oferta especial</Title>
      <SubTitle className="text-dark-gray-2 font-bold text-4xl md:text-5xl lg:text-6xl">
        Air Jordan edição de colecionador
        </SubTitle>
      <p className="mb-4 mt-4">
        Os Air Jordan de edição de colecionador são muito mais do que apenas tênis. Cada par conta uma história, <br/>
        desde o design icônico até a história por trás de sua criação, muitas vezes ligada a momentos históricos do <br/>
        basquete e da cultura pop. A raridade, a qualidade dos materiais e a atenção aos detalhes são fatores que <br/>
        impulsionam o valor dessas peças, tornando-as objetos de desejo para muitos. A busca pela edição perfeita, <br/>o
        cuidado na preservação e a emoção de possuir um par único são parte integrante da experiência de colecionar<br/>
        Air Jordans. Eles representam mais do que apenas um calçado; representam um legado, uma paixão e um investimento<br/>
        que pode transcender gerações.
        </p>
      <button className="bg-[#eb1177] text-white w-48 py-2 mt-2 rounded-lg text-lg font-semibold">
          Ver Ofertas
      </button>
    </TextContent>
  </SectionWrapper>
);

export default SpecialOfferSection;

const SectionWrapper = styled.section`
  @apply w-[1440px] h-[553px] mx-auto flex items-center;
  flex-direction: row;
`;

const ImageWrapper = styled.div`
  @apply w-[466px] h-[466px] flex-shrink-0 flex items-start;
  img {
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  @apply ml-8 text-left;
`;

const Title = styled.h3`
  @apply text-primary font-bold;
`;

const SubTitle = styled.h2`
  @apply text; // AG h2 title - desktop
`;

const Description = styled.p`
  @apply text-dark-gray-2 text-sm font-light leading-relaxed;
`;

const Button = styled.button`
  @apply bg-primary text-light-gray-3 font-medium w-[200px] h-[40px] mt-4;
  border-radius: 4px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #b51663; // tonalidade um pouco mais escura para o hover
  }
`;