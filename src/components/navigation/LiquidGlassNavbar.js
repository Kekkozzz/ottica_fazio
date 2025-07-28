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
            // Chiudi tutti tranne quello cliccato
            const newState = {};
            if (!prev[index]) newState[index] = true;
            return newState;
        });
    };

    // Chiudi tutti i dropdown
    const closeAllDropdowns = () => setOpenDropdowns({});

    return (
        <>
            {/* Logo fisso in alto a sinistra */}
            <div className="fixed top-4 left-10 z-50 flex items-center gap-3 md:gap-4 cursor-pointer"
                onClick={() => router.push('/')}
            >
                <button
                    className="focus:outline-none"
                    aria-label="Vai alla Home"
                    type="button"
                >
                    <Image src="/logos/LogoOttica.png" alt="Logo Ottica Fazio" width={52} height={52} priority className="drop-shadow-lg" />
                </button>
                <span className="hidden sm:inline-block font-josefin font-extrabold text-lg md:text-2xl tracking-tight text-[#2d3142] drop-shadow-sm select-none" style={{ letterSpacing: '0.04em' }}>
                    OTTICA FAZIO
                </span>
            </div>

            {/* Navbar centrata desktop */}
            <nav ref={navRef} className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center pointer-events-none transition-all duration-700 ease-out ${isScrolled ? 'scale-95 opacity-95' : 'scale-100 opacity-100'}`}>
                <div className="hidden md:flex items-center w-full max-w-4xl mx-auto px-6 pointer-events-auto">
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
                                            className={`main-nav-button group relative flex items-center gap-2 px-6 py-2 text-base font-bold text-white bg-black hover:bg-bordeaux hover:text-white transition-all duration-300 ease-out overflow-hidden rounded-full cursor-pointer shadow-md ${hasDropdown ? 'pr-10' : ''}`}
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
                                                    <span className="ml-2 inline-flex items-center justify-center text-xs font-semibold bg-bordeaux text-white rounded-full w-5 h-5">{item.dropdown.length}</span>
                                                </>
                                            )}
                                        </button>
                                        {/* Dropdown Menu */}
                                        {hasDropdown && dropdownReady && isOpen && (
                                            <div className={`dropdown-content dropdown-ready absolute top-full left-1/2 rounded-2xl -translate-x-1/2 pt-2 w-64 z-30 open`}
                                                style={{ pointerEvents: 'auto' }}
                                            >
                                                <div className="bg-white/95 backdrop-blur-xl border border-warm-gray-200 shadow-2xl overflow-hidden min-w-64 transition-all duration-300">
                                                    <div className="">
                                                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                            <button
                                                                key={dropdownIndex}
                                                                onClick={() => {
                                                                    router.push(dropdownItem.href);
                                                                    closeAllDropdowns();
                                                                }}
                                                                className="dropdown-item block w-full text-left px-4 py-3 text-sm font-medium border-l-4 border-bordeaux text-[#2d3748] bg-white hover:bg-bordeaux hover:text-white transition-all duration-200 cursor-pointer rounded-none"
                                                                style={{ minHeight: 44, marginBottom: 12 }}
                                                            >
                                                                <span className="inline-block w-2 h-2 rounded-full bg-bordeaux mr-2 align-middle"></span>
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
                                            className={`main-nav-button group relative flex items-center gap-2 w-full text-left px-4 py-3 text-base font-bold text-white bg-black hover:bg-bordeaux hover:text-white rounded-full transition-all duration-300 overflow-hidden ${hasDropdown ? 'pr-10' : ''}`}
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
                                                    <span className="ml-2 inline-flex items-center justify-center text-xs font-semibold bg-bordeaux text-white rounded-full w-5 h-5">{item.dropdown.length}</span>
                                                </>
                                            )}
                                        </button>
                                        {/* Mobile Dropdown Items */}
                                        {hasDropdown && dropdownReady && isOpen && (
                                            <div className={`dropdown-content dropdown-ready w-full transition-all duration-300 open`}
                                                style={{ pointerEvents: 'auto' }}
                                            >
                                                <div className="py-2">
                                                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                        <button
                                                            key={dropdownIndex}
                                                            onClick={() => {
                                                                router.push(dropdownItem.href);
                                                                setIsMobileMenuOpen(false);
                                                                closeAllDropdowns();
                                                            }}
                                                            className="dropdown-item block w-full text-left px-4 py-3 text-sm font-medium border-l-4 border-bordeaux text-[#2d3748] bg-white hover:bg-bordeaux hover:text-white transition-all duration-200 cursor-pointer rounded-none"
                                                            style={{ minHeight: 44, marginBottom: 12 }}
                                                        >
                                                            <span className="inline-block w-2 h-2 rounded-full bg-bordeaux mr-2 align-middle"></span>
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
                {/* Stili custom per dropdown e animazioni */}
                <style jsx global>{`
                .dropdown-content {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                }
                .dropdown-content:not(.dropdown-ready) {
                    max-height: 0 !important;
                    opacity: 0 !important;
                    transition: none !important;
                }
                .dropdown-content.dropdown-ready {
                    transition: all 0.3s cubic-bezier(.4,2,.6,1);
                }
                .dropdown-content.open {
                    max-height: 325px;
                    opacity: 1;
                }
                .main-nav-button {
                    background: linear-gradient(135deg, #000 0%, #333 100%);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    font-size: 16px;
                    font-weight: 700;
                    letter-spacing: 0.01em;
                }
                .dropdown-item {
                    background: transparent;
                    border-left: 3px solid #e74c3c;
                    color: #2d3748;
                    font-weight: 400;
                    font-size: 14px;
                    padding-left: 1.5rem;
                    padding-right: 1rem;
                    border-radius: 0;
                }
                .dropdown-item:hover {
                    background: #e74c3c;
                    color: #fff;
                    transform: translateX(8px);
                }
                .main-nav-button:active {
                    transform: scale(0.98);
                    transition: transform 0.1s ease;
                }
            `}</style>
            </div>
        </>
    );
}