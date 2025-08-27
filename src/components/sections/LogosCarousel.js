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
    { src: '/logos/gucci.png', alt: 'Gucci' },
    { src: '/logos/diesel.png', alt: 'Diesel' },
    { src: '/logos/Burb.png', alt: 'Burberry' },
    { src: '/logos/lux.png', alt: 'Luxottica' },
    { src: '/logos/swa.png', alt: 'Swarovski' },
    { src: '/logos/Nuancelogo.png', alt: 'Nuance' },
    { src: '/logos/jimmy.png', alt: 'Jimmy Choo' },
    { src: '/logos/SL.png', alt: 'Saint Laurent' },
    { src: '/logos/Jc.png', alt: 'Just Cavalli' },
];

import { useRef, useEffect, useState } from 'react';

export default function LogosCarousel() {
    // Doppio array per loop continuo
    const duplicatedLogos = [...logos, ...logos];
    const trackRef = useRef(null);
    const reqId = useRef();
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Detect device type
    useEffect(() => {
        const checkDeviceType = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
            setIsTablet(width >= 640 && width < 1024);
        };

        checkDeviceType();
        window.addEventListener('resize', checkDeviceType);
        return () => window.removeEventListener('resize', checkDeviceType);
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let pos = 0;
        let animationFrame;
        
        // Velocità responsive
        const getSpeed = () => {
            if (isMobile) return 0.7; // Più lento su mobile
            if (isTablet) return 0.5; // Velocità media su tablet
            return 0.3; // Velocità normale su desktop
        };

        const speed = getSpeed();
        const trackWidth = track.scrollWidth / 2;

        function animate() {
            pos -= speed;
            if (Math.abs(pos) >= trackWidth) {
                pos = 0;
            }
            track.style.transform = `translateX(${pos}px)`;
            animationFrame = requestAnimationFrame(animate);
        }
        
        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isMobile, isTablet]);

    // Calcola dimensioni responsive
    const getLogoSizes = () => {
        if (isMobile) return { width: 80, height: 60, minWidth: 'min-w-[80px]', margin: 'mx-3' };
        if (isTablet) return { width: 100, height: 70, minWidth: 'min-w-[100px]', margin: 'mx-4' };
        return { width: 120, height: 80, minWidth: 'min-w-[120px]', margin: 'mx-6' };
    };

    const logoSizes = getLogoSizes();

    return (
        <div className="w-full bg-white py-2 sm:py-3 lg:py-4 border-t border-b border-black overflow-hidden relative">
            {/* Container principale del carosello */}
            <div
                className="flex"
                ref={trackRef}
                style={{ willChange: 'transform' }}
            >
                {duplicatedLogos.map((logo, idx) => (
                    <div key={idx} className={`flex flex-col items-center ${logoSizes.minWidth} ${logoSizes.margin} flex-shrink-0`}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logoSizes.width}
                            height={logoSizes.height}
                            className={`object-contain h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 hover:scale-110 transition-transform duration-300`}
                        />
                        {/* <span className="mt-2 text-xs text-gray-700 font-bevietnam text-center whitespace-nowrap">{logo.alt}</span> */}
                    </div>
                ))}
            </div>

            {/* Gradiente sfumato ai lati per nascondere i bordi - responsive */}
            <div className="absolute top-0 left-0 w-10 sm:w-15 lg:w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-10 sm:w-15 lg:w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
    );
}