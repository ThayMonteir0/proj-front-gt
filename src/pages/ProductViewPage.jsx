import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import BuyBox from '../components/BuyBox';
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import ProductDetails from '../components/ProductDetails';

const ProductViewPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = {
                    id,
                    name: "Tênis Nike Revolution 6 Next Nature Masculino",
                    reference: "Casual | Nike | REF38416711",
                    price: 299.9,
                    priceDiscount: 199.9,
                    description: "O Nike Revolution 6 é um tênis casual que combina estilo e conforto para o dia a dia.\n Com um design moderno e clean, ele oferece um visual versátil, ideal para diversas\n ocasiões, seja para um passeio casual ou para o uso diário, ele é a escolha perfeita para\n quem busca um tênis de alta qualidade, confortável e com um toque esportivo no visual.",
                    specifications: [
                        "Material: Couro sintético",
                        "Sola antiderrapante",
                        "Disponível nos tamanhos 39 a 42",
                    ],
                    materials: "Couro sintético, borracha, tecido",
                    care: "Lavar à mão, não usar alvejante, secar à sombra.",
                    images: [
                        { original: "/image1.jpg", thumbnail: "/image1.jpg" },
                        { original: "/image2.jpg", thumbnail: "/image2.jpg" },
                        { original: "/image3.jpg", thumbnail: "/image3.jpg" },
                        { original: "/image4.jpg", thumbnail: "/image4.jpg" },
                        { original: "/image5.jpg", thumbnail: "/image5.jpg" },
                    ],
                    options: {
                        sizes: ["39", "40", "41", "42"],
                        colors: ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"],
                    },
                };
                setProduct(fetchedProduct);
                setLoading(false);
            } catch (error) {
                console.error('Erro ao buscar o produto:', error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!product) {
        return <div>Produto não encontrado.</div>;
    }

    const productViewFeaturedProducts = [
        { id: 1, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
        { id: 2, name: "Tênis", image: "/product-thumb-2.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
        { id: 3, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
        { id: 4, name: "Tênis", image: "/product-thumb-1.png", description: "K-Swiss V-8 - Masculino", price: 200, priceDiscount: 100 },
    ];

    return (
        <div className="px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row gap-6">
                <Gallery
                    items={product.images}
                    showThumbnails={true}
                    showFullscreenButton={true}
                    showPlayButton={false}
                    slideDuration={400}
                    thumbnailPosition="bottom"
                />

                <div className="flex-1">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold">{product.name}</h2>
                        <p className="text-sm text-dark-gray-2">{product.reference}</p>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                        <img src="/src/assets/star-icon.png" alt="Estrela" />
                        <p className="text-dark-gray-2">{product.rating} </p>
                    </div>

                    <div className="mb-4">
                        <p className="text-xl font-bold text-primary">R$ {product.priceDiscount.toFixed(2)}</p>
                        <p className="line-through text-sm text-light-gray">{product.price.toFixed(2)}</p>
                    </div>

                    <div className="mb-4">
                        <p>
                            {product.description.split("\n").map((line, index) => (
                                <span key={index}>{line}<br /></span>
                            ))}
                        </p>

                    </div>

                    <div className="mt-4">
                        <p className="text-sm font-bold">Tamanhos</p>
                        <div className="flex gap-2 mt-2">
                            {product.options.sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border rounded-md w-10 h-10 flex items-center justify-center ${selectedSize === size
                                            ? "bg-pink-600 text-white" // Se o tamanho for selecionado, fica rosa
                                            : "text-dark-gray-2"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm font-bold">Cores</p>
                        <div className="flex gap-2 mt-2">
                            {product.options.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-pink-600" : "border-gray-300"
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    <button className="mt-6 w-52 bg-orange-400 text-white py-2 rounded-md">
                        Comprar
                    </button>
                </div>
            </div>

            <ProductDetails
                description={product.description}
                specifications={product.specifications}
                materials={product.materials}
                care={product.care}
            />

            <div className="flex justify-center mt-28">
                <Section
                    title="Você pode gostar"
                    titleAlign="left"
                    link={{ href: "/products", label: "Ver todos" }}
                >
                    <ProductListing
                        products={productViewFeaturedProducts.slice(0, 4)}
                        columns="grid-cols-2 md:grid-cols-4"
                    />
                </Section>
            </div>
        </div>
    );
};

export default ProductViewPage;