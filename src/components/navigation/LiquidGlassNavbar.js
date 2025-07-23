'use client';


import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LiquidGlassNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Servizi', href: '/servizi' },
        { label: 'Prodotti', href: '/prodotti' },
        { label: 'Su di noi', href: '/su-di-noi' },
    ];


    return (
        <>
            {/* Logo fisso in alto a sinistra */}
            <div className="fixed top-4 left-10 z-50 flex items-center">
                <button
                    onClick={() => router.push('/')}
                    className="focus:outline-none cursor-pointer"
                    aria-label="Vai alla Home"
                    type="button"
                >
                    <Image src="/LogoOttica.png" alt="Logo Ottica Fazio" width={52} height={52} priority className="drop-shadow-lg" />
                </button>
            </div>

            {/* Navbar centrata desktop */}
            <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center pointer-events-none transition-all duration-700 ease-out ${isScrolled ? 'scale-95 opacity-95' : 'scale-100 opacity-100'}`}>
                <div className="hidden md:flex items-center w-full max-w-4xl mx-auto px-6 pointer-events-auto">
                    <div className="flex-1 flex justify-center">
                        <div className="relative flex items-center space-x-4 bg-white/90 rounded-2xl px-8 py-3">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => router.push(item.href)}
                                    className="group relative px-6 py-2 text-base font-bold text-white bg-black hover:bg-bordeaux hover:text-white transition-all duration-300 ease-out overflow-hidden rounded-full cursor-pointer shadow-md"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="fixed top-4 right-4 z-50 md:hidden">
                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative p-3 bg-white/90 backdrop-blur-xl border border-warm-gray-200 rounded-2xl shadow-2xl"
                >
                    <div className="relative w-6 h-6 flex flex-col justify-center space-y-1">
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Dropdown */}
                <div className={`absolute top-16 right-0 w-64 transition-all duration-500 ease-out transform origin-top-right ${isMobileMenuOpen
                        ? 'scale-100 opacity-100 translate-y-0'
                        : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <div className="relative bg-white/95 backdrop-blur-xl border border-warm-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="relative p-4 space-y-2">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        router.push(item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="group relative block w-full text-left px-4 py-3 text-base font-bold text-white bg-black hover:bg-bordeaux hover:text-white rounded-full transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
