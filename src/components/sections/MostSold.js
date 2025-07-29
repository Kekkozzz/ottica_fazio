'use client';
import { useState } from 'react';
import { Eye, Heart, Star, ArrowRight, Zap } from 'lucide-react';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import Image from "next/image";

export default function MostSold() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [likedProducts, setLikedProducts] = useState(new Set());

    // Dati dei prodotti più venduti con informazioni aggiuntive
    const mostSoldProducts = [
        {
            id: 1,
            brand: "Ray-Ban",
            model: "Wayfarer Classic",
            serial: "RB2140-901",
            price: "€129,00",
            originalPrice: "€159,00",
            discount: 19,
            image: "/occhiali/o1.png",
            rating: 4.8,
            reviews: 247,
            badge: "Bestseller",
            features: ["Protezione UV400", "Lenti polarizzate", "Montatura acetato"]
        },
        {
            id: 2,
            brand: "Gucci",
            model: "Aviator Luxury",
            serial: "GG0061S-002",
            price: "€210,00",
            originalPrice: "€250,00",
            discount: 16,
            image: "/occhiali/o2.png",
            rating: 4.9,
            reviews: 189,
            badge: "Nuovo",
            features: ["Design italiano", "Lenti graduate", "Custodia inclusa"]
        },
        {
            id: 3,
            brand: "Persol",
            model: "Vintage Collection",
            serial: "PO0649-24/31",
            price: "€179,00",
            originalPrice: "€199,00",
            discount: 10,
            image: "/occhiali/o1.png",
            rating: 4.7,
            reviews: 156,
            badge: "Limited",
            features: ["Edizione limitata", "Artigianale", "Garanzia 2 anni"]
        }
    ];

    const handleProductClick = (product) => {
        console.log('Prodotto cliccato:', product);
        // Analytics tracking
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'product_view', {
                'product_id': product.id,
                'product_name': product.brand + ' ' + product.model,
                'value': parseFloat(product.price.replace('€', '').replace(',', '.'))
            });
        }
    };

    const toggleLike = (productId, e) => {
        e.stopPropagation();
        setLikedProducts(prev => {
            const newSet = new Set(prev);
            if (newSet.has(productId)) {
                newSet.delete(productId);
            } else {
                newSet.add(productId);
            }
            return newSet;
        });
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6">
            {/* Header migliorato */}
            <div className="text-center space-y-4 relative z-10 px-4 mt-4 md:mt-8 lg:mt-18">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-josefin text-center tracking-tight">
                    <span className="">
                        I PIÙ VENDUTI
                    </span>
                </h2>

                <p className="text-warm-gray-600 text-lg max-w-2xl mx-auto">
                    Scopri i modelli più amati dai nostri clienti, selezionati per stile e qualità
                </p>
            </div>

            {/* Container prodotti migliorato */}
            <section className="w-full py-8 md:py-16 flex flex-col items-center justify-center  bg-[#fafafa] border border-warm-gray-200/50 shadow-2xl rounded-none md:rounded-[48px] max-w-full md:max-w-[1600px] mx-auto relative z-10">

                <StaggerContainer>
                    {/* Grid responsivo dei prodotti */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24 w-full px-4 md:px-8">
                        {mostSoldProducts.map((product, index) => (
                            <StaggerItem key={product.id} delay={index * 200}>
                                <div
                                    className={`
                                        group relative flex flex-col bg-white rounded-3xl p-6 shadow-lg
                                        cursor-pointer transition-all duration-500 ease-out
                                        ${hoveredProduct === product.id ? 'z-20 ring-2 ring-black/30 scale-105 shadow-2xl' : 'z-10'}
                                    `}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                    onClick={() => handleProductClick(product)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Visualizza dettagli ${product.brand} ${product.model}`}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            handleProductClick(product);
                                        }
                                    }}
                                >
                                    {/* Badge e Like button */}
                                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                                        <span className={`
                                            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
                                            ${product.badge === 'Bestseller' ? 'bg-bordeaux-500 text-white' :
                                                product.badge === 'Nuovo' ? 'bg-gold-500 text-white' :
                                                    'bg-warm-gray-600 text-white'}
                                        `}>
                                            {product.badge}
                                        </span>
                                    </div>

                                    {/* Sconto badge */}
                                    {product.discount > 0 && (
                                        <div className="absolute top-4 right-4 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-bold z-20">
                                            -{product.discount}%
                                        </div>
                                    )}

                                    {/* Immagine prodotto migliorata */}
                                    <div className="relative mb-6 mt-8">
                                        <div className={`
                                            w-full h-48 md:h-56 rounded-2xl overflow-hidden bg-cream-50
                                            flex items-center justify-center transition-all duration-500
                                                        group-hover:scale-105
                                            ${hoveredProduct === product.id
                                                ? 'shadow-2xl'
                                                : 'shadow-md'
                                            }
                                        `}>
                                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex items-center justify-center">
                                                <Image
                                                    src={product.image}
                                                    alt={product.brand + ' ' + product.serial}
                                                    width={220}
                                                    height={220}
                                                    className={`
                                                        object-contain w-full h-full transition-all duration-500
                                                        group-hover:scale-110 relative z-10
                                                        ${hoveredProduct === product.id ? 'filter brightness-110 contrast-110' : ''}
                                                    `}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Informazioni prodotto migliorate */}
                                    <div className="space-y-3 flex-1">
                                        {/* Brand e modello */}
                                        <div>
                                            <h3 className={`
                                                font-bold text-xl md:text-2xl transition-all duration-300 font-bevietnam
                                                text-warm-gray-900
                                            `}>
                                                {product.brand}
                                            </h3>
                                            <p className="text-warm-gray-600 font-medium">{product.model}</p>
                                            <p className="text-sm text-warm-gray-500">{product.serial}</p>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-1">
                                            {product.features.slice(0, 2).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-warm-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-bordeaux-500 rounded-full"></div>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Prezzo migliorato */}
                                        <div className="flex items-center gap-3 pt-2">
                                            <span className="text-2xl md:text-3xl font-bold transition-all duration-300 text-warm-gray-900">
                                                {product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-lg text-warm-gray-500 line-through">
                                                    {product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* CTA Button migliorato */}
                                    <div className={`mt-6 transition-all duration-500 ${hoveredProduct === product.id ? 'opacity-100 translate-y-0 scale-105' : 'opacity-70 translate-y-2'}`}>
                                        <button
                                            className="w-full bg-bordeaux-600 hover:bg-bordeaux-700 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-102 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProductClick(product);
                                            }}
                                        >
                                            Scopri di più
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                                        </button>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>

                {/* Footer migliorato */}
                <div className="mt-12 text-center space-y-4">
                    <div className="flex items-center justify-center gap-4 text-sm text-warm-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
                            <span>Consulenza gratuita in negozio</span>
                        </div>
                        <div className="w-px h-4 bg-warm-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-bordeaux-500 rounded-full animate-pulse"></div>
                            <span>Garanzia 2 anni</span>
                        </div>
                    </div>

                    <button className="text-bordeaux-600 hover:text-bordeaux-700 font-semibold text-lg hover:underline transition-all duration-200">
                        Visualizza tutti i prodotti →
                    </button>
                </div>
            </section>
        </section>
    );
}