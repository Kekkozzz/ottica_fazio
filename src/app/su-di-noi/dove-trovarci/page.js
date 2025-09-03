'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Clock, Phone, Mail, Navigation, Car, Bus, Train } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function DoveTrovarci() {
    // Imposta il titolo della pagina
    useEffect(() => {
        document.title = "Dove Trovarci - Ottica Fazio Augusta e Villasmundo";
    }, []);
    const sedi = [
        {
            id: 1,
            nome: "Augusta",
            indirizzo: "Via Principe Umberto 75",
            cap: "96011 Augusta (SR)",
            telefono: "0931 521985",
            email: "otticafazio@outlook.it",
            orari: {
                lunVen: "09:00 - 20:00",
                sabato: "09:00 - 13:00 / 16:00 - 20:00",
                domenica: "Chiuso"
            },
            coordinate: { lat: 37.2397, lng: 15.2183 },
            colore: "primary"
        },
        {
            id: 2,
            nome: "Villasmundo",
            indirizzo: "Via Vittorio Emanuele 67",
            cap: "96010 Villasmundo (SR)",
            telefono: "0931 859647",
            email: "otticafazio@outlook.it",
            orari: {
                lunVen: "09:00 - 13:00 / 16:00 - 20:00",
                sabato: "09:00 - 13:00",
                domenica: "Chiuso"
            },
            coordinate: { lat: 37.1756, lng: 15.1267 },
            colore: "secondary"
        }
    ];

    const comeRaggiungerci = [
        {
            icon: Car,
            title: "In Auto",
            descrizione: "Parcheggi disponibili nelle vicinanze di entrambi i negozi"
        },
        {
            icon: Bus,
            title: "Mezzi Pubblici",
            descrizione: "Fermate autobus a pochi metri dalle nostre sedi"
        },
        {
            icon: Train,
            title: "Treno",
            descrizione: "Stazione ferroviaria di Augusta a 10 minuti a piedi"
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-warm-gray-50 via-white to-cream-50">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                                <MapPin className="w-5 h-5 text-primary mr-2" />
                                <span className="text-primary font-semibold text-sm">Le Nostre Sedi</span>
                            </div>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight mb-6">
                                DOVE
                                <span className="text-primary block">TROVARCI</span>
                            </h1>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <p className="text-xl text-warm-gray-600 leading-relaxed max-w-2xl mx-auto">
                                Vieni a trovarci presso i nostri due negozi ad Augusta e Villasmundo. 
                                Ti aspettiamo con la nostra esperienza e professionalità.
                            </p>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Sedi */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-16">
                        {sedi.map((sede, index) => (
                            <StaggerItem key={sede.id} direction={index % 2 === 0 ? "left" : "right"}>
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                                }`}>
                                    {/* Contenuto Sede */}
                                    <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                                        <div className={`p-8 rounded-3xl shadow-xl ${
                                            sede.colore === 'primary' 
                                                ? 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20' 
                                                : 'bg-gradient-to-br from-warm-gray-50 to-cream-50 border border-warm-gray-200'
                                        }`}>
                                            {/* Header */}
                                            <div className="text-center mb-8">
                                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                                                    sede.colore === 'primary' ? 'bg-primary' : 'bg-warm-gray-600'
                                                }`}>
                                                    <MapPin className="w-10 h-10 text-white" />
                                                </div>
                                                <h2 className={`text-3xl font-bold mb-2 ${
                                                    sede.colore === 'primary' ? 'text-primary' : 'text-warm-gray-700'
                                                }`}>
                                                    {sede.nome}
                                                </h2>
                                                <p className="text-lg text-warm-gray-600">
                                                    {sede.indirizzo}
                                                </p>
                                                <p className="text-sm text-warm-gray-500">
                                                    {sede.cap}
                                                </p>
                                            </div>

                                            {/* Informazioni di Contatto */}
                                            <div className="space-y-6">
                                                {/* Orari */}
                                                <div className="bg-white/60 rounded-2xl p-6">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <Clock className={`w-6 h-6 ${
                                                            sede.colore === 'primary' ? 'text-primary' : 'text-warm-gray-600'
                                                        }`} />
                                                        <h3 className="font-bold text-lg text-warm-gray-900">
                                                            QUANDO
                                                        </h3>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-semibold text-warm-gray-800">Lun - Ven:</span>
                                                            <span className="text-warm-gray-600">{sede.orari.lunVen}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-semibold text-warm-gray-800">Sabato:</span>
                                                            <span className="text-warm-gray-600">{sede.orari.sabato}</span>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-semibold text-warm-gray-800">Domenica:</span>
                                                            <span className="text-warm-gray-600">{sede.orari.domenica}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Contatti */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <a 
                                                        href={`tel:${sede.telefono.replace(/\s/g, '')}`}
                                                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                                                            sede.colore === 'primary' 
                                                                ? 'bg-primary/10 hover:bg-primary/20 text-primary' 
                                                                : 'bg-warm-gray-100 hover:bg-warm-gray-200 text-warm-gray-700'
                                                        }`}
                                                        aria-label={`Chiama il numero ${sede.telefono}`}
                                                    >
                                                        <Phone className="w-5 h-5" />
                                                        <span className="font-semibold">{sede.telefono}</span>
                                                    </a>
                                                    
                                                    <a 
                                                        href={`mailto:${sede.email}`}
                                                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                                                            sede.colore === 'primary' 
                                                                ? 'bg-primary/10 hover:bg-primary/20 text-primary' 
                                                                : 'bg-warm-gray-100 hover:bg-warm-gray-200 text-warm-gray-700'
                                                        }`}
                                                        aria-label={`Invia email a ${sede.email}`}
                                                    >
                                                        <Mail className="w-5 h-5" />
                                                        <span className="font-semibold text-sm">Email</span>
                                                    </a>
                                                </div>

                                                {/* Pulsante Indicazioni */}
                                                <button
                                                    onClick={() => {
                                                        const address = encodeURIComponent(`${sede.indirizzo}, ${sede.cap}`);
                                                        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                                                    }}
                                                    className={`w-full flex items-center justify-center gap-3 p-4 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                                                        sede.colore === 'primary' 
                                                            ? 'bg-primary hover:bg-primary-600 text-white' 
                                                            : 'bg-warm-gray-600 hover:bg-warm-gray-700 text-white'
                                                    }`}
                                                    aria-label={`Ottieni indicazioni per ${sede.nome}`}
                                                    type="button"
                                                >
                                                    <Navigation className="w-5 h-5" />
                                                    Indicazioni Stradali
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mappa */}
                                    <div className={`${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        <FadeInView direction={index % 2 === 0 ? "right" : "left"} delay={0.3}>
                                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-[400px]">
                                                {/* Google Maps Embed */}
                                                <iframe
                                                    src={`https://maps.google.com/maps?width=100%25&height=600&hl=it&q=${encodeURIComponent(`${sede.indirizzo}, ${sede.cap}`)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                                                    width="100%"
                                                    height="100%"
                                                    style={{ border: 0 }}
                                                    allowFullScreen=""
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    title={`Mappa di ${sede.nome}`}
                                                    className="absolute inset-0"
                                                ></iframe>
                                            </div>
                                        </FadeInView>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sezione Come Raggiungerci */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Come Raggiungerci
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    I nostri negozi sono facilmente raggiungibili con diversi mezzi di trasporto. 
                                    Scegli l&apos;opzione più comoda per te.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {comeRaggiungerci.map((mezzo, index) => {
                                const IconComponent = mezzo.icon;
                                return (
                                    <StaggerItem key={index} direction="up">
                                        <div className="text-center space-y-4 p-6 rounded-2xl bg-warm-gray-50 hover:shadow-lg transition-shadow duration-300">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-warm-gray-900">
                                                {mezzo.title}
                                            </h3>
                                            <p className="text-warm-gray-600 leading-relaxed">
                                                {mezzo.descrizione}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
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
                                Vieni a Trovarci
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Ti aspettiamo nei nostri negozi per offrirti la migliore consulenza 
                                e i prodotti più adatti alle tue esigenze.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="tel:0931521985"
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Chiama Augusta: 0931 521985"
                                >
                                    <Phone className="w-5 h-5" />
                                    Augusta: 0931 521985
                                </a>
                                <a 
                                    href="tel:0931859647"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Chiama Villasmundo: 0931 859647"
                                >
                                    <Phone className="w-5 h-5" />
                                    Villasmundo: 0931 859647
                                </a>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
