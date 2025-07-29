'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Home, Glasses, Users, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LiquidGlassNavbar() {
    const [dropdownReady, setDropdownReady] = useState(false);
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState({});
    const router = useRouter();

    useEffect(() => {
        // Attiva le animazioni dropdown solo dopo il mount
        setTimeout(() => setDropdownReady(true), 10);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Chiudi dropdown desktop al click fuori
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeAllDropdowns();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        {
            label: 'Servizi',
            href: '/servizi',
            dropdown: [
                { label: 'Esame dell\'acuità visiva', href: '/servizi/esame-acuita-visiva' },
                { label: 'Esame in lampada a fessura', href: '/servizi/esame-lampada-fessura' },
                { label: 'Topografia corneale', href: '/servizi/topografia-corneale' },
                { label: 'Applicazione e valutazione lenti a contatto', href: '/servizi/lenti-contatto' },
                { label: 'Studio forma del viso', href: '/servizi/studio-forma-viso' },
            ]
        },
        {
            label: 'Prodotti',
            href: '/prodotti',
            dropdown: [
                { label: 'Occhiali da sole', href: '/prodotti/occhiali-sole' },
                { label: 'Occhiali da vista', href: '/prodotti/occhiali-vista' },
                { label: 'Lenti a contatto', href: '/prodotti/lenti-contatto' },
                { label: 'Nuance Audio', href: '/prodotti/nuance-audio' },
            ]
        },
        {
            label: 'Su di noi',
            href: '/su-di-noi',
            dropdown: [
                { label: 'La nostra storia', href: '/su-di-noi/storia' },
                { label: 'Il nostro Team', href: '/su-di-noi/team' },
                { label: 'Dove trovarci', href: '/su-di-noi/dove-trovarci' },
            ]
        },
    ];

    // Toggle dropdown per click (desktop e mobile)
    const toggleDropdown = (index) => {
        setOpenDropdowns(prev => {
            const newState = { ...prev };

            // Se il dropdown corrente è aperto, chiudilo
            if (prev[index]) {
                delete newState[index];
            } else {
                // Altrimenti chiudi tutti gli altri e apri questo
                Object.keys(newState).forEach(key => delete newState[key]);
                newState[index] = true;
            }

            return newState;
        });
    };

    // Chiudi tutti i dropdown
    const closeAllDropdowns = () => setOpenDropdowns({});

    return (
        <>
            {/* Logo fisso in alto a sinistra - con responsive positioning */}
            <div className="fixed top-4 left-4 sm:left-6 lg:left-10 z-50 flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer"
                onClick={() => router.push('/')}
            >
                <button
                    className="focus:outline-none"
                    aria-label="Vai alla Home"
                    type="button"
                >
                    <Image
                        src="/logos/LogoOttica.png"
                        alt="Logo Ottica Fazio"
                        width={40}
                        height={40}
                        priority
                        className="drop-shadow-lg sm:w-[48px] sm:h-[48px] lg:w-[52px] lg:h-[52px]"
                    />
                </button>
                <span className="hidden sm:inline-block font-josefin font-extrabold text-base sm:text-lg lg:text-2xl tracking-tight text-[#2d3142] drop-shadow-sm select-none" style={{ letterSpacing: '0.04em' }}>
                    OTTICA FAZIO
                </span>
            </div>

            {/* Navbar centrata desktop - con responsive positioning e sizing */}
            <nav ref={navRef} className={`fixed top-4 z-40 w-full flex justify-center pointer-events-none transition-all duration-700 ease-out ${isScrolled ? 'scale-95 opacity-95' : 'scale-100 opacity-100'} 
                /* Responsive positioning per evitare sovrapposizione */
                left-1/2 -translate-x-1/2
                sm:left-[calc(50%+60px)] sm:-translate-x-1/2
                lg:left-1/2 lg:-translate-x-1/2
            `}>
                <div className="hidden lg:flex items-center w-full max-w-4xl mx-auto px-6 pointer-events-auto">
                    <div className="flex-1 flex justify-center">
                        <div className="relative flex items-center space-x-4 bg-white/90 rounded-2xl px-8 py-3">
                            {navItems.map((item, index) => {
                                // Icone per categoria
                                let Icon = null;
                                if (item.label === 'Home') Icon = Home;
                                if (item.label === 'Prodotti') Icon = Glasses;
                                if (item.label === 'Su di noi') Icon = Users;
                                if (item.label === 'Servizi') Icon = Info;
                                const hasDropdown = !!item.dropdown;
                                const isOpen = !!openDropdowns[index];
                                return (
                                    <div key={index} className="relative select-none">
                                        <button
                                            onClick={hasDropdown ? () => toggleDropdown(index) : () => router.push(item.href)}
                                            className={`main-nav-button group relative flex items-center gap-2 px-6 py-2 text-base font-bold text-white transition-all duration-300 ease-out overflow-hidden rounded-full cursor-pointer shadow-lg bg-gradient-to-br from-black to-gray-800 hover:from-red-600 hover:to-red-700 hover:shadow-xl active:scale-95 ${hasDropdown ? 'pr-10' : ''}`}
                                            style={{ minHeight: 44 }}
                                            aria-expanded={isOpen}
                                        >
                                            {Icon && <Icon size={20} className="mr-1 text-white opacity-80" />}
                                            <span className="relative z-10">{item.label}</span>
                                            {hasDropdown && (
                                                <>
                                                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        <ChevronDown size={18} />
                                                    </span>
                                                    <span className="ml-2 inline-flex items-center justify-center text-xs font-semibold bg-red-500 text-white rounded-full w-5 h-5">{item.dropdown.length}</span>
                                                </>
                                            )}
                                        </button>
                                        {/* Dropdown Menu */}
                                        {hasDropdown && (
                                            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-30 transition-all duration-300 ease-in-out transform origin-top ${dropdownReady && isOpen
                                                    ? 'opacity-100 scale-100 translate-y-0'
                                                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                                }`}>
                                                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
                                                    <div className="py-2">
                                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                            <button
                                                                key={dropdownIndex}
                                                                onClick={() => {
                                                                    router.push(dropdownItem.href);
                                                                    closeAllDropdowns();
                                                                }}
                                                                className="flex items-center w-full text-left px-4 py-3 text-sm font-medium border-l-4 border-red-500 text-gray-700 bg-white hover:bg-red-500 hover:text-white transition-all duration-200 hover:translate-x-2 cursor-pointer"
                                                            >
                                                                <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-3"></span>
                                                                {dropdownItem.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Navbar compatta per tablet (md breakpoint) */}
                <div className="hidden md:flex lg:hidden items-center w-full max-w-2xl mx-auto px-4 pointer-events-auto">
                    <div className="flex-1 flex justify-center">
                        <div className="relative flex items-center space-x-2 bg-white/90 rounded-2xl px-4 py-2">
                            {navItems.map((item, index) => {
                                // Icone per categoria
                                let Icon = null;
                                if (item.label === 'Home') Icon = Home;
                                if (item.label === 'Prodotti') Icon = Glasses;
                                if (item.label === 'Su di noi') Icon = Users;
                                if (item.label === 'Servizi') Icon = Info;
                                const hasDropdown = !!item.dropdown;
                                const isOpen = !!openDropdowns[index];
                                return (
                                    <div key={index} className="relative select-none">
                                        <button
                                            onClick={hasDropdown ? () => toggleDropdown(index) : () => router.push(item.href)}
                                            className={`main-nav-button group relative flex items-center gap-1 px-3 py-2 text-sm font-bold text-white transition-all duration-300 ease-out overflow-hidden rounded-full cursor-pointer shadow-lg bg-gradient-to-br from-black to-gray-800 hover:from-red-600 hover:to-red-700 hover:shadow-xl active:scale-95 ${hasDropdown ? 'pr-8' : ''}`}
                                            style={{ minHeight: 36 }}
                                            aria-expanded={isOpen}
                                        >
                                            {Icon && <Icon size={16} className="text-white opacity-80" />}
                                            <span className="relative z-10 text-xs">{item.label}</span>
                                            {hasDropdown && (
                                                <>
                                                    <span className={`absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        <ChevronDown size={14} />
                                                    </span>
                                                    <span className="ml-1 inline-flex items-center justify-center text-xs font-semibold bg-red-500 text-white rounded-full w-4 h-4 text-[10px]">{item.dropdown.length}</span>
                                                </>
                                            )}
                                        </button>
                                        {/* Dropdown Menu per tablet */}
                                        {hasDropdown && (
                                            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 z-30 transition-all duration-300 ease-in-out transform origin-top ${dropdownReady && isOpen
                                                    ? 'opacity-100 scale-100 translate-y-0'
                                                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                                }`}>
                                                <div className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
                                                    <div className="py-1">
                                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                            <button
                                                                key={dropdownIndex}
                                                                onClick={() => {
                                                                    router.push(dropdownItem.href);
                                                                    closeAllDropdowns();
                                                                }}
                                                                className="flex items-center w-full text-left px-3 py-2 text-xs font-medium border-l-4 border-red-500 text-gray-700 bg-white hover:bg-red-500 hover:text-white transition-all duration-200 hover:translate-x-2"
                                                            >
                                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-2"></span>
                                                                {dropdownItem.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
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
                    aria-label="Apri menu mobile"
                >
                    <div className="relative w-6 h-6 flex flex-col justify-center space-y-1">
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block h-0.5 bg-warm-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu Dropdown */}
                {/* Overlay per focus mobile menu (sotto il menu) */}
                {isMobileMenuOpen && (
                    <button className="fixed inset-0 z-40 bg-black/40" aria-label="Chiudi menu" onClick={() => setIsMobileMenuOpen(false)} tabIndex={-1}></button>
                )}
                <div className={`absolute top-16 right-0 w-72 transition-all duration-500 ease-out transform origin-top-right z-50 ${isMobileMenuOpen
                    ? 'scale-100 opacity-100 translate-y-0'
                    : 'scale-95 opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                    <div className="relative bg-white/95 backdrop-blur-xl border border-warm-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                        <div className="relative p-4 space-y-2">
                            {navItems.map((item, index) => {
                                let Icon = null;
                                if (item.label === 'Home') Icon = Home;
                                if (item.label === 'Prodotti') Icon = Glasses;
                                if (item.label === 'Su di noi') Icon = Users;
                                if (item.label === 'Servizi') Icon = Info;
                                const hasDropdown = !!item.dropdown;
                                const isOpen = !!openDropdowns[index];
                                return (
                                    <div key={index}>
                                        <button
                                            onClick={hasDropdown ? () => toggleDropdown(index) : () => { router.push(item.href); setIsMobileMenuOpen(false); }}
                                            className={`main-nav-button group relative flex items-center gap-2 w-full text-left px-4 py-3 text-base font-bold text-white rounded-full transition-all duration-300 overflow-hidden shadow-lg bg-gradient-to-br from-black to-gray-800 hover:from-red-600 hover:to-red-700 hover:shadow-xl active:scale-95 ${hasDropdown ? 'pr-10' : ''}`}
                                            style={{ minHeight: 44 }}
                                            aria-expanded={isOpen}
                                        >
                                            {Icon && <Icon size={20} className="mr-1 text-white opacity-80" />}
                                            <span className="relative z-10">{item.label}</span>
                                            {hasDropdown && (
                                                <>
                                                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                        <ChevronDown size={18} />
                                                    </span>
                                                    <span className="ml-2 inline-flex items-center justify-center text-xs font-semibold bg-red-500 text-white rounded-full w-5 h-5">{item.dropdown.length}</span>
                                                </>
                                            )}
                                        </button>
                                        {/* Mobile Dropdown Items */}
                                        {hasDropdown && (
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${dropdownReady && isOpen
                                                    ? 'max-h-96 opacity-100'
                                                    : 'max-h-0 opacity-0'
                                                }`}>
                                                <div className="pt-2 space-y-1">
                                                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                        <button
                                                            key={dropdownIndex}
                                                            onClick={() => {
                                                                router.push(dropdownItem.href);
                                                                setIsMobileMenuOpen(false);
                                                                closeAllDropdowns();
                                                            }}
                                                            className="flex items-center w-full text-left px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-red-500 hover:text-white transition-all duration-200 rounded-lg border-l-4 border-red-500 hover:border-red-600 hover:translate-x-1 ml-2 mr-2"
                                                        >
                                                            <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-3"></span>
                                                            {dropdownItem.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}