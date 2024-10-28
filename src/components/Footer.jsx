import React from 'react';
import LogoFooter from '../assets/logoFooter.svg';
import FooterInfo from './FooterInfo';
import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="flex flex-col md:flex-row justify-between">
        
        <div className="mb-8 md:mb-0">
          <img src={LogoFooter} alt="Logo Digital Store" className="mb-2 pl-8" />
          <p className="mt-6 pl-8">
          Descubra estilo, conforto e tecnologia <br />
          em cada detalhe, com produtos selecionados <br />
          para destacar sua personalidade.
          </p>
          
          <div className="flex space-x-4 mt-8 pl-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap md:justify-between md:space-x-8 pr-8">
          <FooterInfo
           title="Informação"
           informations={[
             { text: "Sobre Digital Store", link: "/about" },
             { text: "Segurança", link: "/security" },
             { text: "Wishlist", link: "/wishlist" },
             { text: "Blog", link: "/blog" },
             { text: "Trabalhe Conosco", link: "/careers" },
             { text: "Meus Pedidos", link: "/orders" },
           ]}
           
          />
          <FooterInfo
            title="Categorias"
            informations={[
              { text: "Camisetas", link: "/t-shirts" },
              { text: "Calças", link: "/pants" },
              { text: "Bonés", link: "/caps" },
              { text: "Headphones", link: "/headphones" },
              { text: "Tênis", link: "/shoes" },
            ]}
            
          />
          <FooterInfo
            title="Contato"
            informations={[
              { text: "Av. Santos Dumont, 1510", link: "#" },
              { text: "1 andar - Aldeota,Fortaleza", link: "#" },
              { text: "CE, 60150-161", link: "#" },
              { text: "(85) 3051-3411", link: "#" },
            ]}
            
          />
        </div>
      </div>
      
      <hr className="border-gray-500 my-4" />
      <p className="text-center text-sm">&copy; 2024 Digital Store</p>
    </footer>
  );
};

export default Footer;
