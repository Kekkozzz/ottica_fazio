'use client';

import { useState } from 'react';
import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import LogosCarousel from '@/components/sections/LogosCarousel';
import { Mail, X, Play } from 'lucide-react';

export default function Hero() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const openVideoModal = () => setIsVideoModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);
    return (
        <main className="relative w-full bg-white overflow-hidden mt-0 md:mt-16">
            {/* Layout mobile - Stack verticale (solo < 600px) */}
            <div className="sm:hidden">
                {/* Video mobile - sopra il contenuto */}
                <div className="w-full h-[50vh] relative">
                    <FadeInView direction="down" delay={0.2}>
                        <div className="relative w-full h-full">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label="Video promozionale Nuance Audio - dispositivi acustici integrati negli occhiali"
                            >
                                <source src="/videos/NUANCE_Banner.webm" type="video/webm" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    </FadeInView>
                </div>

                {/* Contenuto mobile - sotto il video */}
                <div className="w-full flex flex-col justify-center items-center text-center px-8 md:px-16 py-12 -mt-2 sm:-mt-0">
                    <StaggerContainer staggerDelay={0.2}>
                        <StaggerItem direction="up">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                                <span className="block text-black mb-2">
                                    NOVITÀ
                                </span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <p className="text-lg leading-relaxed text-gray-700 max-w-lg mb-8">
                                Sentire meglio non è mai stato così semplice. Il nuovo
                                dispositivo acustico di EssilorLuxottica, integrato nei tuoi
                                occhiali, è pensato per adulti con perdite uditive leggere o
                                moderate.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <p className="text-lg text-gray-800 max-w-lg mb-8">
                                I prodotti Nuance Audio sono <strong>disponibili presso il nostro store</strong>. Vieni
                                a provare e scopri un nuovo modo di ascoltare.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <button 
                                    className="group px-8 py-3 bg-black hover:text-white/70 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer"
                                    aria-label="Prenota un appuntamento per visita optometrica"
                                    type="button"
                                >
                                    Prenota un appuntamento
                                </button>

                                <button 
                                    className="group px-8 py-3 border border-black hover:bg-black hover:text-white text-black font-medium rounded-full transition-all duration-300 cursor-pointer"
                                    aria-label="Guarda il video promozionale Nuance Audio"
                                    type="button"
                                    onClick={openVideoModal}
                                >
                                    Guarda il video
                                </button>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </div>

            {/* Layout tablet - Video sopra, testo sotto (600px - 1023px) */}
            <div className="hidden sm:flex lg:hidden flex-col min-h-screen">
                {/* Sezione Superiore - Video */}
                <div className="w-full h-[55vh] relative">
                    <FadeInView direction="down" delay={0.2}>
                        <div className="relative w-full h-full">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label="Video promozionale Nuance Audio - dispositivi acustici integrati negli occhiali"
                            >
                                <source src="/videos/NUANCE_Banner.webm" type="video/webm" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    </FadeInView>
                </div>

                {/* Sezione Inferiore - Contenuto */}
                <div className="w-full flex items-center justify-center p-6 py-8 relative bg-white min-h-[45vh]">
                    <div className="max-w-lg w-full text-center">
                        <StaggerContainer staggerDelay={0.2}>
                            <StaggerItem direction="up">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">NOVITÀ</h1>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <p className="mb-4 text-gray-600 text-base md:text-lg">
                                    Sentire meglio non è mai stato così semplice. Il nuovo
                                    dispositivo acustico di EssilorLuxottica, integrato nei tuoi
                                    occhiali, è pensato per adulti con perdite uditive leggere o
                                    moderate.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <p className="mb-6 text-gray-600 text-base md:text-lg">
                                    I prodotti Nuance Audio sono <span className="font-bold text-gray-800">disponibili presso il nostro store</span>. Vieni
                                    a provare e scopri un nuovo modo di ascoltare.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <button 
                                        className="bg-black text-white py-3 px-5 rounded-full cursor-pointer hover:shadow-xl transition duration-300 text-sm"
                                        aria-label="Prenota un appuntamento per visita optometrica"
                                        type="button"
                                    >
                                        Prenota un appuntamento
                                    </button>
                                    <button 
                                        className="border border-gray-400 text-gray-800 py-3 px-5 rounded-full transition cursor-pointer hover:bg-black hover:text-white text-sm"
                                        aria-label="Guarda il video promozionale Nuance Audio"
                                        type="button"
                                        onClick={openVideoModal}
                                    >
                                        Guarda il video
                                    </button>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    
                </div>
            </div>

            {/* Layout desktop - Due sezioni affiancate (1024px+) */}
            <div className="hidden lg:flex min-h-screen">

                {/* Sezione Sinistra - Contenuto */}
                <div className="w-1/2 flex items-center justify-center p-8 lg:p-16 relative">
                    <div className="max-w-lg w-full">
                        <StaggerContainer staggerDelay={0.2}>
                            <StaggerItem direction="up">
                                <h1 className="xl:text-8xl lg:text-6xl font-bold mb-6">NOVITÀ</h1>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <p className="mb-8 text-gray-600 xl:text-3xl lg:text-2xl">
                                    Sentire meglio non è mai stato così semplice. Il nuovo
                                    dispositivo acustico di EssilorLuxottica, integrato nei tuoi
                                    occhiali, è pensato per adulti con perdite uditive leggere o
                                    moderate.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <p className="mb-8 text-gray-600 xl:text-2xl lg:text-xl">
                                    I prodotti Nuance Audio sono <span className="font-bold text-gray-800">disponibili presso il nostro store</span>. Vieni
                                    a provare e scopri un nuovo modo di ascoltare.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button 
                                        className="bg-black text-white py-5 px-8 rounded-full cursor-pointer hover:shadow-xl transition duration-300 text-lg"
                                        aria-label="Prenota un appuntamento per visita optometrica"
                                        type="button"
                                    >
                                        Prenota un appuntamento
                                    </button>
                                    <button 
                                        className="border border-gray-400 text-gray-800 py-5 px-5 rounded-full transition cursor-pointer hover:bg-gray-100 hover:text-black text-lg"
                                        aria-label="Guarda il video promozionale Nuance Audio"
                                        type="button"
                                        onClick={openVideoModal}
                                    >
                                        Guarda il video
                                    </button>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>

                {/* Sezione Destra - Video */}
                <div className="w-1/2 flex items-center justify-center p-8">
                    <FadeInView direction="right" delay={0.4}>
                        <div className="relative max-w-full w-full h-auto">
                            <video
                                className="w-full h-auto object-contain rounded-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label="Video promozionale Nuance Audio - dispositivi acustici integrati negli occhiali"
                            >
                                <source src="/videos/NUANCE_Banner.webm" type="video/webm" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    </FadeInView>
                </div>
            </div>

            {/* Modale Video */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full h-full max-w-4xl max-h-[80vh] m-4">
                        {/* Pulsante Chiudi */}
                        <button
                            onClick={closeVideoModal}
                            className="absolute -top-12 right-0 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                            aria-label="Chiudi video"
                            type="button"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Container Video */}
                        <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl">
                            <video
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                muted
                                preload="metadata"
                                aria-label="Video promozionale completo Nuance Audio"
                            >
                                <source src="/videos/NUANCE_v.mp4" type="video/mp4" />
                                Il tuo browser non supporta la riproduzione video.
                            </video>
                        </div>

                        {/* Overlay informativo */}
                        <div className="absolute top-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                            <h3 className="font-semibold text-lg mb-1">Nuance Audio by EssilorLuxottica</h3>
                            <p className="text-sm opacity-90">Dispositivi acustici integrati negli occhiali per una nuova esperienza di ascolto</p>
                        </div>
                    </div>

                    {/* Click outside per chiudere */}
                    <div 
                        className="absolute inset-0 -z-10"
                        onClick={closeVideoModal}
                        aria-label="Chiudi modale cliccando fuori"
                    ></div>
                </div>
            )}
        </main>
    )
}