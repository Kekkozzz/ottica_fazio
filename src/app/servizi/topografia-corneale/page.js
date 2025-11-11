import React from 'react';
import Image from 'next/image';
import { Target, Eye, CheckCircle, Clock, ArrowRight, Calendar, Phone, Mail, Search, MapPin, Zap, Shield, Activity, Layers } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

// Metadata per SEO
export const metadata = {
    title: "Topografia Corneale - Ottica Fazio Augusta",
    description: "Esame non invasivo per la mappatura della curvatura corneale con topografo avanzato. Diagnosi cheratocono e applicazione lenti a contatto specialistiche.",
    keywords: "topografia corneale, topografo, cheratocono, lenti a contatto, mappa corneale, curvatura cornea, Augusta ottico",
    openGraph: {
        title: "Topografia Corneale - Ottica Fazio",
        description: "Mappatura precisa della curvatura corneale per diagnosi e follow-up specialistico",
        type: "website",
    },
};

export default function TopografiaCorneale() {
    const caratteristiche = [
        {
            id: 1,
            title: "Esame Non Invasivo",
            description: "Procedura completamente indolore che non richiede contatto diretto con l'occhio",
            icon: Shield
        },
        {
            id: 2,
            title: "Mappatura Precisa",
            description: "Analisi dettagliata della curvatura corneale con precisione micrometrica",
            icon: Target
        },
        {
            id: 3,
            title: "Rapido e Accurato",
            description: "Risultati immediati con alta risoluzione e accuratezza diagnostica",
            icon: Zap
        },
        {
            id: 4,
            title: "Follow-up Continuo",
            description: "Monitoraggio nel tempo dell'evoluzione delle condizioni corneali",
            icon: Activity
        }
    ];

    const applicazioni = [
        {
            title: "Diagnosi Clinica",
            description: "Identificazione e valutazione di patologie corneali come il cheratocono",
            dettagli: [
                "Rilevamento precoce di irregolarità corneali",
                "Classificazione del grado di cheratocono",
                "Monitoraggio della progressione patologica",
                "Valutazione pre e post-chirurgica"
            ],
            icon: Search,
            colore: "primary"
        },
        {
            title: "Contattologia Avanzata",
            description: "Misurazioni precise per l'applicazione di lenti a contatto specialistiche",
            dettagli: [
                "Calcolo dei parametri per lenti rigide",
                "Ottimizzazione dell'adattamento lenticulare",
                "Valutazione dell'interazione lente-cornea",
                "Selezione del design più appropriato"
            ],
            icon: Eye,
            colore: "secondary"
        },
        {
            title: "Analisi con Fluoresceina",
            description: "Studio dettagliato del posizionamento delle lenti a contatto rigide",
            dettagli: [
                "Visualizzazione del pattern di appoggio",
                "Identificazione di zone di pressione",
                "Ottimizzazione della mobilità lenticulare",
                "Verifica della centratura ottimale"
            ],
            icon: Layers,
            colore: "accent"
        }
    ];

    const vantaggi = [
        {
            numero: "01",
            title: "Diagnosi Precoce",
            descrizione: "Identificazione tempestiva di patologie corneali per interventi preventivi"
        },
        {
            numero: "02",
            title: "Precisione Assoluta",
            descrizione: "Mappatura dettagliata con migliaia di punti di misurazione"
        },
        {
            numero: "03",
            title: "Lenti Personalizzate",
            descrizione: "Progettazione di lenti a contatto su misura per ogni paziente"
        },
        {
            numero: "04",
            title: "Monitoraggio Continuo",
            descrizione: "Follow-up accurato dell'evoluzione delle condizioni oculari"
        },
        {
            numero: "05",
            title: "Sicurezza Totale",
            descrizione: "Esame completamente non invasivo e privo di rischi"
        }
    ];

    const parametri = [
        { nome: "Curvatura anteriore", descrizione: "Analisi della superficie corneale esterna" },
        { nome: "Potere diottrico", descrizione: "Misurazione della capacità refrattiva" },
        { nome: "Astigmatismo corneale", descrizione: "Valutazione delle irregolarità" },
        { nome: "Diametro pupillare", descrizione: "Misurazione per lenti a contatto" },
        { nome: "Eccentricità corneale", descrizione: "Valutazione della forma geometrica" },
        { nome: "Simmetria bilaterale", descrizione: "Confronto tra i due occhi" }
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
                                        <Target className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-primary font-semibold text-sm">Mappatura Avanzata</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight">
                                        Topografia
                                        <span className="text-primary block">Corneale</span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                                        Esame non invasivo tramite il quale è possibile ottenere una mappa 
                                        della curvatura corneale, mediante uno strumento chiamato 
                                        <strong> topografo corneale</strong>.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button
                                            className="px-8 py-4 border-2 border-warm-gray-300 text-warm-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
                                            aria-label="Chiama per informazioni sulla topografia"
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
                                        src="/services/topografia-corneale.webp"
                                        alt="Topografo corneale per la mappatura della curvatura della cornea"
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
                                    Caratteristiche dell&apos;Esame
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    La topografia corneale è un esame <strong>fondamentale</strong> nella diagnosi e nel follow-up 
                                    del cheratocono e in contattologia, per valutare l&apos;effetto delle lenti a contatto sulla cornea.
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

            {/* Sezione Applicazioni */}
            <section className="py-16 px-4 bg-gradient-to-br from-warm-gray-50 to-cream-50">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Cosa Ci Permette di Fare il Topografo
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Il nostro topografo corneale offre analisi complete e precise per 
                                    diagnosi specialistiche e applicazioni contattologiche avanzate.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="space-y-8">
                            {applicazioni.map((applicazione, index) => {
                                const IconComponent = applicazione.icon;
                                const isEven = index % 2 === 0;
                                
                                return (
                                    <StaggerItem key={index} direction={isEven ? "left" : "right"}>
                                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                                            <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                                                <div className={`p-8 rounded-2xl h-full ${
                                                    applicazione.colore === 'primary' ? 'bg-primary/10 border border-primary/20' :
                                                    applicazione.colore === 'secondary' ? 'bg-blue-50 border border-blue-200' :
                                                    'bg-green-50 border border-green-200'
                                                }`}>
                                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                                                        applicazione.colore === 'primary' ? 'bg-primary' :
                                                        applicazione.colore === 'secondary' ? 'bg-blue-600' :
                                                        'bg-green-600'
                                                    }`}>
                                                        <IconComponent className="w-8 h-8 text-white" />
                                                    </div>
                                                    
                                                    <h3 className={`font-bold text-xl mb-4 ${
                                                        applicazione.colore === 'primary' ? 'text-primary' :
                                                        applicazione.colore === 'secondary' ? 'text-blue-700' :
                                                        'text-green-700'
                                                    }`}>
                                                        {applicazione.title}
                                                    </h3>
                                                    
                                                    <p className="text-warm-gray-600 mb-6 leading-relaxed">
                                                        {applicazione.description}
                                                    </p>
                                                    
                                                    <ul className="space-y-3">
                                                        {applicazione.dettagli.map((dettaglio, idx) => (
                                                            <li key={idx} className="flex items-start gap-3">
                                                                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                                                                    applicazione.colore === 'primary' ? 'bg-primary' :
                                                                    applicazione.colore === 'secondary' ? 'bg-blue-600' :
                                                                    'bg-green-600'
                                                                }`}></div>
                                                                <span className="text-warm-gray-700">{dettaglio}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                                <div className="relative">
                                                    <div className={`aspect-square rounded-3xl ${
                                                        applicazione.colore === 'primary' ? 'bg-gradient-to-br from-primary/20 to-primary/10' :
                                                        applicazione.colore === 'secondary' ? 'bg-gradient-to-br from-blue-200 to-blue-100' :
                                                        'bg-gradient-to-br from-green-200 to-green-100'
                                                    } flex items-center justify-center`}>
                                                        <IconComponent className={`w-32 h-32 ${
                                                            applicazione.colore === 'primary' ? 'text-primary' :
                                                            applicazione.colore === 'secondary' ? 'text-blue-600' :
                                                            'text-green-600'
                                                        }`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Parametri Misurati */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-8">
                                        Parametri Analizzati
                                    </h2>
                                </StaggerItem>
                                
                                <div className="space-y-6">
                                    {vantaggi.map((vantaggio, index) => (
                                        <StaggerItem key={index} direction="up">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white font-bold text-sm">{vantaggio.numero}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-warm-gray-900 mb-2">
                                                        {vantaggio.title}
                                                    </h3>
                                                    <p className="text-warm-gray-600 leading-relaxed">
                                                        {vantaggio.descrizione}
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
                                            <MapPin className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="font-bold text-xl text-warm-gray-900 mb-2">
                                            Misurazioni Precise
                                        </h3>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {parametri.map((parametro, index) => (
                                            <div key={index} className="flex justify-between items-start p-3 bg-white/50 rounded-lg">
                                                <div>
                                                    <span className="font-semibold text-warm-gray-900 text-sm">
                                                        {parametro.nome}
                                                    </span>
                                                    <p className="text-xs text-warm-gray-600 mt-1">
                                                        {parametro.descrizione}
                                                    </p>
                                                </div>
                                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-6 p-4 bg-primary/10 rounded-xl text-center">
                                        <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                                        <p className="text-sm text-warm-gray-700">
                                            <strong>Durata:</strong> 10-15 minuti
                                        </p>
                                        <p className="text-xs text-warm-gray-600 mt-1">
                                            Esame rapido e completamente indolore
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
                                Contattaci per la Topografia Corneale
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Mappatura precisa e dettagliata della tua cornea per diagnosi specialistiche
                                e applicazioni contattologiche avanzate.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="tel:0931521985"
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center"
                                    aria-label="Chiama il numero 0931 521985"
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
