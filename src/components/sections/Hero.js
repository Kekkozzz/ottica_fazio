import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { Volume2, Eye, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    return (
        <main className="relative w-full min-h-screen bg-white overflow-hidden mt-0 md:mt-16">
            {/* Background elegante e minimal */}
            <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-50/30 via-white to-blue-50/20"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-screen py-16">
                    
                    {/* Colonna Testo - Pulita e professionale */}
                    <div className="space-y-10">
                        <StaggerContainer staggerDelay={0.15}>
                            <StaggerItem direction="up">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-8">
                                    <span className="block text-warm-gray-900 mb-2">
                                        RIVOLUZIONI
                                    </span>
                                    <span className="block text-primary mb-2">
                                        NUANCE
                                    </span>
                                    <span className="block text-primary">
                                        AUDIO
                                    </span>
                                </h1>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <p className="text-xl md:text-2xl leading-relaxed text-warm-gray-700 max-w-xl mb-10">
                                    <strong className="text-warm-gray-900">Sentire meglio non è mai stato così semplice.</strong> Il nuovo dispositivo acustico di EssilorLuxottica, integrato nei tuoi occhiali, ridefinisce l&apos;esperienza uditiva per adulti con perdite leggere o moderate.
                                </p>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="flex flex-wrap gap-8 mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        <span className="text-warm-gray-600 font-medium">Tecnologia invisibile</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                                        <span className="text-warm-gray-600 font-medium">Comfort superiore</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-warm-gray-500"></div>
                                        <span className="text-warm-gray-600 font-medium">Design elegante</span>
                                    </div>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="bg-warm-gray-50/80 border border-warm-gray-200/50 rounded-2xl p-8 mb-10">
                                    <p className="text-lg text-warm-gray-800 mb-3">
                                        I prodotti Nuance Audio sono <span className="font-semibold text-primary">disponibili presso il nostro store</span>.
                                    </p>
                                    <p className="text-warm-gray-600">
                                        Vieni a provare e scopri un nuovo modo di ascoltare il mondo.
                                    </p>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="up">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group px-10 py-4 bg-primary hover:bg-primary-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3">
                                        <Volume2 className="w-5 h-5" />
                                        Prenota una Prova
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    
                                    <button className="group px-10 py-4 border-2 border-warm-gray-300 hover:border-warm-gray-400 text-warm-gray-700 hover:text-warm-gray-900 font-semibold rounded-2xl transition-all duration-300 flex items-center justify-center gap-3">
                                        <Play className="w-5 h-5" />
                                        Guarda il Video
                                    </button>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>

                    {/* Colonna Immagine - Minimal e bilanciata */}
                    <div className="relative">
                        <FadeInView direction="right" delay={0.4}>
                            <div className="relative">
                                {/* Container minimal per l'immagine */}
                                <div className="relative bg-gradient-to-br from-blue-50/40 to-indigo-50/30 rounded-[2rem] p-12 lg:p-16">

                                    {/* Immagine centrale ottimizzata */}
                                    <div className="relative group">
                                        <div className="relative w-full aspect-[16/10] max-w-lg mx-auto">
                                            <Image
                                                src="/logos/Nuance.webp"
                                                alt="Nuance Audio - Occhiali con tecnologia acustica integrata"
                                                fill
                                                className="object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    {/* Stats minimali */}
                                    <div className="grid grid-cols-3 gap-4 mt-8">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary mb-1">95%</div>
                                            <div className="text-xs text-warm-gray-600 font-medium">Chiarezza</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gold-600 mb-1">12h</div>
                                            <div className="text-xs text-warm-gray-600 font-medium">Autonomia</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-warm-gray-700 mb-1">Invisibile</div>
                                            <div className="text-xs text-warm-gray-600 font-medium">Design</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ombra sottile */}
                                <div className="absolute -z-10 top-4 left-4 w-full h-full bg-warm-gray-200/20 rounded-[2rem]"></div>
                            </div>
                        </FadeInView>
                    </div>
                </div>

                {/* Trust indicators minimal */}
                <FadeInView delay={0.8} className="text-center pb-20">
                    <div className="inline-flex items-center bg-white border border-warm-gray-200 rounded-2xl shadow-sm overflow-hidden">
                        <div className="flex items-center gap-3 px-8 py-4">
                            <Eye className="w-5 h-5 text-primary" />
                            <span className="font-medium text-warm-gray-700">Esame gratuito</span>
                        </div>
                        <div className="w-px h-8 bg-warm-gray-200"></div>
                        <div className="flex items-center gap-3 px-8 py-4">
                            <Volume2 className="w-5 h-5 text-gold-600" />
                            <span className="font-medium text-warm-gray-700">Prova 30 giorni</span>
                        </div>
                        <div className="w-px h-8 bg-warm-gray-200"></div>
                        <div className="flex items-center gap-3 px-8 py-4">
                            <div className="w-5 h-5 rounded-full bg-warm-gray-100 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-warm-gray-600"></div>
                            </div>
                            <span className="font-medium text-warm-gray-700">Garanzia 2 anni</span>
                        </div>
                    </div>
                </FadeInView>
            </div>
        </main>
    )
}