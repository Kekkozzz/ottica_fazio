'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Ear,
    Feather,
    Gem,
    UserCheck,
    Phone,
    MapPin,
    MessageCircle,
    Briefcase,
    Users,
    Music,
    Volume2,
    Eye,
    Shield,
} from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function NuanceAudio() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ['/models/mod1.jpg', '/models/mod2.avif', '/models/mod3.webp'];

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((p) => (p + 1) % images.length);
        }, 4000);
        return () => clearInterval(id);
    }, [images.length]);

    const vantaggi = [
        {
            id: 1,
            title: "Tecnologia Integrata",
            description: "Audio di qualità integrato direttamente nella montatura, invisibile e performante",
            icon: Volume2,
        },
        {
            id: 2,
            title: "Comfort Quotidiano",
            description: "Leggeri e confortevoli, pensati per essere indossati tutto il giorno senza fatica",
            icon: Feather,
        },
        {
            id: 3,
            title: "Design Elegante",
            description: "Montature raffinate che uniscono stile e funzionalità in un unico accessorio",
            icon: Gem,
        },
        {
            id: 4,
            title: "Consulenza Dedicata",
            description: "Ti guidiamo nella scelta della soluzione più adatta alle tue esigenze uditive e visive",
            icon: UserCheck,
        },
    ];

    const perChiSonoAdatti = [
        {
            id: 1,
            title: "Conversazioni Quotidiane",
            description: "Amplifica le voci durante le conversazioni con familiari e amici, per non perdere nessun momento importante",
            icon: MessageCircle,
        },
        {
            id: 2,
            title: "Lavoro e Riunioni",
            description: "Segui ogni discussione in ufficio o nelle videocall con chiarezza, senza dispositivi visibili",
            icon: Briefcase,
        },
        {
            id: 3,
            title: "Vita Sociale",
            description: "Partecipa con serenità a cene, eventi e incontri, cogliendo ogni sfumatura sonora",
            icon: Users,
        },
        {
            id: 4,
            title: "Tempo Libero",
            description: "Goditi musica, podcast e i suoni della natura con un ascolto personale e discreto",
            icon: Music,
        },
    ];

    return (
        <main className="min-h-screen">
            {/* =================== HERO SECTION =================== */}
            <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                {/* Decorazione sottile sfondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-gray-50 via-white to-cream-50 -z-10" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/[0.04] rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Contenuto Sinistra */}
                        <div className="space-y-8">
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                                        <Ear className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-semibold text-primary tracking-wide">INNOVAZIONE AUDIO</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight">
                                        Nuance
                                        <span className="text-primary block">Audio</span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                                        Gli occhiali acustici Nuance rappresentano una nuova soluzione per chi desidera
                                        vedere bene e sentire meglio nella vita di tutti i giorni.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <a
                                            href="tel:0931521985"
                                            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-bordeaux-600 transition-all duration-300 flex items-center gap-2 justify-center"
                                        >
                                            <Phone className="w-5 h-5" />
                                            Prenota una Consulenza
                                        </a>
                                        <a
                                            href="tel:0931521985"
                                            className="px-8 py-4 border-2 border-warm-gray-300 text-warm-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                        >
                                            <MapPin className="w-5 h-5" />
                                            Vieni a Trovarci
                                        </a>
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex gap-8 mt-10 pt-8 border-t border-warm-gray-200">
                                        <div className="text-center">
                                            <div className="flex items-center justify-center gap-1 mb-1">
                                                <Eye className="w-5 h-5 text-primary" />
                                                <span className="text-lg font-bold text-primary">+</span>
                                                <Ear className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="text-xs text-warm-gray-600 font-medium">Vista + Udito</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary">
                                                <Feather className="w-6 h-6 mx-auto text-primary" />
                                            </div>
                                            <div className="text-xs text-warm-gray-600 font-medium mt-1">Ultraleggeri</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-primary">
                                                <Shield className="w-6 h-6 mx-auto text-primary" />
                                            </div>
                                            <div className="text-xs text-warm-gray-600 font-medium mt-1">Discreti</div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Immagine Destra */}
                        <div className="relative">
                            <FadeInView direction="right" delay={0.3}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="relative aspect-[4/5]">
                                        {images.map((image, i) => (
                                            <div
                                                key={i}
                                                className={`absolute inset-0 transition-opacity duration-1000 ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`Nuance Audio occhiali acustici modello ${i + 1}`}
                                                    fill
                                                    sizes="(max-width: 1024px) 90vw, 50vw"
                                                    style={{ objectFit: 'cover' }}
                                                    priority={i === 0}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <span className="text-sm font-semibold text-primary">INNOVAZIONE</span>
                                    </div>
                                </div>

                                {/* Dots navigazione */}
                                <div className="flex justify-center gap-3 mt-6">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImageIndex(i)}
                                            aria-label={`Vai all'immagine ${i + 1}`}
                                            className={`h-2.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-primary w-8' : 'bg-warm-gray-300 hover:bg-warm-gray-400 w-2.5'}`}
                                        />
                                    ))}
                                </div>
                            </FadeInView>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================== VANTAGGI SECTION =================== */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Perch&eacute; Scegliere Nuance Audio
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Un unico dispositivo elegante che migliora la qualit&agrave; della vista e dell&apos;ascolto quotidiano
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {vantaggi.map((vantaggio) => {
                                const IconComponent = vantaggio.icon;
                                return (
                                    <StaggerItem key={vantaggio.id} direction="up">
                                        <div className="text-center space-y-4 p-6 rounded-2xl hover:bg-warm-gray-50 transition-colors duration-300">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-warm-gray-900">
                                                {vantaggio.title}
                                            </h3>
                                            <p className="text-warm-gray-600 leading-relaxed text-sm">
                                                {vantaggio.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* =================== DESCRIZIONE DETTAGLIATA =================== */}
            <section className="py-16 px-4 bg-gradient-to-br from-warm-gray-50 to-cream-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Immagine Sinistra */}
                        <div className="relative order-2 lg:order-1">
                            <FadeInView direction="left" delay={0.2}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80"
                                        alt="Occhiali acustici Nuance Audio - tecnologia e stile"
                                        width={600}
                                        height={450}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </FadeInView>
                        </div>

                        {/* Contenuto Destra */}
                        <div className="space-y-6 order-1 lg:order-2">
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-3">
                                        Vedere Bene,
                                        <span className="text-primary block">Sentire Meglio</span>
                                    </h2>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-warm-gray-700 leading-relaxed text-lg">
                                        Gli occhiali acustici Nuance sono pensati per chi desidera migliorare la qualit&agrave;
                                        dell&apos;ascolto quotidiano senza rinunciare allo stile. Grazie alla tecnologia integrata
                                        nella montatura, amplificano le conversazioni e i suoni utili, aiutando a vivere con
                                        pi&ugrave; serenit&agrave; momenti sociali, lavoro e tempo libero.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-warm-gray-700 leading-relaxed text-lg">
                                        Eleganti e leggeri, rappresentano una soluzione pratica per chi cerca comfort visivo
                                        e supporto uditivo in un unico dispositivo.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="bg-white rounded-2xl p-6 shadow-md border border-warm-gray-100 mt-4">
                                        <p className="text-warm-gray-800 leading-relaxed font-medium italic">
                                            &ldquo;Vieni a scoprirli nel nostro punto vendita con una consulenza dedicata
                                            per trovare la soluzione pi&ugrave; adatta alle tue esigenze.&rdquo;
                                        </p>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* =================== PER CHI È PENSATO =================== */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Per Chi &Egrave; Pensato
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Nuance Audio si adatta a ogni momento della tua giornata
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {perChiSonoAdatti.map((caso) => {
                                const IconComponent = caso.icon;
                                return (
                                    <StaggerItem key={caso.id} direction="up">
                                        <div className="bg-gradient-to-br from-warm-gray-50 to-cream-50 rounded-2xl p-6 border border-warm-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-bold text-warm-gray-900 mb-2">
                                                {caso.title}
                                            </h3>
                                            <p className="text-warm-gray-600 text-sm leading-relaxed">
                                                {caso.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* =================== CTA FINALE =================== */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary to-bordeaux-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Scopri Nuance Audio nel Nostro Punto Vendita
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Vieni a provarli con una consulenza dedicata per trovare la soluzione
                                pi&ugrave; adatta alle tue esigenze visive e uditive.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:0931521985"
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center"
                                >
                                    <Phone className="w-5 h-5" />
                                    Prenota Consulenza
                                </a>
                                <a
                                    href="tel:0931521985"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                >
                                    <Phone className="w-5 h-5" />
                                    0931 521985
                                </a>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
