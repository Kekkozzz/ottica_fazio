'use client';

import Image from 'next/image';

const logos = [
    { src: '/logos/CentroStylee.png', alt: 'Centro Style' },
    { src: '/logos/invu.png', alt: 'Invu' },
    { src: '/logos/RayBann.png', alt: 'RayBan' },
    { src: '/logos/MKk.png', alt: 'Michael Kors' },
    { src: '/logos/Bale.png', alt: 'Balenciaga' },
    { src: '/logos/persoll.png', alt: 'Persol' },
    { src: '/logos/yale.png', alt: 'Yalea' },
    { src: '/logos/Twinset.png', alt: 'Twinset' },
    { src: '/logos/versace.png', alt: 'Versace' },
    { src: '/logos/polo.png', alt: 'Polo Ralph Lauren' },
    { src: '/logos/DG.png', alt: 'Dolce & Gabbana' },
    { src: '/logos/ferrarii.png', alt: 'Ferrari' },
    { src: '/logos/GA.png', alt: 'Giorgio Armani' },
    { src: '/logos/sferoflex.png', alt: 'Sferoflex' },
    { src: '/logos/tiffany.png', alt: 'Tiffany & Co.' },
    { src: '/logos/Gucci.png', alt: 'Gucci' },
    { src: '/logos/diesel.png', alt: 'Diesel' },
    { src: '/logos/Burb.png', alt: 'Burberry' },
    { src: '/logos/lux.png', alt: 'Luxottica' },
    { src: '/logos/swa.png', alt: 'Swarovski' },
    { src: '/logos/NuanceLogo.png', alt: 'Nuance' },
    { src: '/logos/jimmy.png', alt: 'Jimmy Choo' },
    { src: '/logos/SL.png', alt: 'Saint Laurent' },
    { src: '/logos/JC.png', alt: 'Just Cavalli' },
];

export default function LogosCarousel() {
    // Triplichiamo l'array per garantire un loop perfetto senza interruzioni
    const triplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="w-full bg-white py-4 border-t border-b border-black overflow-hidden relative">
            {/* Container principale del carosello */}
            <div className="flex animate-infinite-scroll">
                {triplicatedLogos.map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center min-w-[120px] mx-6 flex-shrink-0">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={120}
                            height={80}
                            className="object-contain h-24 w-24 hover:scale-110 transition-transform duration-300"
                        />
                        {/* <span className="mt-2 text-xs text-gray-700 font-bevietnam text-center whitespace-nowrap">{logo.alt}</span> */}
                    </div>
                ))}
            </div>

            {/* Gradiente sfumato ai lati per nascondere i bordi */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

            <style jsx>{`
                @keyframes infinite-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-100% / 0.5));
                    }
                }
                
                .animate-infinite-scroll {
                    animation: infinite-scroll 120s linear infinite;
                }
            `}</style>
        </div>
    );
}