'use client';

import React, { useEffect } from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

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

const introB = 'La nostra storia affonda le sue radici nel tempo, costruita su passione, dedizione e una costante ricerca dell\'eccellenza.';
const chiusuraB = 'Oggi come allora, Ottica Fazio è una realtà familiare che evolve nel tempo, rimanendo fedele ai propri valori e ponendo al centro, ogni giorno, la qualità del servizio e l\'attenzione alle persone.';

export default function LaNostraStoria() {
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
                    </StaggerContainer>
                </div>
            </section>

            {/* ───── RACCONTO ───── */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">

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

            {/* ───── CTA ───── */}
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
