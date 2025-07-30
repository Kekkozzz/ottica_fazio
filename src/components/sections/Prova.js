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

    const getBadgeStyles = (badge) => {
        switch (badge) {
            case 'Bestseller':
                return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg';
            case 'Nuovo':
                return 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg';
            case 'Limited':
                return 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg';
            default:
                return 'bg-gray-600 text-white';
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 py-12">
            {/* Header ottimizzato */}
            <div className="text-center space-y-6 relative z-10 px-4 max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-200 mb-4">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-800 font-semibold text-sm uppercase tracking-wide">I nostri bestseller</span>
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                    I PIÙ VENDUTI
                </h2>

                <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                    Scopri i modelli più amati dai nostri clienti, selezionati per stile, qualità e design innovativo
                </p>
            </div>

            {/* Container prodotti completamente ridisegnato */}
            <section className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <StaggerContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {mostSoldProducts.map((product, index) => (
                            <StaggerItem key={product.id} direction="up" blur>
                                <article
                                    className={`
                                        group relative overflow-hidden bg-white rounded-3xl 
                                        border border-gray-100 shadow-xl hover:shadow-2xl
                                        cursor-pointer transition-all duration-700 ease-out
                                        ${hoveredProduct === product.id ?
                                            'transform scale-105 z-20 shadow-3xl ring-2 ring-gray-200' :
                                            'z-10 hover:scale-102'
                                        }
                                    `}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                    onClick={() => handleProductClick(product)}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Visualizza dettagli ${product.brand} ${product.model}`}
                                >
                                    {/* Header card con badge e like */}
                                    <div className="relative p-6 pb-0">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className={`
                                                inline-flex items-center gap-2 px-3 py-1.5 rounded-full 
                                                text-xs font-bold uppercase tracking-wider
                                                ${getBadgeStyles(product.badge)}
                                                transform transition-all duration-300 group-hover:scale-110
                                            `}>
                                                {product.badge === 'Bestseller' && <Award className="w-3 h-3" />}
                                                {product.badge === 'Nuovo' && <Zap className="w-3 h-3" />}
                                                {product.badge === 'Limited' && <Star className="w-3 h-3" />}
                                                {product.badge}
                                            </span>

                                            <button
                                                onClick={(e) => toggleLike(product.id, e)}
                                                className={`
                                                    p-2 rounded-full transition-all duration-300 backdrop-blur-sm
                                                    ${likedProducts.has(product.id) ?
                                                        'bg-red-500 text-white shadow-lg' :
                                                        'bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500'
                                                    }
                                                `}
                                                aria-label="Aggiungi ai preferiti"
                                            >
                                                <Heart
                                                    className={`w-4 h-4 transition-all duration-300 ${likedProducts.has(product.id) ? 'fill-current scale-110' : ''
                                                        }`}
                                                />
                                            </button>
                                        </div>

                                        {/* Sconto badge ridisegnato */}
                                        {product.discount > 0 && (
                                            <div className="absolute top-6 right-16 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                                -{product.discount}%
                                            </div>
                                        )}
                                    </div>

                                    {/* Sezione immagine completamente ridisegnata */}
                                    <div className="relative px-6 mb-6">
                                        <div className={`
                                            relative w-full h-64 rounded-2xl overflow-hidden
                                            bg-gradient-to-br from-gray-50 to-gray-100
                                            transition-all duration-700 group-hover:shadow-inner
                                            ${hoveredProduct === product.id ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : ''}
                                        `}>
                                            {/* Decorazioni di sfondo */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-xl"></div>
                                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-xl"></div>
                                            </div>

                                            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                                                <Image
                                                    src={product.image}
                                                    alt={`${product.brand} ${product.model}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                    style={{ objectFit: 'contain' }}
                                                    priority={index === 0}
                                                    className={`w-full h-full transition-all duration-700 ${hoveredProduct === product.id ? 'scale-110 filter drop-shadow-2xl' : 'scale-100 group-hover:scale-105'}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Informazioni prodotto ridisegnate */}
                                    <div className="px-6 pb-6 space-y-4">
                                        {/* Brand e modello con stile moderno */}
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                                                {product.brand}
                                            </h3>
                                            <p className="text-lg text-gray-600 font-medium">{product.model}</p>
                                            <p className="text-sm text-gray-500 font-mono">{product.serial}</p>
                                        </div>

                                        {/* Features con icone */}
                                        <div className="space-y-2">
                                            {product.features.slice(0, 2).map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                                                    <span className="font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Prezzo con design più prominente */}
                                        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                                            <span className="text-3xl font-black text-gray-900">
                                                {product.price}
                                            </span>
                                            {product.originalPrice && (
                                                <div className="flex flex-col">
                                                    <span className="text-lg text-gray-500 line-through">
                                                        {product.originalPrice}
                                                    </span>
                                                    <span className="text-xs text-green-600 font-semibold">
                                                        Risparmi €{(parseFloat(product.originalPrice.replace('€', '').replace(',', '.')) -
                                                            parseFloat(product.price.replace('€', '').replace(',', '.'))).toFixed(0)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* CTA Button ridisegnato */}
                                        <button
                                            className={`
                                                w-full mt-6 py-4 px-6 rounded-2xl font-bold text-base
                                                bg-gradient-to-r from-gray-900 to-gray-800 text-white
                                                hover:from-gray-800 hover:to-gray-700
                                                transition-all duration-500 transform hover:scale-105
                                                shadow-lg hover:shadow-xl
                                                flex items-center justify-center gap-3 group/btn
                                                ${hoveredProduct === product.id ? 'scale-105 shadow-xl' : ''}
                                            `}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProductClick(product);
                                            }}
                                        >
                                            <Eye className="w-5 h-5" />
                                            Scopri di più
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </article>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>

                {/* Footer ridisegnato */}
                <div className="mt-16 text-center space-y-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                            <span className="text-amber-800 font-semibold">Consulenza gratuita in negozio</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-full border border-emerald-200">
                            <Shield className="w-4 h-4 text-emerald-600" />
                            <span className="text-emerald-800 font-semibold">Garanzia 2 anni</span>
                        </div>
                    </div>

                    <button className="group inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-bold text-lg transition-all duration-300 hover:scale-105">
                        Visualizza tutti i prodotti
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </section>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
}