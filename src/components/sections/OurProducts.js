'use client';

import { useState } from 'react';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import Image from "next/image";

export default function OurProducts() {
    // Stato per tracciare quale card è capovolta
    const [flippedCards, setFlippedCards] = useState({});

    // Dati delle card prodotti
    const products = [
        {
            id: 1,
            name: "Prodotto 1",
            image: "/models/mod1.jpg",
            description: "Descrizione del prodotto 1",
            link: "/prodotto-1"
        },
        {
            id: 2,
            name: "Prodotto 2",
            image: "/models/mod2.avif",
            description: "Descrizione del prodotto 2",
            link: "/prodotto-2"
        },
        {
            id: 3,
            name: "Prodotto 3",
            image: "/models/mod3.webp",
            description: "Descrizione del prodotto 3",
            link: "/prodotto-3"
        },
        {
            id: 4,
            name: "Prodotto 4",
            image: "/models/mod4.avif",
            description: "Descrizione del prodotto 4",
            link: "/prodotto-4"
        }
    ];

    // Funzione per gestire il click sulla card
    const handleCardClick = (productId) => {
        setFlippedCards(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }));
    };

    // Funzione per gestire la navigazione
    const handleNavigation = (link, e) => {
        e.stopPropagation(); // Previene il flip quando si clicca sul link
        // Qui puoi usare Next.js router o window.location
        console.log(`Navigando verso: ${link}`);
        // window.location.href = link; // Per navigazione diretta
        // o router.push(link); se usi useRouter di Next.js
    };

    return (
        <section className='min-h-screen flex flex-col items-center justify-center gap-6'>
            <h2 className="my-8 md:my-16 text-2xl sm:text-3xl md:text-5xl font-extrabold font-josefin text-center mb-8 md:mb-12 tracking-tight text-black">
                I NOSTRI PRODOTTI
            </h2>
            <section className="w-full py-8 md:py-16 my-8 md:my-16 flex flex-col items-center justify-center bg-[#fafafa] border border-gray-200 shadow-lg rounded-[32px] md:rounded-[48px] max-w-full md:max-w-[1600px] mx-auto">
                <StaggerContainer>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full px-4 flex-wrap">
                        {/* Cards prodotti con effetto flip */}
                        {products.map((product) => (
                            <StaggerItem key={product.id}>
                                <div
                                    className="relative w-56 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[32rem] cursor-pointer"
                                    style={{ perspective: '1000px' }}
                                    onClick={() => handleCardClick(product.id)}
                                >
                                    <div
                                        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards[product.id] ? 'rotate-y-180' : ''
                                            }`}
                                        style={{
                                            transformStyle: 'preserve-3d',
                                            transform: flippedCards[product.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
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
                                            <h3 className="font-bold text-lg md:text-xl mb-2 text-center font-bevietnam">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm md:text-base mb-4 text-center opacity-90">
                                                {product.description}
                                            </p>
                                            <button
                                                onClick={(e) => handleNavigation(product.link, e)}
                                                className="bg-white text-[#2d3142] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
                                            >
                                                Scopri di più
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