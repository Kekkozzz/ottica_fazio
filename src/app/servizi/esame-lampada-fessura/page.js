import React from 'react';
import Image from 'next/image';
import { Microscope, Eye, CheckCircle, Clock, ArrowRight, Calendar, Phone, Mail, Search, Droplet, Shield, Camera } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

// Metadata per SEO
export const metadata = {
    title: "Esame in Lampada a Fessura - Ottica Fazio Augusta",
    description: "Esame biomicroscopico del segmento anteriore dell'occhio con lampada a fessura. Valutazione cornea, cristallino, film lacrimale e lenti a contatto.",
    keywords: "lampada a fessura, biomicroscopio, esame cornea, film lacrimale, lenti a contatto, ottico Augusta",
    openGraph: {
        title: "Esame in Lampada a Fessura - Ottica Fazio",
        description: "Analisi dettagliata del segmento anteriore dell'occhio con strumentazione avanzata",
        type: "website",
    },
};

export default function EsameLampadaFessura() {
    const valutazioni = [
        {
            id: 1,
            title: "Valutazione preliminare dell'occhio",
            description: "Analisi completa del segmento anteriore per identificare eventuali anomalie",
            icon: Search
        },
        {
            id: 2,
            title: "Applicazione lenti a contatto",
            description: "Controllo dell'adattamento e della centratura delle lenti sull'occhio",
            icon: Eye
        },
        {
            id: 3,
            title: "Stato del film lacrimale",
            description: "Misurazione BUT (Break-Up Time) e NIBUT per valutare la qualità lacrimale",
            icon: Droplet
        },
        {
            id: 4,
            title: "Trasparenza corneale",
            description: "Esame della cornea per verificare chiarezza e integrità strutturale",
            icon: Shield
        },
        {
            id: 5,
            title: "Vascolarità congiuntivale",
            description: "Controllo dello stato della congiuntiva e della sua vascolarizzazione",
            icon: Camera
        },
        {
            id: 6,
            title: "Osservazione del cristallino",
            description: "Analisi della trasparenza e morfologia del cristallino",
            icon: Microscope
        }
    ];

    const caratteristiche = [
        {
            title: "Strumento di Precisione",
            description: "La lampada a fessura con biomicroscopio è lo strumento più importante nella pratica contattologica e nell'esame delle strutture oculari",
            highlight: true
        },
        {
            title: "Ingrandimento Variabile",
            description: "Permette ingrandimenti da 6x a 40x per un'analisi dettagliata di ogni struttura"
        },
        {
            title: "Illuminazione Controllata",
            description: "Fascio di luce regolabile in intensità, larghezza e angolazione per ottimizzare la visualizzazione"
        },
        {
            title: "Analisi Non Invasiva",
            description: "Esame completamente indolore che non richiede contatto diretto con l'occhio"
        }
    ];

    const strutture = [
        { nome: "Cornea", descrizione: "Trasparenza, spessore, curvatura" },
        { nome: "Congiuntiva", descrizione: "Stato infiammatorio, vascolarità" },
        { nome: "Camera anteriore", descrizione: "Profondità, presenza di cellule" },
        { nome: "Iride", descrizione: "Colore, pattern, mobilità" },
        { nome: "Pupilla", descrizione: "Forma, reattività, dimensioni" },
        { nome: "Cristallino", descrizione: "Trasparenza, morfologia" },
        { nome: "Film lacrimale", descrizione: "Qualità, stabilità, quantità" }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-warm-gray-50 via-white to-cream-50">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Contenuto Sinistra */}
                        <div className="space-y-8">
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                                        <Microscope className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-primary font-semibold text-sm">Biomicroscopia Avanzata</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight">
                                        Esame in
                                        <span className="text-primary block">Lampada a Fessura</span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                                        La lampada a fessura con biomicroscopio è lo strumento più importante 
                                        nella pratica contattologica e nell&apos;esame delle varie strutture 
                                        interne ed esterne del segmento anteriore dell&apos;occhio.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button 
                                            className="group px-8 py-4 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                                            aria-label="Prenota un esame in lampada a fessura"
                                            type="button"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Prenota Esame
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <button 
                                            className="px-8 py-4 border-2 border-warm-gray-300 text-warm-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
                                            aria-label="Chiama per informazioni sull'esame"
                                            type="button"
                                        >
                                            <Phone className="w-5 h-5" />
                                            Chiamaci
                                        </button>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Immagine Destra */}
                        <div className="relative">
                            <FadeInView direction="right" delay={0.3}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/services/lampada-a-fessura.jpg"
                                        alt="Lampada a fessura con biomicroscopio per esami oculistici"
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                    {/* Overlay decorativo */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </FadeInView>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione Cosa Valutiamo */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Cosa Valutiamo con l&apos;Esame
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    Con un esame in lampada a fessura è possibile effettuare una valutazione 
                                    completa e dettagliata di tutte le strutture del segmento anteriore dell&apos;occhio.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {valutazioni.map((valutazione) => {
                                const IconComponent = valutazione.icon;
                                return (
                                    <StaggerItem key={valutazione.id} direction="up">
                                        <div className="bg-warm-gray-50 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                                <IconComponent className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-warm-gray-900 mb-3">
                                                {valutazione.title}
                                            </h3>
                                            <p className="text-warm-gray-600 leading-relaxed">
                                                {valutazione.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Caratteristiche Strumento */}
            <section className="py-16 px-4 bg-gradient-to-br from-warm-gray-50 to-cream-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-8">
                                        Caratteristiche della Lampada a Fessura
                                    </h2>
                                </StaggerItem>
                                
                                <div className="space-y-6">
                                    {caratteristiche.map((caratteristica, index) => (
                                        <StaggerItem key={index} direction="up">
                                            <div className={`p-6 rounded-2xl ${caratteristica.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-white'} shadow-sm`}>
                                                <h3 className={`font-bold text-lg mb-3 ${caratteristica.highlight ? 'text-primary' : 'text-warm-gray-900'}`}>
                                                    {caratteristica.title}
                                                </h3>
                                                <p className="text-warm-gray-600 leading-relaxed">
                                                    {caratteristica.description}
                                                </p>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </div>
                            </StaggerContainer>
                        </div>

                        <div className="relative">
                            <FadeInView direction="left" delay={0.3}>
                                <div className="bg-gradient-to-br from-primary/10 to-cream-100 rounded-3xl p-8 shadow-lg">
                                    <div className="text-center mb-6">
                                        <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <Eye className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="font-bold text-xl text-warm-gray-900 mb-2">
                                            Strutture Analizzate
                                        </h3>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {strutture.map((struttura, index) => (
                                            <div key={index} className="flex justify-between items-start p-3 bg-white/50 rounded-lg">
                                                <div>
                                                    <span className="font-semibold text-warm-gray-900 text-sm">
                                                        {struttura.nome}
                                                    </span>
                                                    <p className="text-xs text-warm-gray-600 mt-1">
                                                        {struttura.descrizione}
                                                    </p>
                                                </div>
                                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeInView>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione Applicazioni Specifiche */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Applicazioni Specialistiche
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    L&apos;esame in lampada a fessura è particolarmente utile in diverse 
                                    situazioni cliniche e per specifiche valutazioni.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <StaggerItem direction="left">
                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 h-full">
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                        <Eye className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-warm-gray-900 mb-4">
                                        Contattologia
                                    </h3>
                                    <ul className="space-y-3 text-warm-gray-600">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Valutazione pre-applicazione lenti a contatto</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Controllo dell&apos;adattamento e centratura</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Monitoraggio della salute oculare</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Valutazione del film lacrimale</span>
                                        </li>
                                    </ul>
                                </div>
                            </StaggerItem>

                            <StaggerItem direction="right">
                                <div className="bg-gradient-to-br from-warm-gray-50 to-cream-50 rounded-2xl p-8 h-full">
                                    <div className="w-16 h-16 bg-warm-gray-600 rounded-2xl flex items-center justify-center mb-6">
                                        <Search className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-warm-gray-900 mb-4">
                                        Diagnosi Preventiva
                                    </h3>
                                    <ul className="space-y-3 text-warm-gray-600">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-warm-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Identificazione precoce di patologie corneali</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-warm-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Controllo dell&apos;invecchiamento del cristallino</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-warm-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Valutazione di secchezza oculare</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 bg-warm-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                                            <span>Monitoraggio della pressione intraoculare</span>
                                        </li>
                                    </ul>
                                </div>
                            </StaggerItem>
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Prenota il Tuo Esame in Lampada a Fessura
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Una valutazione dettagliata e professionale per la salute dei tuoi occhi. 
                                Affidati alla nostra esperienza e strumentazione avanzata.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Prenota online un esame in lampada a fessura"
                                    type="button"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Prenota Online
                                </button>
                                <a 
                                    href="tel:0931521985"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Chiama il numero 0931 521985 per prenotare"
                                >
                                    <Phone className="w-5 h-5" />
                                    0931 521985
                                </a>
                                <a 
                                    href="mailto:otticafazio@outlook.it"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Invia email a otticafazio@outlook.it"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email
                                </a>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
