import React from 'react';
import Image from 'next/image';
import { Eye, CheckCircle, Clock, ArrowRight, Calendar, Phone, Mail, Settings, Shield, Target, Users, Zap, Layers, Activity, Search } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

// Metadata per SEO
export const metadata = {
    title: "Applicazione e Valutazione Lenti a Contatto - Ottica Fazio Augusta",
    description: "Servizio professionale di applicazione e valutazione lenti a contatto. Consulenza esperta per la scelta del materiale e valutazione post-applicazione.",
    keywords: "lenti a contatto, applicazione lenti, valutazione lenti, centraggio lenti, stabilità lenti, Augusta ottico",
    openGraph: {
        title: "Applicazione e Valutazione Lenti a Contatto - Ottica Fazio",
        description: "Servizio completo per l'applicazione e valutazione professionale di lenti a contatto",
        type: "website",
    },
};

export default function LentiContatto() {
    const caratteristiche = [
        {
            id: 1,
            title: "Consulenza Esperta",
            description: "Valutazione professionale per la scelta del potere e materiale più adatto",
            icon: Users
        },
        {
            id: 2,
            title: "Applicazione Sicura",
            description: "Procedura corretta per evitare rischi e garantire il massimo comfort",
            icon: Shield
        },
        {
            id: 3,
            title: "Valutazione Completa",
            description: "Controllo del centraggio, stabilità e correzione visiva post-applicazione",
            icon: Target
        },
        {
            id: 4,
            title: "Follow-up Professionale",
            description: "Monitoraggio continuo per ottimizzare l'esperienza d'uso",
            icon: Activity
        }
    ];

    const aspettiFondamentali = [
        {
            numero: "01",
            title: "Corretta Applicazione",
            descrizione: "Procedura sicura per evitare rischi legati al mancato rispetto delle norme applicative",
            dettagli: [
                "Igiene delle mani e dell'ambiente",
                "Tecnica di inserimento corretta",
                "Verifica del comfort iniziale",
                "Istruzioni per la rimozione sicura",
                "Educazione alle norme igieniche"
            ],
            icon: Shield,
            colore: "primary"
        },
        {
            numero: "02", 
            title: "Valutazione Post-Applicazione",
            descrizione: "Controllo specialistico del centraggio, stabilità e correzione visiva",
            dettagli: [
                "Analisi del centraggio sulla cornea",
                "Valutazione della stabilità post-ammiccamento",
                "Verifica della correzione visiva",
                "Controllo del movimento lenticulare",
                "Ottimizzazione del comfort d'uso"
            ],
            icon: Target,
            colore: "secondary"
        }
    ];

    const fasi = [
        {
            numero: "01",
            title: "Anamnesi e Valutazione",
            descrizione: "Raccolta della storia clinica e valutazione delle esigenze specifiche"
        },
        {
            numero: "02",
            title: "Scelta del Materiale",
            descrizione: "Selezione del tipo di lente e materiale più adatto al paziente"
        },
        {
            numero: "03",
            title: "Prima Applicazione",
            descrizione: "Inserimento guidato e istruzioni per l'uso corretto"
        },
        {
            numero: "04",
            title: "Valutazione Immediata",
            descrizione: "Controllo del centraggio, mobilità e comfort iniziale"
        },
        {
            numero: "05",
            title: "Training Personalizzato",
            descrizione: "Addestramento per inserimento, rimozione e manutenzione"
        },
        {
            numero: "06",
            title: "Follow-up",
            descrizione: "Controlli programmati per ottimizzare l'adattamento"
        }
    ];

    const tipiLenti = [
        {
            tipo: "Lenti Giornaliere",
            descrizione: "Massima igiene e comodità per uso quotidiano",
            vantaggi: ["Igiene ottimale", "Nessuna manutenzione", "Ideali per sport"]
        },
        {
            tipo: "Lenti Quindicinali/Mensili",
            descrizione: "Soluzione economica per portatori regolari",
            vantaggi: ["Costo contenuto", "Materiali avanzati", "Comfort prolungato"]
        },
        {
            tipo: "Lenti Rigide",
            descrizione: "Correzione ottimale per astigmatismi elevati",
            vantaggi: ["Correzione precisa", "Durabilità", "Salute corneale"]
        },
        {
            tipo: "Lenti Specialistiche",
            descrizione: "Soluzioni personalizzate per casi complessi",
            vantaggi: ["Su misura", "Patologie corneali", "Risultati ottimali"]
        }
    ];

    const controlliValutazione = [
        { parametro: "Centraggio", descrizione: "Posizione ottimale sulla cornea" },
        { parametro: "Mobilità", descrizione: "Movimento naturale con l'ammiccamento" },
        { parametro: "Stabilità", descrizione: "Mantenimento della posizione" },
        { parametro: "Comfort", descrizione: "Sensazione di benessere" },
        { parametro: "Acuità visiva", descrizione: "Correzione ottimale" },
        { parametro: "Lacrimazione", descrizione: "Compatibilità con il film lacrimale" }
    ];

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Contenuto Sinistra */}
                        <div className="space-y-8">
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                                        <Eye className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-primary font-semibold text-sm">Servizio Specialistico</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight">
                                        Applicazione e Valutazione
                                        <span className="text-primary block">Lenti a Contatto</span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                                        Oltre alla scelta del potere e del materiale corretto, offriamo due aspetti 
                                        fondamentali: <strong>corretta applicazione</strong> e <strong>valutazione post-applicazione</strong> 
                                        per garantire sicurezza e comfort ottimali.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button 
                                            className="group px-8 py-4 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                                            aria-label="Prenota una consulenza per lenti a contatto"
                                            type="button"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Prenota Consulenza
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <button 
                                            className="px-8 py-4 border-2 border-warm-gray-300 text-warm-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
                                            aria-label="Chiama per informazioni sulle lenti a contatto"
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
                                        src="/services/lenti.jpg"
                                        alt="Applicazione professionale di lenti a contatto"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-contain"
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

            {/* Sezione Caratteristiche */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Perché Scegliere il Nostro Servizio
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    La nostra esperienza garantisce un approccio professionale sia per chi si avvicina 
                                    per la prima volta alle lenti a contatto, sia per chi ha bisogno del parere di un esperto.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {caratteristiche.map((caratteristica) => {
                                const IconComponent = caratteristica.icon;
                                return (
                                    <StaggerItem key={caratteristica.id} direction="up">
                                        <div className="text-center space-y-4">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-warm-gray-900">
                                                {caratteristica.title}
                                            </h3>
                                            <p className="text-warm-gray-600 leading-relaxed">
                                                {caratteristica.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Tipologie di Lenti */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Tipologie di Lenti a Contatto
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Offriamo una gamma completa di lenti a contatto per soddisfare 
                                    ogni esigenza visiva e stile di vita.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {tipiLenti.map((tipo, index) => (
                                <StaggerItem key={index} direction="up">
                                    <div className="bg-warm-gray-50 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="font-bold text-lg text-warm-gray-900 mb-3">
                                            {tipo.tipo}
                                        </h3>
                                        <p className="text-warm-gray-600 mb-4 leading-relaxed">
                                            {tipo.descrizione}
                                        </p>
                                        <div className="space-y-2">
                                            {tipo.vantaggi.map((vantaggio, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                                    <span className="text-sm text-warm-gray-700">{vantaggio}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Processo e Controlli */}
            <section className="py-16 px-4 bg-gradient-to-br from-warm-gray-50 to-cream-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-8">
                                        Il Nostro Processo
                                    </h2>
                                </StaggerItem>
                                
                                <div className="space-y-6">
                                    {fasi.map((fase, index) => (
                                        <StaggerItem key={index} direction="up">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white font-bold text-sm">{fase.numero}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-warm-gray-900 mb-2">
                                                        {fase.title}
                                                    </h3>
                                                    <p className="text-warm-gray-600 leading-relaxed">
                                                        {fase.descrizione}
                                                    </p>
                                                </div>
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
                                            <Settings className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="font-bold text-xl text-warm-gray-900 mb-2">
                                            Controlli di Valutazione
                                        </h3>
                                        <p className="text-sm text-warm-gray-600">
                                            Parametri verificati post-applicazione
                                        </p>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {controlliValutazione.map((controllo, index) => (
                                            <div key={index} className="flex justify-between items-start p-3 bg-white/50 rounded-lg">
                                                <div>
                                                    <span className="font-semibold text-warm-gray-900 text-sm">
                                                        {controllo.parametro}
                                                    </span>
                                                    <p className="text-xs text-warm-gray-600 mt-1">
                                                        {controllo.descrizione}
                                                    </p>
                                                </div>
                                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-6 p-4 bg-primary/10 rounded-xl text-center">
                                        <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-sm text-warm-gray-700">
                                            <strong>Durata:</strong> 45-60 minuti
                                        </p>
                                        <p className="text-xs text-warm-gray-600 mt-1">
                                            Include consulenza, applicazione e training
                                        </p>
                                    </div>
                                </div>
                            </FadeInView>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Inizia la Tua Esperienza con le Lenti a Contatto
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Affidati alla nostra esperienza per un approccio professionale e sicuro 
                                all&apos;applicazione e valutazione delle lenti a contatto.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Prenota online una consulenza per lenti a contatto"
                                    type="button"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Prenota Consulenza
                                </button>
                                <a 
                                    href="tel:0931521985"
                                    className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Chiama il numero 0931 521985 per informazioni"
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
