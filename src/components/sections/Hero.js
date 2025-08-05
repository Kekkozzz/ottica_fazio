import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import LogosCarousel from '@/components/sections/LogosCarousel';
import { Mail } from 'lucide-react';

export default function Hero() {
    return (
        <main className="relative w-full bg-white overflow-hidden mt-0 md:mt-16">
            {/* Layout mobile - Stack verticale */}
            <div className="lg:hidden">
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
                            >
                                <source src="/videos/NUANCE_Banner.webm" type="video/webm" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    </FadeInView>
                </div>

                {/* Contenuto mobile - sotto il video */}
                <div className="w-full flex flex-col justify-center items-center text-center px-8 md:px-16 py-12">
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
                                <button className="group px-8 py-3 bg-black hover:text-white/70 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer">
                                    Prenota un appuntamento
                                </button>

                                <button className="group px-8 py-3 border border-black hover:bg-black hover:text-white text-black font-medium rounded-full transition-all duration-300 cursor-pointer">
                                    Guarda il video
                                </button>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </div>

            {/* Layout desktop - Due sezioni affiancate */}
            <div className="hidden lg:flex min-h-screen">

                {/* Sezione Sinistra - Contenuto */}
                <div className="w-1/2 flex flex-col justify-center items-start text-left px-20 py-20">
                    <StaggerContainer staggerDelay={0.2}>
                        <StaggerItem direction="up">
                            <h1 className="text-6xl font-bold tracking-tight leading-tight mb-8">
                                <span className="block text-black mb-2">
                                    NOVITÀ
                                </span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <p className="text-xl leading-relaxed text-gray-700 max-w-lg mb-12">
                                Sentire meglio non è mai stato così semplice. Il nuovo
                                dispositivo acustico di EssilorLuxottica, integrato nei tuoi
                                occhiali, è pensato per adulti con perdite uditive leggere o
                                moderate.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <p className="text-lg text-gray-800 max-w-lg mb-12">
                                I prodotti Nuance Audio sono <strong>disponibili presso il nostro store</strong>. Vieni
                                a provare e scopri un nuovo modo di ascoltare.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 mb-16">
                                <button className="group px-8 py-3 bg-black hover:text-white/70 text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg cursor-pointer">
                                    Prenota un appuntamento
                                </button>

                                <button className="group px-8 py-3 border border-black hover:bg-black hover:text-white text-black font-medium rounded-full transition-all duration-300 cursor-pointer">
                                    Guarda il video
                                </button>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>

                {/* Sezione Destra - Video */}
                <div className="w-1/2 flex flex-col h-[100vh]">
                    <FadeInView direction="right" delay={0.4}>
                        <div className="relative w-full h-full">
                            <video
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/videos/NUANCE_Banner.webm" type="video/webm" />
                                Il tuo browser non supporta il tag video.
                            </video>
                        </div>
                    </FadeInView>
                </div>
            </div>
        </main>
    )
}