'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function Team() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['/team/dinaNovo.jpg', '/team/dinaNovo.jpg', '/team/dinaNovo.jpg'];

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


                            {/* Titolo */}
                            <StaggerItem direction="up" blur>
                                <h1 className="mt-4 text-center font-extrabold leading-[0.95] tracking-tight">
                                    <span className="block text-6xl text-zinc-900">IL NOSTRO</span>
                                    <span className="block text-6xl text-red-600">TEAM</span>
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
                            <StaggerItem direction="up" blur>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[0.9] mb-4 sm:mb-6 lg:mb-8">
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
                                        IL NOSTRO
                                    </span>
                                    <span className="py-1 sm:py-2 block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
                                        TEAM
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
                                </div>
                            </div>
                        </FadeInView>
                    </section>
                </StaggerContainer>
            </div>
        </main>
    );
}
