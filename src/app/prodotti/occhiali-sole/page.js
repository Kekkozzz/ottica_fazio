'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function OcchialiSole() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Simulate multiple product images
    const images = [
        "/models/mod1.jpg",
        "/models/mod2.avif",
        "/models/mod3.webp"
    ];

    useEffect(() => {
        setIsVisible(true);

        // Auto-rotate images
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
            <div className="relative z-10 flex items-center justify-center min-h-screen pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
                <StaggerContainer staggerDelay={0.15} className="w-full">
                    <section className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center gap-6 sm:gap-8 lg:gap-16">
                        {/* Enhanced text column */}
                        <div className="flex-1 flex flex-col justify-center items-start w-full">
                            <StaggerItem direction="up" blur className="mb-4 sm:mb-6">
                                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
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
                                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-full lg:max-w-lg leading-relaxed">
                                    Proteggi i tuoi occhi con stile. Scopri la nostra collezione di occhiali da sole di alta qualità, dove eleganza e funzionalità si incontrano.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                                    <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                        <span className="text-sm sm:text-base">Scopri la Collezione</span>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>

                                    <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-red-600 hover:text-red-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                                        Prenota Appuntamento
                                    </button>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="up" blur>
                                {/* Stats - Improved mobile layout */}
                                <div className="flex justify-center sm:justify-start gap-6 sm:gap-8 mt-8 sm:mt-12 w-full">
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">500+</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Modelli</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">25+</div>
                                        <div className="text-xs sm:text-sm text-gray-600">Anni Esperienza</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-xl sm:text-2xl font-bold text-red-600">100%</div>
                                        <div className="text-xs sm:text-sm text-gray-600">UV Protection</div>
                                    </div>
                                </div>
                            </StaggerItem>
                        </div>

                        {/* Enhanced image column - Better mobile handling */}
                        <FadeInView direction="right" blur duration={1.2} className="flex-1 flex justify-center items-center w-full lg:w-auto mt-6 lg:mt-0">
                            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                {/* Main image container - Responsive sizing */}
                                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                                    {images.map((image, index) => (
                                        <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
                                            <Image
                                                src={image}
                                                alt={`Occhiali da sole modello ${index + 1}`}
                                                fill
                                                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
                                                style={{ objectFit: 'cover' }}
                                                priority={index === 0}
                                            />
                                        </div>
                                    ))}

                                    {/* Subtle gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>

                                    {/* Badge - Responsive sizing */}
                                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                                        <span className="text-xs sm:text-sm font-semibold text-red-600">NUOVO</span>
                                    </div>
                                </div>

                                {/* Simple decorative background - Responsive positioning */}
                                <div className="absolute -z-10 -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 w-full h-full bg-gradient-to-br from-red-100/60 to-orange-100/60 rounded-2xl lg:rounded-3xl"></div>

                                {/* Image indicators - Better mobile spacing */}
                                <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 lg:mt-8">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                ? 'bg-red-600 w-6 sm:w-8 lg:w-10'
                                                : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-3'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </FadeInView>
                    </section>
                </StaggerContainer>
            </div>
        </main>
    );
}