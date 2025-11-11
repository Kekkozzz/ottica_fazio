'use client';

import Image from 'next/image';

export default function ContactLensBrands() {
    const brands = [
        {
            name: 'Alcon',
            logo: '/lenti-contatto/alcon.png',
            alt: 'Alcon - Lenti a Contatto'
        },
        {
            name: 'Cooper Vision',
            logo: '/lenti-contatto/cooper-vision.png',
            alt: 'Cooper Vision - Lenti a Contatto'
        },
        {
            name: 'Johnson & Johnson',
            logo: '/lenti-contatto/johnson.png',
            alt: 'Johnson & Johnson - Lenti a Contatto'
        },
        {
            name: 'Mark Ennovy',
            logo: '/lenti-contatto/markennovy.png',
            alt: 'Mark Ennovy - Lenti a Contatto'
        },
        {
            name: 'Soleko',
            logo: '/lenti-contatto/soleko.png',
            alt: 'Soleko - Lenti a Contatto'
        },
        {
            name: 'Schalcon',
            logo: '/lenti-contatto/Schalcon.png',
            alt: 'Schalcon - Lenti a Contatto'
        },
        {
            name: 'Bausch + Lomb',
            logo: '/lenti-contatto/Bausch.png',
            alt: 'Bausch + Lomb - Lenti a Contatto'
        },
        {
            name: 'OxoLens',
            logo: '/lenti-contatto/OXO.png',
            alt: 'OxoLens - Lenti a Contatto'
        }
    ];

    return (
        <section className="py-16 px-4 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                        I Nostri Brand Partner
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                        Collaboriamo con i leader mondiali nella produzione di lenti a contatto
                    </p>
                </div>

                {/* Grid Loghi - Responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
                    {brands.map((brand, index) => (
                        <div
                            key={brand.name}
                            className="group relative w-full aspect-[5/2] flex items-center justify-center p-4 sm:p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        >
                            <Image
                                src={brand.logo}
                                alt={brand.alt}
                                fill
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                style={{ objectFit: 'contain' }}
                                className="p-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA Bottom */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>Trova il brand perfetto per le tue esigenze visive</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
