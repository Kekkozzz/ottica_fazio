'use client';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

import Image from "next/image";

export default function MostSold() {
    // Dati dei prodotti più venduti
    const mostSoldProducts = [
        {
            id: 1,
            brand: "Ray-Ban",
            serial: "RB2140-901",
            price: "€129,00",
            image: "/occhiali/o1.png"
        },
        {
            id: 2,
            brand: "Gucci",
            serial: "GG0061S-002",
            price: "€210,00",
            image: "/occhiali/o2.png"
        },
        {
            id: 3,
            brand: "Persol",
            serial: "PO0649-24/31",
            price: "€179,00",
            image: "/occhiali/o1.png"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h2 className="my-8 md:my-16 text-2xl sm:text-3xl md:text-5xl font-extrabold font-josefin text-center mb-8 md:mb-12 tracking-tight text-black">
                I PIÙ VENDUTI
            </h2>
            <section className="w-full py-8 md:py-16 flex flex-col items-center justify-center bg-[#fafafa] border border-gray-200 shadow-lg rounded-[0px] md:rounded-[48px] max-w-full md:max-w-[1600px] mx-auto">
                <StaggerContainer>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full px-4">
                        {mostSoldProducts.map((product) => (
                            <StaggerItem key={product.id}>
                                <div className="flex flex-col items-center justify-center p-4 w-56 sm:w-64 md:w-80 mb-6 sm:mb-0">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full overflow-hidden flex items-center justify-center mb-4">
                                        <Image
                                            src={product.image}
                                            alt={product.brand + ' ' + product.serial}
                                            width={220}
                                            height={220}
                                            className="object-contain w-full h-full"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg md:text-xl mb-1 font-bevietnam">{product.brand}</h3>
                                        <p className="text-sm md:text-base text-gray-700 mb-1"><span className="font-semibold">{product.serial}</span></p>
                                        <p className="text-base md:text-lg font-bold text-[#2d3142]">{product.price}</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </section>
    );
}