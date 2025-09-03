'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function OcchialiSole() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['/models/mod1.jpg', '/models/mod2.avif', '/models/mod3.webp'];

    // Bestseller occhiali da sole
    const bestsellers = [
        {
            id: 1,
            brand: "Ray-Ban",
            model: "Aviator Classic",
            image: "/logos/RayBann.png",
            price: "€ 180",
            description: "Il modello iconico che ha fatto la storia",
            badge: "BESTSELLER"
        },
        {
            id: 2,
            brand: "Persol",
            model: "714 Steve McQueen",
            image: "/logos/persoll.png",
            price: "€ 320",
            description: "Eleganza italiana senza tempo",
            badge: "ICONICO"
        },
        {
            id: 3,
            brand: "Gucci",
            model: "GG Collection",
            image: "/logos/gucci.png",
            price: "€ 450",
            description: "Lusso e stile contemporaneo",
            badge: "PREMIUM"
        },
        {
            id: 4,
            brand: "Versace",
            model: "Medusa Charm",
            image: "/logos/versace.png",
            price: "€ 380",
            description: "Design audace e distintivo",
            badge: "NUOVO"
        }
    ];

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((p) => (p + 1) % images.length);
        }, 4000);
        return () => clearInterval(id);
    }, [images.length]);

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
            <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full">
                <StaggerContainer staggerDelay={0.12} className="w-full">

                    {/* =============== <= md : NUOVO LAYOUT =============== */}
                    <section className="lg:hidden w-full">
                        <div className="mx-auto w-full max-w-md">
                            {/* Badge */}
                            <StaggerItem direction="up" blur>
                                <div className="flex justify-center">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-[11px] font-semibold text-white shadow">
                                        🏷️ Collezione Estiva 2025
                                    </span>
                                </div>
                            </StaggerItem>

                            {/* Titolo */}
                            <StaggerItem direction="up" blur>
                                <h1 className="mt-4 text-center font-extrabold leading-[0.95] tracking-tight">
                                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900">I NOSTRI</span>
                                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-600">OCCHIALI</span>
                                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-red-600">DA SOLE</span>
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
                                    Proteggi i tuoi occhi con stile. Scopri la nostra collezione di occhiali di alta qualità,
                                    dove eleganza e funzionalità si incontrano.
                                </p>
                            </StaggerItem>

                            {/* CTA */}
                            <StaggerItem direction="up" blur>
                                <div className="mt-5 space-y-3">
                                    <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-red-700 active:scale-[0.99]">
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
                            <StaggerItem direction="up" blur className="mb-6">
                                <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-sm font-medium rounded-full shadow-lg">
                                    ✨ Collezione Estiva 2025
                                </span>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[0.9] mb-4 sm:mb-6 lg:mb-8">
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                                        I NOSTRI
                                    </span>
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                        OCCHIALI
                                    </span>
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                        DA SOLE
                                    </span>
                                </h1>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                                    Proteggi i tuoi occhi con stile. Scopri la nostra collezione di occhiali di alta qualità, dove eleganza e funzionalità si incontrano.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <div className="flex gap-4">
                                    <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
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

            {/* Sezione Bestsellers */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-12">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                                    I Nostri <span className="text-primary">Bestseller</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Scopri i modelli iconici dei brand più prestigiosi al mondo
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {bestsellers.map((item, index) => (
                                <StaggerItem key={item.id} direction="up">
                                    <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                        {/* Badge */}
                                        <div className="relative p-6 pb-4">
                                            <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold ${
                                                item.badge === 'BESTSELLER' ? 'bg-primary text-white' :
                                                item.badge === 'ICONICO' ? 'bg-warm-gray-600 text-white' :
                                                item.badge === 'PREMIUM' ? 'bg-yellow-500 text-white' :
                                                'bg-green-500 text-white'
                                            }`}>
                                                {item.badge}
                                            </div>
                                            
                                            {/* Logo Brand */}
                                            <div className="w-full h-16 mb-4 flex items-center justify-center">
                                                <Image
                                                    src={item.image}
                                                    alt={item.brand}
                                                    width={80}
                                                    height={40}
                                                    className="max-h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Contenuto */}
                                        <div className="px-6 pb-6">
                                            <h3 className="font-bold text-lg text-gray-900 mb-1">
                                                {item.brand}
                                            </h3>
                                            <h4 className="text-primary font-semibold mb-2">
                                                {item.model}
                                            </h4>
                                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            
                                            <div className="flex items-center justify-between">
                                                <span className="text-xl font-bold text-primary">
                                                    {item.price}
                                                </span>
                                                <button className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-sm">
                                                    Scopri
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <StaggerItem direction="up">
                                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 max-w-4xl mx-auto">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                        Vieni a Scoprire l&apos;Intera Collezione in Negozio
                                    </h3>
                                    <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                                        Oltre 500 modelli ti aspettano nei nostri store di Augusta e Villasmundo. 
                                        Prova, tocca e scegli gli occhiali perfetti per te.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button className="group px-8 py-4 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2 justify-center">
                                            Vieni in Negozio
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                        <button className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                                            Prenota Appuntamento
                                        </button>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
