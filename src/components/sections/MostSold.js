'use client';
import { useState } from 'react';
import { Eye, Heart, Star, ArrowRight, Zap, Shield, Award } from 'lucide-react';
import Image from 'next/image';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

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

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 py-12">
            {/* Header ottimizzato */}
            <div className="text-center space-y-6 relative z-10 px-4 max-w-4xl mx-auto">
                {/* <div className="inline-flex items-center gap-3 px-4 py-2 bg-warm-gray-50 border border-warm-gray-200 rounded-full mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-warm-gray-800 font-semibold text-sm uppercase tracking-wide">I nostri bestseller</span>
                </div> */}

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-warm-gray-900">
                    I PIÙ VENDUTI
                </h2>

                <p className="text-warm-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                    Scopri i modelli più amati dai nostri clienti, selezionati per stile, qualità e design innovativo
                </p>
            </div>            {/* Container prodotti completamente ridisegnato */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <StaggerContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {mostSoldProducts.map((product, index) => (
                            <StaggerItem key={product.id} direction="up">
                                <article
                                    className={`
                                        group relative overflow-hidden bg-white rounded-2xl 
                                        border border-warm-gray-200/50 shadow-sm hover:shadow-lg
                                        cursor-pointer transition-all duration-500 ease-out
                                        hover:border-warm-gray-300/50
                                    `}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                    onClick={() => handleProductClick(product)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Visualizza dettagli ${product.brand} ${product.model}`}
                                >
                                    {/* Sezione immagine minimal */}
                                    <div className="relative p-8">
                                        <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-warm-gray-50/50 to-blue-50/30">
                                            <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                                                <Image
                                                    src={product.image}
                                                    alt={`${product.brand} ${product.model}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                    style={{ objectFit: 'contain' }}
                                                    priority={index === 0}
                                                    className="w-full h-full transition-all duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                        </div>

                                        {/* Badge minimal in alto a destra */}
                                        <div className="absolute top-4 right-4">
                                            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-full">
                                                {product.badge}
                                            </span>
                                        </div>

                                        {/* Sconto badge */}
                                        {/* {product.discount > 0 && (
                                            <div className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                                -{product.discount}%
                                            </div>
                                        )} */}
                                    </div>

                                    {/* Informazioni prodotto minimal */}
                                    <div className="px-8 pb-8 space-y-4">
                                        {/* Brand e modello */}
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-bold text-warm-gray-900 group-hover:text-primary transition-colors duration-300">
                                                {product.brand}
                                            </h3>
                                            <p className="text-lg text-warm-gray-600 font-medium">{product.model}</p>
                                        </div>

                                        {/* Features minimal */}
                                        <div className="flex flex-wrap gap-6">
                                            {product.features.slice(0, 2).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-warm-gray-600">
                                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                                    <span className="font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Prezzo */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-warm-gray-200/50">
                                            <span className="text-3xl font-bold text-warm-gray-900">
                                                {product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <span className="text-lg line-through text-warm-gray-500">
                                                    {product.originalPrice}
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA Button minimal */}
                                        <button
                                            className="w-full mt-6 py-4 px-6 border border-black hover:bg-black hover:text-white text-black font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 group/btn cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProductClick(product);
                                            }}
                                        >
                                            Scopri di più
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </article>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </section>
    );
}