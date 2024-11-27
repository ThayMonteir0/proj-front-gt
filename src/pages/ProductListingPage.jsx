import { useState, useEffect } from 'react';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';

function ProductListingPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("low-to-high");
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      { id: 1, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 2, name: "Tênis", image: "/product-thumb-2.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 3, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 4, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 5, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 6, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 7, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 8, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 9, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 10, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 11, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 12, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 13, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 14, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
      { id: 15, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
    ];

    setProducts(fetchedProducts);
    setFilteredProducts(fetchedProducts);
  }, []);

  const sortProducts = (products, order) => {
    return [...products].sort((a, b) => {
      return order === "low-to-high" ? a.price - b.price : b.price - a.price;
    });
  };

  const filterProducts = (products, filters) => {
    if (filters.length === 0) return products;
    return products.filter(product => filters.includes(product.category));
  };

  useEffect(() => {
    let sortedProducts = sortProducts(products, sortOrder);
    let filteredAndSortedProducts = filterProducts(sortedProducts, selectedFilters);
    setFilteredProducts(filteredAndSortedProducts);
  }, [sortOrder, selectedFilters, products]);

  const handleFilterChange = (event) => {
    const { value, type, checked } = event.target;
    let updatedFilters = [...selectedFilters];

    if (type === "checkbox") {
      if (checked) {
        updatedFilters.push(value);
      } else {
        updatedFilters = updatedFilters.filter(filter => filter !== value);
      }
    } else if (type === "radio") {
      updatedFilters = [value]; 
    }

    setSelectedFilters(updatedFilters);
  };

  return (
    <div className="bg-[#F5F5F5] flex flex-col">
      <section className="p-4">
        <div className="flex items-center justify-between m-3">
          <h2 className="text-lg text-dark-gray-2 font-semibold">
            Resultado para <span className="font-bold">"Tênis"</span> - {filteredProducts.length} produtos
          </h2>

          <div className="flex items-center space-x-2">
            <span className="text-dark-gray-2 text-lg">Ordenar por:</span>
            <div className="relative">
              <select
                className="h-[40px] text-dark-gray-2 bg-white border border-light-gray-2 rounded px-4 pr-8 appearance-none focus:border-light-gray focus:outline-none"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{ borderWidth: "2px" }}
              >
                <option value="low-to-high">Menor preço</option>
                <option value="high-to-low">Maior preço</option>
              </select>
              <span
                className="absolute right-3 pointer-events-none text-dark-gray-2"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "0.8rem",
                }}
              >
                ▼
              </span>
            </div>
          </div>

        </div>
      </section>

      <section className="flex">
        <aside className="w-[308px] p-4 bg-white m-4 self-start">
          <div className="mb-4">
            <h2 className="text-dark-gray-2 font-semibold text-lg">Filtrar por</h2>
            <hr className="my-2 border-light-gray-2" />

            <div className="mb-4">
              <h3 className="text-dark-gray-2 text-sm font-semibold">Marca</h3>
              <div className="mt-2">
                {['Addidas', 'Balenciaga', 'K-Swiss', 'Nike', 'Puma'].map((marca) => (
                  <label key={marca} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2 accent-pink-500"
                      value={marca}
                      onChange={handleFilterChange}
                    />
                    {marca}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-dark-gray-2 text-sm font-semibold">Categoria</h3>
              <div className="mt-2">
                {['Esporte e lazer', 'Casual', 'Utilitário', 'Corrida'].map((categoria) => (
                  <label key={categoria} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2 accent-pink-500"
                      value={categoria}
                      onChange={handleFilterChange}
                    />
                    {categoria}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-dark-gray-2 text-sm font-semibold">Gênero</h3>
              <div className="mt-2">
                {['Masculino', 'Feminino', 'Unisex'].map((genero) => (
                  <label key={genero} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-2 accent-pink-500"
                      value={genero}
                      onChange={handleFilterChange}
                    />
                    {genero}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-dark-gray-2 text-sm font-semibold">Estado</h3>
              <div className="mt-2">
                {['Novo', 'Usado'].map((estado) => (
                  <label key={estado} className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="estado"
                      className="mr-2 accent-pink-500"
                      value={estado}
                      onChange={handleFilterChange}
                    />
                    {estado}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="w-full flex-1 mt-[-40px]">
          <Section>
            <ProductListing
              products={filteredProducts.map(product => ({
                ...product,
                link: `/product/${product.id}`,
              }))}
            />
          </Section>
        </div>
      </section>
    </div>
  );
}

export default ProductListingPage;
