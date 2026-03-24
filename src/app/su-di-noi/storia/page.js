'use client';

import React, { useEffect, useState } from 'react';
import { Clock, Heart, Award, Users, Eye, Star, Phone, MapPin } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

/* ─────────────── PROPOSTA A — dati timeline ─────────────── */
const timelineEvents = [
    {
        anno: '1985',
        titolo: 'La Fondazione',
        descrizione:
            'Ottica Fazio apre le sue porte ad Augusta, in Sicilia, con una missione semplice ma potente: portare la migliore cura visiva alle famiglie del territorio. Tutto nasce dalla passione di una famiglia per l\'ottica e dal desiderio di servire la propria comunità con dedizione.',
        icon: Heart,
        colore: 'primary',
        lato: 'left',
    },
    {
        anno: '1995',
        titolo: 'Crescita e Fiducia',
        descrizione:
            'Dopo dieci anni di servizio, la clientela cresce grazie al passaparola e alla reputazione conquistata sul campo. Ottica Fazio si afferma come punto di riferimento per l\'ottica nel siracusano, aggiornando continuamente la sua offerta di montature e lenti.',
        icon: Star,
        colore: 'gold',
        lato: 'right',
    },
    {
        anno: '2005',
        titolo: 'Innovazione Tecnologica',
        descrizione:
            'L\'arrivo di nuove tecnologie diagnostiche — tra cui la topografia corneale e strumenti di analisi avanzata — segna un salto qualitativo nel servizio. I clienti possono contare su esami precisi e consulenze sempre più personalizzate.',
        icon: Eye,
        colore: 'primary',
        lato: 'left',
    },
    {
        anno: '2012',
        titolo: 'La Seconda Sede',
        descrizione:
            'Ottica Fazio espande la propria presenza aprendo la sede di Villasmundo, portando la stessa qualità e cura in un nuovo territorio. Due negozi, ma un\'unica anima: la cura del cliente e la passione per la vista.',
        icon: MapPin,
        colore: 'gold',
        lato: 'right',
    },
    {
        anno: '2020',
        titolo: 'Una Nuova Era',
        descrizione:
            'Nonostante le sfide globali, Ottica Fazio rimane accanto ai propri clienti, adattandosi con nuovi servizi e modalità di consulenza. La fiducia costruita in trent\'anni si rivela il patrimonio più prezioso.',
        icon: Award,
        colore: 'primary',
        lato: 'left',
    },
    {
        anno: 'Oggi',
        titolo: 'Il Futuro, Con Te',
        descrizione:
            'Quarant\'anni di storia e migliaia di clienti soddisfatti sono la nostra forza. Guardiamo al futuro con entusiasmo, investendo in nuove tecnologie e formazione continua, sempre con il sorriso di chi sa perché fa questo lavoro.',
        icon: Users,
        colore: 'gold',
        lato: 'right',
    },
];

const valori = [
    {
        icon: Heart,
        titolo: 'Passione',
        descrizione: 'Ogni paio di occhiali è scelto con cura. Non vendiamo prodotti — offriamo soluzioni che migliorano la qualità della vita delle persone.',
    },
    {
        icon: Award,
        titolo: 'Eccellenza',
        descrizione: 'Solo brand selezionati, lenti di alta qualità e tecnologie all\'avanguardia per garantire il meglio ai nostri clienti.',
    },
    {
        icon: Users,
        titolo: 'Comunità',
        descrizione: 'Siamo nati in Sicilia e per la Sicilia. Ogni cliente è un vicino di casa — e lo trattiamo come tale.',
    },
    {
        icon: Eye,
        titolo: 'Precisione',
        descrizione: 'Diagnosi accurate, montature su misura e follow-up costante: perché la tua vista merita la massima attenzione.',
    },
];

/* ─────────────── PROPOSTA B — paragrafi narrativi ─────────────── */
const paragrafiBStoria = [
    {
        anno: '1958',
        testo: 'È il 1958 quando Giacomo Fazio intraprende il suo percorso nel mondo dell\'ottica come apprendista meccanico ottico ad Acireale. Un inizio fatto di disciplina e precisione, che negli anni si trasforma in esperienza e visione imprenditoriale, portandolo alla gestione di punti vendita prima a Giarre e successivamente ad Augusta. Tra il 1965 e il 1966 perfeziona la sua formazione con un corso di Ottica, consolidando le basi di una professionalità destinata a durare nel tempo.',
    },
    {
        anno: '1975',
        testo: 'Nell\'ottobre del 1975 questa visione prende forma: ad Augusta nasce il primo punto vendita, Ottica Fazio. Non semplicemente un negozio, ma l\'espressione concreta di un\'idea fondata su competenza, fiducia e cura autentica per ogni cliente.',
    },
    {
        anno: '1996',
        testo: 'Con il passare degli anni, l\'attività si sviluppa mantenendo intatta la propria identità. Nel 1996 viene inaugurata la sede di Villasmundo, affidata al figlio maggiore Andrea, che interpreta i valori fondanti in chiave contemporanea, contribuendo con determinazione all\'evoluzione e all\'espansione del brand.',
    },
    {
        anno: '2001',
        testo: 'Il passaggio generazionale avviene in modo naturale e coerente: nel 2001 il figlio minore David entra nella sede di Augusta, affiancando Giacomo in un percorso condiviso fatto di continuità, innovazione e crescita.',
    },
    {
        anno: '2025',
        testo: 'Oggi la storia si arricchisce di un nuovo capitolo. Nel 2025 entra anche Manuel, che affianca David nella sede di Augusta, rappresentando la nuova generazione e una visione proiettata verso il futuro.',
    },
];

const chiusuraB = 'Oggi come allora, Ottica Fazio è una realtà familiare che evolve nel tempo, rimanendo fedele ai propri valori e ponendo al centro, ogni giorno, la qualità del servizio e l\'attenzione alle persone.';
const introB = 'La nostra storia affonda le sue radici nel tempo, costruita su passione, dedizione e una costante ricerca dell\'eccellenza.';

/* ═══════════════════════════════════════════════════════════════ */

export default function LaNostralStoria() {
    const [proposta, setProposta] = useState('A');

    useEffect(() => {
        document.title = 'La Nostra Storia - Ottica Fazio';
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-warm-gray-50 via-white to-cream-50">

            {/* ───── HERO ───── */}
            <section className="relative pt-28 pb-16 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                                <Clock className="w-5 h-5 text-primary mr-2" />
                                <span className="text-primary font-semibold text-sm tracking-wide">Dal 1975</span>
                            </div>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight mb-6">
                                LA NOSTRA
                                <span className="text-primary block">STORIA</span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <p className="text-xl text-warm-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                                Quasi settant&apos;anni di passione per la vista, di famiglie che ci scelgono e di una Sicilia
                                che chiamiamo casa.
                            </p>
                        </StaggerItem>

                        {/* ── TOGGLE A/B ── */}
                        <StaggerItem direction="up">
                            <div className="inline-flex items-center gap-1 bg-warm-gray-100 rounded-2xl p-1.5 shadow-inner">
                                <button
                                    onClick={() => setProposta('A')}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                        proposta === 'A'
                                            ? 'bg-primary text-white shadow-md'
                                            : 'text-warm-gray-500 hover:text-warm-gray-800'
                                    }`}
                                >
                                    Proposta A — Timeline
                                </button>
                                <button
                                    onClick={() => setProposta('B')}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                        proposta === 'B'
                                            ? 'bg-primary text-white shadow-md'
                                            : 'text-warm-gray-500 hover:text-warm-gray-800'
                                    }`}
                                >
                                    Proposta B — Racconto
                                </button>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* ═══════════════════ PROPOSTA A ═══════════════════ */}
            {proposta === 'A' && (
                <>
                    {/* ───── TIMELINE ───── */}
                    <section className="py-20 px-4">
                        <div className="max-w-5xl mx-auto">
                            <FadeInView direction="up" className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-4">
                                    Il Cammino degli Anni
                                </h2>
                                <p className="text-lg text-warm-gray-600 max-w-xl mx-auto">
                                    Ogni tappa della nostra storia racconta un impegno rinnovato verso i nostri clienti.
                                </p>
                            </FadeInView>

                            <div className="relative">
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-gold-400/50 to-primary/10 -translate-x-1/2" />

                                <div className="space-y-12 md:space-y-0">
                                    {timelineEvents.map((evento, index) => {
                                        const IconComponent = evento.icon;
                                        const isLeft = evento.lato === 'left';
                                        const isGold = evento.colore === 'gold';

                                        return (
                                            <FadeInView
                                                key={index}
                                                direction={isLeft ? 'right' : 'left'}
                                                delay={0.1}
                                                className="relative md:grid md:grid-cols-2 md:gap-16 md:items-center mb-12 md:mb-16"
                                            >
                                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                                                                w-14 h-14 rounded-full items-center justify-center shadow-lg ring-4 ring-white"
                                                    style={{
                                                        background: isGold
                                                            ? 'linear-gradient(135deg, #f59e0b, #d97706)'
                                                            : 'linear-gradient(135deg, #b91c1c, #991b1b)',
                                                    }}
                                                >
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>

                                                <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                                                    <div className={`group relative p-8 rounded-3xl shadow-lg border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                                                        ${isGold
                                                            ? 'bg-gradient-to-br from-gold-50/60 to-cream-50 border-gold-200/60'
                                                            : 'bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'
                                                        }`}
                                                    >
                                                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-4
                                                            ${isGold ? 'bg-gold-400 text-white' : 'bg-primary text-white'}`}
                                                        >
                                                            <Clock className="w-3.5 h-3.5" />
                                                            {evento.anno}
                                                        </div>

                                                        <div className={`md:hidden flex w-12 h-12 rounded-2xl items-center justify-center mb-4
                                                            ${isGold ? 'bg-gold-400' : 'bg-primary'}`}
                                                        >
                                                            <IconComponent className="w-6 h-6 text-white" />
                                                        </div>

                                                        <h3 className={`text-2xl font-bold mb-3 ${isGold ? 'text-warm-gray-800' : 'text-primary'}`}>
                                                            {evento.titolo}
                                                        </h3>
                                                        <p className="text-warm-gray-600 leading-relaxed text-base">
                                                            {evento.descrizione}
                                                        </p>

                                                        <div className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300 group-hover:left-4 group-hover:right-4
                                                            ${isGold ? 'bg-gold-300' : 'bg-primary/30'}`}
                                                        />
                                                    </div>
                                                </div>

                                                <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
                                            </FadeInView>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ───── VALORI ───── */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-6xl mx-auto">
                            <StaggerContainer>
                                <div className="text-center mb-16">
                                    <StaggerItem direction="up">
                                        <div className="inline-flex items-center px-4 py-2 bg-gold-100 rounded-full mb-4">
                                            <Star className="w-4 h-4 text-gold-600 mr-2" />
                                            <span className="text-gold-700 font-semibold text-sm">Cosa ci guida</span>
                                        </div>
                                        <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-4">
                                            I Nostri Valori
                                        </h2>
                                        <p className="text-lg text-warm-gray-600 max-w-2xl mx-auto leading-relaxed">
                                            Non sono solo parole. Sono i princìpi che guidano ogni consulenza, ogni scelta di prodotto
                                            e ogni relazione con i nostri clienti.
                                        </p>
                                    </StaggerItem>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {valori.map((valore, index) => {
                                        const IconComponent = valore.icon;
                                        return (
                                            <StaggerItem key={index} direction="up">
                                                <div className="group h-full flex flex-col items-center text-center p-8 rounded-3xl bg-warm-gray-50 hover:bg-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/20">
                                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300">
                                                        <IconComponent className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-warm-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                                                        {valore.titolo}
                                                    </h3>
                                                    <p className="text-warm-gray-600 group-hover:text-white/85 leading-relaxed text-sm transition-colors duration-300">
                                                        {valore.descrizione}
                                                    </p>
                                                </div>
                                            </StaggerItem>
                                        );
                                    })}
                                </div>
                            </StaggerContainer>
                        </div>
                    </section>
                </>
            )}

            {/* ═══════════════════ PROPOSTA B ═══════════════════ */}
            {proposta === 'B' && (
                <section className="py-20 px-4">
                    <div className="max-w-3xl mx-auto">

                        {/* Intro */}
                        <FadeInView direction="up" className="mb-14">
                            <p className="text-xl sm:text-2xl text-warm-gray-700 font-light leading-relaxed italic border-l-4 border-primary pl-6">
                                {introB}
                            </p>
                        </FadeInView>

                        {/* Paragrafi con anno a lato */}
                        <div className="space-y-12">
                            {paragrafiBStoria.map((paragrafo, index) => (
                                <FadeInView key={index} direction="up" delay={0.05 * index}>
                                    <div className="flex gap-6 sm:gap-10 items-start">
                                        {/* Anno */}
                                        <div className="flex-shrink-0 w-16 sm:w-20 pt-1 text-right">
                                            <span className="text-2xl sm:text-3xl font-bold text-primary/30 leading-none tabular-nums">
                                                {paragrafo.anno}
                                            </span>
                                        </div>

                                        {/* Separatore verticale */}
                                        <div className="flex-shrink-0 flex flex-col items-center">
                                            <div className="w-3 h-3 rounded-full bg-primary mt-1.5 ring-4 ring-primary/15" />
                                            {index < paragrafiBStoria.length - 1 && (
                                                <div className="w-px flex-1 bg-warm-gray-200 mt-2" style={{ minHeight: '100%' }} />
                                            )}
                                        </div>

                                        {/* Testo */}
                                        <div className="flex-1 pb-4">
                                            <p className="text-warm-gray-700 text-lg leading-relaxed">
                                                {paragrafo.testo}
                                            </p>
                                        </div>
                                    </div>
                                </FadeInView>
                            ))}
                        </div>

                        {/* Chiusura */}
                        <FadeInView direction="up" className="mt-16">
                            <div className="bg-gradient-to-br from-warm-gray-900 to-warm-gray-800 text-white rounded-3xl p-10 text-center">
                                <p className="text-xl leading-relaxed text-white/90 mb-6">
                                    {chiusuraB}
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-10 h-0.5 bg-gold-400" />
                                    <span className="text-gold-400 font-semibold tracking-widest text-xs uppercase">
                                        La famiglia Fazio
                                    </span>
                                    <div className="w-10 h-0.5 bg-gold-400" />
                                </div>
                            </div>
                        </FadeInView>
                    </div>
                </section>
            )}

            {/* ───── QUOTE (comune) ───── */}
            {proposta === 'A' && (
                <section className="py-20 px-4 bg-gradient-to-br from-warm-gray-900 to-warm-gray-800 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
                        <span className="text-[20rem] font-bold leading-none">70</span>
                    </div>
                    <div className="max-w-3xl mx-auto text-center relative">
                        <FadeInView direction="up">
                            <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed mb-8 italic text-white/90">
                                &ldquo;Vedere bene non è un lusso — è un diritto. Il nostro lavoro è assicurarcelo, ogni giorno, per ogni persona.&rdquo;
                            </blockquote>
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-12 h-0.5 bg-gold-400" />
                                <p className="text-gold-400 font-semibold tracking-wider text-sm uppercase">
                                    La famiglia Fazio
                                </p>
                                <div className="w-12 h-0.5 bg-gold-400" />
                            </div>
                        </FadeInView>
                    </div>
                </section>
            )}

            {/* ───── CTA (comune) ───── */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                                Fai Parte della Nostra Storia
                            </h2>
                            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Vieni a trovarci in uno dei nostri due negozi ad Augusta e Villasmundo.
                                Siamo qui da quasi settant&apos;anni, e ci saremo ancora.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:0931521985"
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center shadow-lg"
                                    aria-label="Chiama Augusta: 0931 521985"
                                >
                                    <Phone className="w-5 h-5" />
                                    Augusta: 0931 521985
                                </a>
                                <a
                                    href="/su-di-noi/dove-trovarci"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Scopri dove trovarci"
                                >
                                    <MapPin className="w-5 h-5" />
                                    Dove Trovarci
                                </a>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
