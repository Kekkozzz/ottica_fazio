
import React from 'react';
import Image from 'next/image';
import { Eye, CheckCircle, Clock, Users, ArrowRight, Calendar, Phone, Mail } from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

// Metadata per SEO
export const metadata = {
    title: "Esame dell'Acuità Visiva - Ottica Fazio Augusta",
    description: "Controllo completo della vista con strumentazione all'avanguardia. Esame dell'acuità visiva presso Ottica Fazio ad Augusta e Villasmundo.",
    keywords: "esame acuità visiva, controllo vista, ottico Augusta, miopia, ipermetropia, astigmatismo, presbiopia",
    openGraph: {
        title: "Esame dell'Acuità Visiva - Ottica Fazio",
        description: "Controllo professionale della vista con tecnologia avanzata",
        type: "website",
    },
};

export default function EsameAcuitaVisiva() {
    const benefici = [
        {
            id: 1,
            title: "Diagnosi Precoce",
            description: "Identificazione tempestiva di problemi visivi per prevenire complicazioni future",
            icon: Eye
        },
        {
            id: 2,
            title: "Precisione Avanzata",
            description: "Strumentazione digitale di ultima generazione per misurazioni accurate",
            icon: CheckCircle
        },
        {
            id: 3,
            title: "Rapido e Indolore",
            description: "Esame non invasivo della durata di circa 20-30 minuti",
            icon: Clock
        },
        {
            id: 4,
            title: "Per Tutta la Famiglia",
            description: "Adatto a bambini, adulti e anziani con metodologie specifiche per ogni età",
            icon: Users
        }
    ];

    const fasi = [
        {
            numero: "01",
            title: "Anamnesi",
            descrizione: "Raccolta della storia clinica e valutazione dei sintomi"
        },
        {
            numero: "02",
            title: "Test preliminari",
            descrizione: "Controllo della vista da lontano e da vicino"
        },
        {
            numero: "03",
            title: "Misurazione precisa",
            descrizione: "Determinazione dei difetti refrattivi con autorifrattrometro"
        },
        {
            numero: "04",
            title: "Verifica soggettiva",
            descrizione: "Affinamento della correzione con la collaborazione del paziente"
        },
        {
            numero: "05",
            title: "Risultati e consigli",
            descrizione: "Spiegazione dettagliata e consigli personalizzati"
        }
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
                                        <Eye className="w-5 h-5 text-primary mr-2" />
                                        <span className="text-primary font-semibold text-sm">Esame Specialistico</span>
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight">
                                        Esame dell&apos;
                                        <span className="text-primary block">Acuità Visiva</span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                                        Controllo completo e accurato della tua capacità visiva utilizzando 
                                        strumentazione digitale all&apos;avanguardia per garantire la migliore 
                                        correzione possibile.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                                        src="/services/service1.jpeg"
                                        alt="Strumentazione moderna per l'esame dell'acuità visiva"
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

            {/* Sezione Cos'è */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    Cos&apos;è l&apos;Esame dell&apos;Acuità Visiva?
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    L&apos;esame dell&apos;acuità visiva è il <strong>gold standard</strong> della misurazione della capacità dell&apos;occhio 
                                    di discriminare i dettagli della scena visiva ad una certa distanza di osservazione.
                                </p>
                                <p className="text-lg text-warm-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                                    Utilizzando la strumentazione apposita unita alla conoscenza e all&apos;esperienza nel campo 
                                    optometrico e contattologico ci è possibile, tramite questo esame, andare a ricercare la 
                                    miglior correzione dell&apos;eventuale ametropia presente nell&apos;occhio del paziente che abbiamo davanti.
                                </p>
                            </StaggerItem>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefici.map((beneficio) => {
                                const IconComponent = beneficio.icon;
                                return (
                                    <StaggerItem key={beneficio.id} direction="up">
                                        <div className="text-center space-y-4">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                                                <IconComponent className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="font-bold text-lg text-warm-gray-900">
                                                {beneficio.title}
                                            </h3>
                                            <p className="text-warm-gray-600 leading-relaxed">
                                                {beneficio.description}
                                            </p>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Quando farlo */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                        Quando Fare l&apos;Esame
                                    </h2>
                                </StaggerItem>
                                
                                <StaggerItem direction="up">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-warm-gray-900 mb-2">Controllo Preventivo</h3>
                                                <p className="text-warm-gray-600">Almeno una volta l&apos;anno per mantenere la salute visiva ottimale</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-warm-gray-900 mb-2">Sintomi Visivi</h3>
                                                <p className="text-warm-gray-600">Vista offuscata, mal di testa frequenti, affaticamento oculare</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-warm-gray-900 mb-2">Cambio Correzione</h3>
                                                <p className="text-warm-gray-600">Quando gli occhiali attuali non forniscono più una visione nitida</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                            <div>
                                                <h3 className="font-semibold text-warm-gray-900 mb-2">Età Specifiche</h3>
                                                <p className="text-warm-gray-600">Controlli più frequenti dopo i 40 anni per la presbiopia</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        <div className="relative">
                            <FadeInView direction="left" delay={0.3}>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-primary/10 to-cream-100 rounded-3xl p-8 shadow-lg">
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                    <Clock className="w-10 h-10 text-white" />
                                                </div>
                                                <h3 className="font-bold text-xl text-warm-gray-900 mb-2">
                                                    Durata Esame
                                                </h3>
                                                <p className="text-3xl font-bold text-primary mb-2">20-30 min</p>
                                                <p className="text-warm-gray-600">Tempo medio necessario</p>
                                            </div>
                                            
                                            <div className="border-t border-warm-gray-200 pt-6">
                                                <h4 className="font-semibold text-warm-gray-900 mb-3">Include:</h4>
                                                <ul className="space-y-2 text-sm text-warm-gray-600">
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-primary" />
                                                        Anamnesi completa
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-primary" />
                                                        Test vista da lontano e vicino
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-primary" />
                                                        Autorifrattrometria
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-primary" />
                                                        Consigli personalizzati
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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
                                Contattaci per l&apos;Esame dell&apos;Acuità Visiva
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                La tua vista è preziosa. Affidati alla nostra esperienza e tecnologia avanzata
                                per un controllo accurato e professionale.
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
