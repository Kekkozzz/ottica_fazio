'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { X, Check, MapPin, Phone, Filter, XCircle, ChevronDown } from 'lucide-react';

export default function OcchialiVista() {
    const router = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [showStoreModal, setShowStoreModal] = useState(false);

    // Stati filtri
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedBadges, setSelectedBadges] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState(null);
    const [showFilters, setShowFilters] = useState(false);

    const images = ['/models/mod1.jpg', '/models/mod2.avif', '/models/mod3.webp'];

    // Opzioni filtri
    const brands = ["Emporio Armani", "Persol", "Polo Ralph Lauren", "Ray-Ban"];
    const badges = ["NUOVO", "BESTSELLER", "PREMIUM", "ICONICO"];
    const priceRanges = [
        { label: "€ 0 - 150", min: 0, max: 150 },
        { label: "€ 150 - 250", min: 150, max: 250 },
        { label: "€ 250+", min: 250, max: 9999 }
    ];

    // Database completo occhiali da vista
    const glassesCollection = [
        {
            id: 1,
            code: "3007",
            brand: "Persol",
            model: "3007",
            image: "/occhiali/vista/3007 persol.jpeg",
            images: ["/occhiali/vista/3007 persol.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 280",
            description: "Raffinatezza italiana senza tempo",
            badge: "ICONICO",
            features: ["Montatura acetato premium", "Design classico", "Made in Italy"]
        },
        {
            id: 2,
            code: "3355-V",
            brand: "Persol",
            model: "3355-V",
            image: "/occhiali/vista/3355-V persol.jpeg",
            images: ["/occhiali/vista/3355-V persol.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 290",
            description: "Eleganza contemporanea",
            badge: "PREMIUM",
            features: ["Cerniera brevettata", "Lenti graduate", "Comfort superiore"]
        },
        {
            id: 3,
            code: "AR7122",
            brand: "Emporio Armani",
            model: "AR7122",
            image: "/occhiali/vista/AR7122.jpeg",
            images: ["/occhiali/vista/AR7122.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 165",
            description: "Stile minimalista moderno",
            badge: "BESTSELLER",
            features: ["Design leggero", "Montatura sottile", "Versatilità quotidiana"]
        },
        {
            id: 4,
            code: "AR7275-U",
            brand: "Emporio Armani",
            model: "AR7275-U",
            image: "/occhiali/vista/AR7275-U.jpeg",
            images: ["/occhiali/vista/AR7275-U.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 175",
            description: "Eleganza urbana",
            badge: null,
            features: ["Linee pulite", "Comfort fit", "Made in Italy"]
        },
        {
            id: 5,
            code: "EA4115",
            brand: "Emporio Armani",
            model: "EA4115",
            image: "/occhiali/vista/EA4115.jpeg",
            images: ["/occhiali/vista/EA4115.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 155",
            description: "Design sportivo elegante",
            badge: null,
            features: ["Montatura resistente", "Stile dinamico", "Perfetto per ogni occasione"]
        },
        {
            id: 6,
            code: "EA4152",
            brand: "Emporio Armani",
            model: "EA4152",
            image: "/occhiali/vista/EA4152.jpeg",
            images: ["/occhiali/vista/EA4152.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 160",
            description: "Raffinatezza quotidiana",
            badge: "NUOVO",
            features: ["Design contemporaneo", "Acetato di qualità", "Versatile"]
        },
        {
            id: 7,
            code: "PH2083",
            brand: "Polo Ralph Lauren",
            model: "PH2083",
            image: "/occhiali/vista/PH2083.jpeg",
            images: ["/occhiali/vista/PH2083.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 220",
            description: "Classico americano",
            badge: "PREMIUM",
            features: ["Stile preppy", "Qualità superiore", "Heritage design"]
        },
        {
            id: 8,
            code: "PH2281U",
            brand: "Polo Ralph Lauren",
            model: "PH2281U",
            image: "/occhiali/vista/PH2281U.jpeg",
            images: ["/occhiali/vista/PH2281U.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 230",
            description: "Eleganza sportiva",
            badge: null,
            features: ["Design versatile", "Montatura robusta", "Logo discreto"]
        },
        {
            id: 9,
            code: "RB4340V",
            brand: "Ray-Ban",
            model: "RB4340V",
            image: "/occhiali/vista/RB4340V.jpeg",
            images: ["/occhiali/vista/RB4340V.jpeg", "/models/mod1.jpg", "/models/mod1.jpg", "/models/mod1.jpg"],
            price: "€ 160",
            description: "Icona intramontabile",
            badge: "BESTSELLER",
            features: ["Stile Wayfarer", "Comfort garantito", "Qualità Ray-Ban"]
        }
    ];

    // Logica di filtraggio
    const filteredProducts = glassesCollection.filter(product => {
        // Filtro brand
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
            return false;
        }

        // Filtro badge
        if (selectedBadges.length > 0 && !selectedBadges.includes(product.badge)) {
            return false;
        }

        // Filtro prezzo
        if (selectedPriceRange) {
            const priceValue = parseInt(product.price.replace(/[^0-9]/g, ''));
            if (priceValue < selectedPriceRange.min || priceValue > selectedPriceRange.max) {
                return false;
            }
        }

        return true;
    });

    // Toggle filtri
    const toggleBrand = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const toggleBadge = (badge) => {
        setSelectedBadges(prev =>
            prev.includes(badge) ? prev.filter(b => b !== badge) : [...prev, badge]
        );
    };

    const togglePriceRange = (range) => {
        setSelectedPriceRange(prev =>
            prev?.label === range.label ? null : range
        );
    };

    const clearAllFilters = () => {
        setSelectedBrands([]);
        setSelectedBadges([]);
        setSelectedPriceRange(null);
    };

    const hasActiveFilters = selectedBrands.length > 0 || selectedBadges.length > 0 || selectedPriceRange !== null;

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((p) => (p + 1) % images.length);
        }, 4000);
        return () => clearInterval(id);
    }, [images.length]);

    // Funzioni per gestire il modale
    const openProductModal = (product) => {
        setSelectedProduct(product);
        setSelectedImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeProductModal = () => {
        setSelectedProduct(null);
        setSelectedImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    // Chiudi modale con ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeProductModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Scroll to collection
    const scrollToCollection = () => {
        const collectionSection = document.getElementById('collection-section');
        if (collectionSection) {
            collectionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="min-h-screen relative overflow-hidden">
            <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full">
                <StaggerContainer staggerDelay={0.12} className="w-full">

                    {/* =============== <= md : NUOVO LAYOUT =============== */}
                    <section className="lg:hidden w-full">
                        <div className="mx-auto w-full max-w-md">
                            {/* Titolo */}
                            <StaggerItem direction="up" blur>
                                <h1 className="mt-4 text-center font-extrabold leading-[0.95] tracking-tight">
                                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900">I NOSTRI</span>
                                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-600">OCCHIALI</span>
                                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-600">DA VISTA</span>
                                </h1>
                            </StaggerItem>

                            {/* Card immagine */}
                            <FadeInView direction="up" blur duration={0.9} className="mt-4">
                                <div className="relative rounded-3xl bg-white shadow-xl">
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                                        {images.map((image, i) => (
                                            <div
                                                key={i}
                                                className={`absolute inset-0 transition-opacity duration-1000 ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`Occhiali modello ${i + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 90vw, 400px"
                                                    style={{ objectFit: 'cover' }}
                                                    priority={i === 0}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Pill "NUOVO" */}
                                    <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold text-red-600 shadow">
                                        NUOVO
                                    </span>
                                </div>
                            </FadeInView>

                            {/* Dots */}
                            <div className="mt-3 flex justify-center gap-2">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        aria-label={`Vai all'immagine ${i + 1}`}
                                        className={`h-2 w-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-2 bg-red-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                                    />
                                ))}
                            </div>

                            {/* Testo */}
                            <StaggerItem direction="up" blur>
                                <p className="mt-5 text-center text-sm leading-relaxed text-gray-600">
                                    Vedi il mondo con chiarezza e stile. Scopri la nostra collezione di montature da vista
                                    che uniscono comfort, design e qualità ottica superiore.
                                </p>
                            </StaggerItem>

                            {/* CTA */}
                            <StaggerItem direction="up" blur>
                                <div className="mt-5 space-y-3">
                                    <button onClick={scrollToCollection} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-red-700 active:scale-[0.99] cursor-pointer">
                                        Scopri la Collezione
                                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button className="inline-flex w-full items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm hover:border-red-600 hover:text-red-600 active:scale-[0.99]">
                                        Prenota Appuntamento
                                    </button>
                                </div>
                            </StaggerItem>

                            {/* Stats */}
                            <StaggerItem direction="up" blur>
                                <div className="mt-6 rounded-2xl bg-white p-4 shadow">
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="text-center">
                                            <div className="text-xl font-extrabold text-red-600">500+</div>
                                            <div className="text-[11px] text-gray-600">Modelli</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-extrabold text-red-600">25+</div>
                                            <div className="text-[11px] text-gray-600">Anni Esperienza</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-extrabold text-red-600">100%</div>
                                            <div className="text-[11px] text-gray-600">UV Protection</div>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>
                    </section>

                    {/* =============== >= lg : LAYOUT DESKTOP ORIGINALE =============== */}
                    <section className="hidden lg:flex w-full max-w-7xl mx-auto flex-col lg:flex-row items-center lg:items-center gap-6 sm:gap-8 lg:gap-16">
                        {/* Colonna testo (come nel tuo codice originale) */}
                        <div className="flex-1 flex flex-col justify-center items-start w-full">
                            <StaggerItem direction="up" blur>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[0.9] mb-4 sm:mb-6 lg:mb-8">
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                                        I NOSTRI
                                    </span>
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                        OCCHIALI
                                    </span>
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                        DA VISTA
                                    </span>
                                </h1>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                    Vedi il mondo con chiarezza e stile. Montature da vista che combinano design contemporaneo, comfort eccezionale e precisione ottica.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <div className="flex gap-4">
                                    <button onClick={scrollToCollection} className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                        Scopri la Collezione
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-600 hover:text-red-600 transition-all duration-300">
                                        Prenota Appuntamento
                                    </button>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <div className="flex gap-8 mt-12">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600">500+</div>
                                        <div className="text-sm text-gray-600">Modelli</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600">25+</div>
                                        <div className="text-sm text-gray-600">Anni Esperienza</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-red-600">100%</div>
                                        <div className="text-sm text-gray-600">UV Protection</div>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>

                        {/* Colonna immagine (come nel tuo codice originale) */}
                        <FadeInView direction="right" blur duration={1.2} className="flex-1 flex justify-center items-center w-full lg:w-auto mt-6 lg:mt-0">
                            <div className="relative w-full max-w-lg">
                                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                    {images.map((image, index) => (
                                        <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                                            <Image
                                                src={image}
                                                alt={`Occhiali da sole modello ${index + 1}`}
                                                fill
                                                sizes="(min-width: 1024px) 600px, 50vw"
                                                style={{ objectFit: 'cover' }}
                                                priority={index === 0}
                                            />
                                        </div>
                                    ))}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <span className="text-sm font-semibold text-red-600">NUOVO</span>
                                    </div>
                                </div>

                                <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-gradient-to-br from-red-100/60 to-orange-100/60 rounded-3xl"></div>

                                <div className="flex justify-center gap-3 mt-8">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-red-600 w-10' : 'bg-gray-300 hover:bg-gray-400 w-3'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </FadeInView>
                    </section>
                </StaggerContainer>
            </div>

            {/* Collezione Completa - Design Minimalista Moderno */}
            <section id="collection-section" className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                                Collezione Completa
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Esplora la <span className="text-primary">Collezione</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {filteredProducts.length} modelli {hasActiveFilters ? 'trovati' : 'disponibili'} dai brand più prestigiosi al mondo.
                        </p>
                    </div>

                    {/* Filtri Dropdown */}
                    <div className="mb-8">
                        {/* Header con toggle */}
                        <div className="flex items-center justify-between mb-4">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-3 px-4 py-3 bg-white border-2 border-gray-200 hover:border-primary rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <Filter className="w-5 h-5 text-gray-600" />
                                <span className="font-semibold text-gray-900">Filtri</span>
                                {hasActiveFilters && (
                                    <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">
                                        {selectedBrands.length + selectedBadges.length + (selectedPriceRange ? 1 : 0)}
                                    </span>
                                )}
                                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
                            </button>

                            {hasActiveFilters && (
                                <button
                                    onClick={clearAllFilters}
                                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
                                >
                                    <XCircle className="w-4 h-4" />
                                    Cancella tutto
                                </button>
                            )}
                        </div>

                        {/* Dropdown Content */}
                        {showFilters && (
                            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                {/* Filtri Brand */}
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-3">Brand</p>
                                    <div className="flex flex-wrap gap-2">
                                        {brands.map(brand => (
                                            <button
                                                key={brand}
                                                onClick={() => toggleBrand(brand)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                    selectedBrands.includes(brand)
                                                        ? 'bg-primary text-white shadow-md'
                                                        : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:border-primary'
                                                }`}
                                            >
                                                {brand}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Filtri Badge */}
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-3">Tipo</p>
                                    <div className="flex flex-wrap gap-2">
                                        {badges.map(badge => (
                                            <button
                                                key={badge}
                                                onClick={() => toggleBadge(badge)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                    selectedBadges.includes(badge)
                                                        ? 'bg-primary text-white shadow-md'
                                                        : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:border-primary'
                                                }`}
                                            >
                                                {badge}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Filtri Prezzo */}
                                <div>
                                    <p className="text-sm font-medium text-gray-700 mb-3">Fascia di Prezzo</p>
                                    <div className="flex flex-wrap gap-2">
                                        {priceRanges.map(range => (
                                            <button
                                                key={range.label}
                                                onClick={() => togglePriceRange(range)}
                                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                    selectedPriceRange?.label === range.label
                                                        ? 'bg-primary text-white shadow-md'
                                                        : 'bg-gray-50 border-2 border-gray-200 text-gray-700 hover:border-primary'
                                                }`}
                                            >
                                                {range.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Grid Prodotti - Layout Minimalista */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {filteredProducts.map((product, index) => (
                                <article key={product.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20">
                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg ${product.badge === 'BESTSELLER' ? 'bg-primary text-white' :
                                                    product.badge === 'ICONICO' ? 'bg-warm-gray-800 text-white' :
                                                        product.badge === 'PREMIUM' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' :
                                                            'bg-gradient-to-r from-green-400 to-emerald-600 text-white'
                                                }`}>
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Immagine Prodotto */}
                                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center p-8">
                                            <Image
                                                src={product.image}
                                                alt={`${product.brand} ${product.model}`}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                style={{ objectFit: 'contain' }}
                                                className="group-hover:scale-110 transition-transform duration-700 ease-out"
                                                loading={index < 8 ? 'eager' : 'lazy'}
                                            />
                                        </div>

                                        {/* Overlay Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="space-y-1">
                                                    {product.features.slice(0, 2).map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-white text-xs">
                                                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info Prodotto - Design Minimal */}
                                    <div className="p-5 space-y-4">
                                        {/* Brand & Codice */}
                                        <div className="space-y-1.5 min-h-[60px] flex flex-col justify-center">
                                            <h3 className="font-bold text-base text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                                                {product.brand}
                                            </h3>
                                            <p className="text-sm text-gray-500 font-mono tracking-wide">
                                                {product.model}
                                            </p>
                                        </div>

                                        {/* CTA Centrato */}
                                        <button
                                            onClick={() => openProductModal(product)}
                                            className="group/btn w-full px-5 py-3 bg-gray-900 hover:bg-primary text-white text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                                            aria-label={`Scopri ${product.brand} ${product.model}`}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Scopri di più
                                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                <Filter className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Nessun prodotto trovato</h3>
                            <p className="text-gray-600 mb-6">Prova a modificare i filtri di ricerca</p>
                            <button
                                onClick={clearAllFilters}
                                className="px-6 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer"
                            >
                                Cancella tutti i filtri
                            </button>
                        </div>
                    )}

                    {/* CTA Final */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-10 lg:p-14 border border-primary/20">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Prova Prima di Acquistare
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Vieni nei nostri store di <strong>Augusta</strong> e <strong>Villasmundo</strong>.
                                I nostri esperti ti aiuteranno a scegliere l&#39;occhiale perfetto per te.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group px-8 py-4 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 justify-center cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Vieni in Negozio
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <button className="px-8 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3 justify-center cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Prenota Appuntamento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modale Prodotto */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
                    {/* Overlay per chiudere */}
                    <div
                        className="absolute inset-0"
                        onClick={closeProductModal}
                        aria-label="Chiudi modale"
                    />

                    {/* Container Modale */}
                    <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in duration-300 flex flex-col">
                        {/* Header Mobile */}
                        <div className="lg:hidden flex-shrink-0 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
                            <h2 className="font-bold text-base text-gray-900 truncate pr-4">
                                {selectedProduct.brand}
                            </h2>
                            <button
                                onClick={closeProductModal}
                                className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
                                aria-label="Chiudi"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Contenuto Principale - Scrollable */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6">
                                {/* Sezione Sinistra - Galleria Immagini */}
                                <div className="space-y-3 lg:sticky lg:top-0 lg:self-start">
                                    {/* Badge */}
                                    {selectedProduct.badge && (
                                        <div className="absolute top-8 left-8 z-10">
                                            <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg ${selectedProduct.badge === 'BESTSELLER' ? 'bg-primary text-white' :
                                                    selectedProduct.badge === 'ICONICO' ? 'bg-warm-gray-800 text-white' :
                                                        selectedProduct.badge === 'PREMIUM' ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' :
                                                            'bg-gradient-to-r from-green-400 to-emerald-600 text-white'
                                                }`}>
                                                {selectedProduct.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Immagine Principale */}
                                    <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                                        <Image
                                            src={selectedProduct.images[selectedImageIndex]}
                                            alt={`${selectedProduct.brand} ${selectedProduct.model} - Vista ${selectedImageIndex + 1}`}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            style={{ objectFit: 'contain' }}
                                            className="p-8"
                                            priority
                                        />
                                    </div>

                                    {/* Thumbnail Gallery */}
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                        {selectedProduct.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedImageIndex(idx)}
                                                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-gradient-to-br from-gray-50 to-gray-100 cursor-pointer ${selectedImageIndex === idx
                                                        ? 'border-primary shadow-lg'
                                                        : 'border-gray-200 hover:border-gray-300'
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Vista ${idx + 1}`}
                                                    fill
                                                    sizes="80px"
                                                    style={{ objectFit: 'contain' }}
                                                    className="p-2"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Sezione Destra - Dettagli Prodotto Minimal */}
                                <div className="space-y-6">
                                    {/* Close Button Desktop */}
                                    <button
                                        onClick={closeProductModal}
                                        className="hidden lg:block absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-20 cursor-pointer"
                                        aria-label="Chiudi"
                                    >
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>

                                    {/* Brand e Modello */}
                                    <div className="space-y-2 pb-6 border-b border-gray-200">
                                        <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                                            {selectedProduct.brand}
                                        </p>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                            {selectedProduct.model}
                                        </h2>
                                    </div>

                                    {/* Disponibilità */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
                                        <Check className="w-4 h-4 text-green-600" />
                                        <p className="text-sm text-green-700 font-medium">
                                            Disponibile in negozio
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        <h3 className="font-bold text-sm text-gray-900 uppercase tracking-wider">Caratteristiche</h3>
                                        <ul className="space-y-2">
                                            {selectedProduct.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Info Negozio */}
                                    <div className="space-y-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                                        <h3 className="font-bold text-gray-900 text-xs uppercase tracking-wider">
                                            Disponibile nei nostri Store
                                        </h3>
                                        <div className="space-y-1.5 text-xs">
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-gray-900">Augusta</p>
                                                    <p className="text-gray-600">Via Principe Umberto 76</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-gray-900">Villasmundo</p>
                                                    <p className="text-gray-600">Via Vittorio Emanuele 67</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="space-y-2">
                                        <button
                                            onClick={() => setShowStoreModal(true)}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm cursor-pointer"
                                        >
                                            <Phone className="w-4 h-4" />
                                            Prenota Appuntamento
                                        </button>
                                        <button
                                            onClick={() => router.push('/su-di-noi/dove-trovarci')}
                                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 hover:border-primary text-gray-900 font-semibold rounded-xl transition-all duration-300 text-sm cursor-pointer"
                                        >
                                            <MapPin className="w-4 h-4" />
                                            Vieni in Negozio
                                        </button>
                                    </div>

                                    {/* Info Aggiuntive */}
                                    <div className="pt-3 border-t border-gray-200">
                                        <ul className="space-y-1.5 text-xs text-gray-600">
                                            <li className="flex items-center gap-2">
                                                <Check className="w-3.5 h-3.5 text-green-600" />
                                                <span>Garanzia ufficiale 2 anni</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Check className="w-3.5 h-3.5 text-green-600" />
                                                <span>Esame della vista gratuito</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Check className="w-3.5 h-3.5 text-green-600" />
                                                <span>Custodia e panno inclusi</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modale Scelta Sede */}
            {showStoreModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    {/* Overlay per chiudere */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setShowStoreModal(false)}
                        aria-label="Chiudi modale"
                    />

                    {/* Container Modale */}
                    <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-bold text-gray-900">Scegli la Sede</h3>
                            <button
                                onClick={() => setShowStoreModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer"
                                aria-label="Chiudi"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        {/* Sedi */}
                        <div className="space-y-3">
                            {/* Augusta */}
                            <a
                                href="tel:0931521985"
                                className="block p-4 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 hover:border-primary rounded-xl transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 mb-1">Augusta</h4>
                                        <p className="text-sm text-gray-600 mb-2">Via Principe Umberto 76</p>
                                        <p className="text-lg font-bold text-primary group-hover:underline">
                                            0931 521985
                                        </p>
                                    </div>
                                </div>
                            </a>

                            {/* Villasmundo */}
                            <a
                                href="tel:0931959425"
                                className="block p-4 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 hover:border-primary rounded-xl transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-gray-900 mb-1">Villasmundo</h4>
                                        <p className="text-sm text-gray-600 mb-2">Via Vittorio Emanuele 67</p>
                                        <p className="text-lg font-bold text-primary group-hover:underline">
                                            0931 959425
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Footer Info */}
                        <p className="mt-6 text-center text-xs text-gray-500">
                            Clicca per chiamare direttamente
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}
