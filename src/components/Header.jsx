import React from 'react';
import Logo from './Logo';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between bg-white p-4">
        <div className="logo mb-2 pl-8">
          <Logo />
        </div>
        <div className="flex items-center mx-4 flex-1">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="p-2 border border-gray-300 bg-white/50 rounded-md outline-none w-full text-base text-gray-800"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "Pesquisar produtos..."}
          />
          <button className="bg-transparent border-none cursor-pointer ml-2">
            <FaSearch className="text-gray-500 text-xl" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/register"
            className="text-black border-b border-transparent hover:border-b-2 hover:border-pink-500 transition-all duration-300">
            Cadastre-se
          </a>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md border-2 border-transparent hover:bg-pink-500 transition duration-300">
            Entrar
          </button>
          <div className="relative pr-8">
            <FaShoppingCart className="text-gray-500 text-xl hover:text-pink-500 transition duration-300" />
          </div>
        </div>
      </div>
      <nav className='bg-white'>
        <ul className="flex list-none p-0 mt-2 space-x-5 pl-7">
          <li className="space-x-8 pl-5">
            <a
              href="/"
              className="no-underline text-black font-sans transition-colors duration-300"
              onMouseEnter={e => {
                e.target.style.color = '#C92071';
                e.target.style.fontWeight = 'bold';
              }}
              onMouseLeave={e => {
                e.target.style.color = 'black';
                e.target.style.fontWeight = 'normal';
              }}>
              Home
            </a>
          </li>
          <li className="mr-5">
            <a
              href="/products"
              className="no-underline text-black font-sans transition-colors duration-300"
              onMouseEnter={e => {
                e.target.style.color = '#C92071';
                e.target.style.fontWeight = 'bold';
              }}
              onMouseLeave={e => {
                e.target.style.color = 'black';
                e.target.style.fontWeight = 'normal';
              }}>
              Produtos
            </a>
          </li>
          <li className="mr-5">
            <a
              href="/categories"
              className="no-underline text-black font-sans transition-colors duration-300"
              onMouseEnter={e => {
                e.target.style.color = '#C92071';
                e.target.style.fontWeight = 'bold';
              }}
              onMouseLeave={e => {
                e.target.style.color = 'black';
                e.target.style.fontWeight = 'normal';
              }}>
              Categorias
            </a>
          </li>
          <li className="mr-5">
            <a
              href="/orders"
              className="no-underline text-black font-sans transition-colors duration-300"
              onMouseEnter={e => {
                e.target.style.color = '#C92071';
                e.target.style.fontWeight = 'bold';
              }}
              onMouseLeave={e => {
                e.target.style.color = 'black';
                e.target.style.fontWeight = 'normal';
              }}>
              Meus Pedidos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
