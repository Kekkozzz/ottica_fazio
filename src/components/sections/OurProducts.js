'use client';

import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import Image from "next/image";

export default function OurProducts() {
    // Dati delle card prodotti
    const products = [
        {
            id: 1,
            name: "Occhiali da sole",
            image: "/models/mod1.jpg",
            description: "Protezione UV completa con stile e comfort per ogni occasione.",
            features: ["✅ Protezione UV400", "🎨 50+ modelli disponibili", "🏷️ Da €89"],
            cta: "Prova in negozio",
            link: "/prodotti/occhiali-sole"
        },
        {
            id: 2,
            name: "Occhiali da vista",
            image: "/models/mod2.avif",
            description: "Correzione visiva personalizzata per una visione perfetta.",
            features: ["👀 Esame della vista incluso", "🔍 Lenti progressive disponibili", "⚡ Consegna in 48h"],
            cta: "Prenota visita",
            link: "/prodotti/occhiali-vista"
        },
        {
            id: 3,
            name: "Lenti a contatto",
            image: "/models/mod3.webp",
            description: "Comfort e libertà di movimento per ogni stile di vita.",
            features: ["🎯 Prova gratuita", "📦 Consegna mensile", "💧 Giornaliere e mensili"],
            cta: "Ordina online",
            link: "/prodotti/lenti-contatto"
        },
        {
            id: 4,
            name: "Nuance Audio",
            image: "/models/mod4.avif",
            description: "Tecnologia audio innovativa integrata nei tuoi occhiali.",
            features: ["🔊 Audio HD integrato", "🔋 8h di autonomia", "📱 Bluetooth 5.0"],
            cta: "Scopri l'innovazione",
            link: "/prodotti/nuance-audio"
        }
    ];

    // Funzione per gestire la navigazione
    const handleNavigation = (link, e) => {
        e.stopPropagation(); // Previene il flip quando si clicca sul link
        // Qui puoi usare Next.js router o window.location
        console.log(`Navigando verso: ${link}`);
        // window.location.href = link; // Per navigazione diretta
        // o router.push(link); se usi useRouter di Next.js
    };

    return (
        <section className='min-h-screen flex flex-col items-center justify-center gap-2 bg-[#fafafa]'>
            <h2 className="my-8 md:my-16 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-warm-gray-900 mb-4 md:mb-6">
                I NOSTRI PRODOTTI
            </h2>
            <p className="text-warm-gray-600 text-xl max-w-3xl mx-auto leading-relaxed text-center">
                Scopri la nostra selezione di prodotti esclusivi, pensati per offrirti il massimo del comfort e dello stile.
            </p>
            <section className="w-full py-8 md:py-16 my-8 md:my-16 flex flex-col items-center justify-center bg-[#fafafa] border border-gray-200 shadow-lg rounded-[0px] md:rounded-[48px] max-w-full md:max-w-[1600px] mx-auto">
                <StaggerContainer>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full px-4 flex-wrap">
                        {/* Cards prodotti con effetto flip */}
                        {products.map((product) => (
                            <StaggerItem key={product.id}>
                                <div
                                    className="relative w-56 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[32rem] cursor-pointer group"
                                    style={{ perspective: '1000px' }}
                                >
                                    <div
                                        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180"
                                        style={{
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {/* Fronte della card */}
                                        <div
                                            className="absolute inset-0 w-full h-full bg-white flex items-center justify-center rounded-[40px] md:rounded-[48px] shadow-lg border-2 border-[#2d3142] backface-hidden"
                                            style={{ backfaceVisibility: 'hidden' }}
                                        >
                                            <Image
                                                width={400}
                                                height={600}
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover rounded-[40px] md:rounded-[48px]"
                                            />
                                        </div>

                                        {/* Retro della card */}
                                        <div
                                            className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2d3142] to-[#4f5d75] flex flex-col items-center justify-center rounded-[40px] md:rounded-[48px] shadow-lg border-2 border-[#2d3142] text-white p-6 backface-hidden"
                                            style={{
                                                backfaceVisibility: 'hidden',
                                                transform: 'rotateY(180deg)'
                                            }}
                                        >
                                            <h3 className="font-bold text-xl md:text-2xl mb-3 text-center font-bevietnam">
                                                {product.name}
                                            </h3>
                                            
                                            {/* Features list */}
                                            <div className="mb-4 space-y-2 w-full">
                                                {product.features.map((feature, index) => (
                                                    <div key={index} className="text-sm md:text-base text-center opacity-95 font-medium">
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Call to action button */}
                                            <button
                                                onClick={(e) => handleNavigation(product.link, e)}
                                                className="bg-white text-[#2d3142] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-200 text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                                            >
                                                {product.cta}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>

            <style jsx>{`
                .group-hover\\:rotate-y-180:hover {
                    transform: rotateY(180deg);
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .transform-style-preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </section >
    );
}