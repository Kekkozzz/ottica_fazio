'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
        { label: 'Chi Siamo', href: '/chi-siamo' },
        { label: 'Contatti', href: '/contatti' },
        { label: 'Palette', href: '/palette' },
    ];

    return (
        <nav className={`fixed top-4 right-4 z-50 transition-all duration-700 ease-out ${isScrolled
                ? 'scale-95 opacity-95'
                : 'scale-100 opacity-100'
            }`}>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
                {/* Liquid Glass Container */}
                <div className="relative backdrop-blur-xl bg-cream-50 border border-warm-gray-300 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Solid background effect */}
                    <div className="absolute inset-0 bg-white/95"></div>

                    {/* Navigation Links */}
                    <div className="relative flex items-center px-6 py-3 space-x-1">
                        {navItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => router.push(item.href)}
                                className="group relative px-4 py-2 text-sm font-medium text-warm-gray-800 hover:text-white transition-all duration-300 ease-out overflow-hidden rounded-lg cursor-pointer"
                            >
                                {/* Fill Animation from Bottom */}
                                <div className="absolute inset-0 bg-bordeaux transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-lg"></div>

                                {/* Text */}
                                <span className="relative z-10">{item.label}</span>
                            </button>
                        ))}

                        {/* CTA Button */}
                        <button
                            onClick={() => router.push('/contatti')}
                            className="ml-4 relative px-6 py-2 text-sm font-semibold text-white overflow-hidden rounded-lg group bg-bordeaux hover:bg-bordeaux-600 transition-all duration-300 ease-out"
                        >
                            <span className="relative z-10">Prenota Visita</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="relative p-3 backdrop-blur-xl bg-cream-50 border border-warm-gray-300 rounded-2xl shadow-2xl"
                >
                    <div className="absolute inset-0 bg-white/95 rounded-2xl"></div>
                    <div className="relative w-6 h-6 flex flex-col justify-center space-y-1">
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu */}
                <div className={`absolute top-full right-0 mt-2 w-64 transition-all duration-500 ease-out transform origin-top-right ${isMobileMenuOpen
                        ? 'scale-100 opacity-100 translate-y-0'
                        : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <div className="relative backdrop-blur-xl bg-cream-50 border border-warm-gray-300 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-white/95"></div>

                        <div className="relative p-4 space-y-2">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        router.push(item.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="group relative block w-full text-left px-4 py-3 text-sm font-medium text-warm-gray-800 hover:text-white rounded-lg transition-all duration-300 overflow-hidden"
                                >
                                    {/* Fill Animation from Bottom */}
                                    <div className="absolute inset-0 bg-bordeaux transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-out rounded-lg"></div>
                                    
                                    <span className="relative z-10">{item.label}</span>
                                </button>
                            ))}

                            <button
                                onClick={() => {
                                    router.push('/contatti');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full mt-4 px-4 py-3 text-sm font-semibold text-white bg-bordeaux rounded-lg hover:bg-bordeaux-600 transition-all duration-300"
                            >
                                Prenota Visita
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
