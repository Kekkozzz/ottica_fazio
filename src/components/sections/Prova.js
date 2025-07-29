'use client';
import { useState } from 'react';
import { Eye, Heart, ShoppingCart, Star, ArrowRight, Zap } from 'lucide-react';

export default function EnhancedMostSold() {
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
            window.gtag('event', 'product_click', {
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

    const addToCart = (product, e) => {
        e.stopPropagation();
        console.log('Aggiunto al carrello:', product);
        // Feedback visivo o toast notification
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Background pattern decorativo */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 right-32 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-2xl"></div>
            </div>

            {/* Header migliorato */}
            <div className="text-center space-y-4 relative z-10 px-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
                    <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Trending Now</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-josefin text-center tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                        I PIÙ VENDUTI
                    </span>
                </h2>

                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Scopri i modelli più amati dai nostri clienti, selezionati per stile e qualità
                </p>
            </div>

            {/* Container prodotti migliorato */}
            <section className="w-full py-8 md:py-16 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-2xl rounded-none md:rounded-[48px] max-w-full md:max-w-[1800px] mx-auto relative z-10">

                {/* Grid responsivo dei prodotti */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full px-4 md:px-8">
                    {mostSoldProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`
                                group relative flex flex-col bg-white rounded-3xl p-6 shadow-lg
                                cursor-pointer transition-all duration-500 ease-out
                                hover:scale-105 hover:-translate-y-6 hover:shadow-2xl
                                border-2 hover:border-blue-200
                                ${hoveredProduct === product.id ? 'z-20 ring-4 ring-blue-200/50' : 'z-10'}
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
                                    ${product.badge === 'Bestseller' ? 'bg-red-500 text-white' :
                                        product.badge === 'Nuovo' ? 'bg-green-500 text-white' :
                                            'bg-purple-500 text-white'}
                                `}>
                                    {product.badge}
                                </span>

                                <button
                                    onClick={(e) => toggleLike(product.id, e)}
                                    className={`
                                        p-2 rounded-full transition-all duration-300 hover:scale-110
                                        ${likedProducts.has(product.id)
                                            ? 'bg-red-500 text-white shadow-lg'
                                            : 'bg-white/80 text-gray-400 hover:text-red-500'
                                        }
                                    `}
                                    aria-label={likedProducts.has(product.id) ? 'Rimuovi dai preferiti' : 'Aggiungi ai preferiti'}
                                >
                                    <Heart size={16} className={likedProducts.has(product.id) ? 'fill-current' : ''} />
                                </button>
                            </div>

                            {/* Sconto badge */}
                            {product.discount > 0 && (
                                <div className="absolute top-4 right-16 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold z-20">
                                    -{product.discount}%
                                </div>
                            )}

                            {/* Immagine prodotto migliorata */}
                            <div className="relative mb-6 mt-8">
                                <div className={`
                                    w-full h-48 md:h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100
                                    flex items-center justify-center transition-all duration-500
                                    ${hoveredProduct === product.id
                                        ? 'shadow-2xl ring-4 ring-blue-200/30'
                                        : 'shadow-md'
                                    }
                                `}>
                                    {/* Placeholder per l'immagine - sostituire con Image component */}
                                    <div className={`
                                        w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full 
                                        flex items-center justify-center transition-all duration-500
                                        group-hover:scale-110 group-hover:rotate-6
                                        ${hoveredProduct === product.id ? 'animate-pulse' : ''}
                                    `}>
                                        <Eye size={48} className="text-gray-600" />
                                    </div>
                                </div>

                                {/* Quick actions overlay */}
                                <div className={`
                                    absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center gap-3
                                    transition-all duration-300
                                    ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}
                                `}>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log('Anteprima rapida');
                                        }}
                                        className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200"
                                        aria-label="Anteprima rapida"
                                    >
                                        <Eye size={20} className="text-gray-700" />
                                    </button>
                                    <button
                                        onClick={(e) => addToCart(product, e)}
                                        className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                                        aria-label="Aggiungi al carrello"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Informazioni prodotto migliorate */}
                            <div className="space-y-3 flex-1">
                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={`${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        {product.rating} ({product.reviews} recensioni)
                                    </span>
                                </div>

                                {/* Brand e modello */}
                                <div>
                                    <h3 className={`
                                        font-bold text-xl md:text-2xl transition-all duration-300
                                        ${hoveredProduct === product.id
                                            ? 'text-blue-700 scale-105'
                                            : 'text-gray-900'
                                        }
                                    `}>
                                        {product.brand}
                                    </h3>
                                    <p className="text-gray-600 font-medium">{product.model}</p>
                                    <p className="text-sm text-gray-500">{product.serial}</p>
                                </div>

                                {/* Features */}
                                <div className="space-y-1">
                                    {product.features.slice(0, 2).map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Prezzo migliorato */}
                                <div className="flex items-center gap-3 pt-2">
                                    <span className={`
                                        text-2xl md:text-3xl font-bold transition-all duration-300
                                        ${hoveredProduct === product.id
                                            ? 'text-blue-600 scale-110'
                                            : 'text-gray-900'
                                        }
                                    `}>
                                        {product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-gray-500 line-through">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* CTA Button migliorato */}
                            <div className={`
                                mt-6 transition-all duration-500
                                ${hoveredProduct === product.id
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-70 translate-y-2'
                                }
                            `}>
                                <button
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group focus:ring-4 focus:ring-blue-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleProductClick(product);
                                    }}
                                >
                                    Scopri di più
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>

                            {/* Hover glow effect */}
                            <div className={`
                                absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none
                                ${hoveredProduct === product.id
                                    ? 'bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 shadow-2xl shadow-blue-500/10'
                                    : 'bg-transparent'
                                }
                            `}></div>
                        </div>
                    ))}
                </div>

                {/* Footer migliorato */}
                <div className="mt-12 text-center space-y-4">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Spedizione gratuita sopra €99</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span>Garanzia 2 anni</span>
                        </div>
                    </div>

                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline transition-all duration-200">
                        Visualizza tutti i prodotti →
                    </button>
                </div>
            </section>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                    <span>Oltre 1000+ clienti soddisfatti</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star size={16} className="text-blue-600 fill-current" />
                    </div>
                    <span>4.9/5 stelle di valutazione</span>
                </div>
            </div>
        </section>
    );
}