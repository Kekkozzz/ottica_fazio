'use client';

import Image from 'next/image';

export default function LensPartners() {
    const lensPartners = [
        {
            name: 'Optovista',
            logo: '/lenti/optovista.png',
            alt: 'Optovista - Partner Lenti Oftalmiche'
        },
        {
            name: 'Essilor',
            logo: '/lenti/ess.webp',
            alt: 'Essilor - Partner Lenti Oftalmiche'
        },
        {
            name: 'Hoya',
            logo: '/lenti/Hoya.png',
            alt: 'Hoya - Partner Lenti Oftalmiche'
        }
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header Minimal */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Partner Lenti Oftalmiche
                    </h2>
                </div>

                {/* Grid Loghi Minimal */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-20">
                    {lensPartners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group relative w-40 h-20 sm:w-44 sm:h-24 flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.alt}
                                fill
                                sizes="(max-width: 640px) 160px, 176px"
                                style={{ objectFit: 'contain' }}
                                className="filter brightness-0 opacity-40 group-hover:opacity-70 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* Subtitle */}
                <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
                    Qualità e precisione ottica garantite dai leader mondiali
                </p>
            </div>
        </section>
    );
}
