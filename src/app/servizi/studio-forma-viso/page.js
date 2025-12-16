'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    Sparkles,
    Search,
    Target,
    Heart,
    CheckCircle,
    Instagram,
    ExternalLink,
    Calendar,
    Phone,
    Mail,
    Info,
    AlertCircle,
    Loader2,
    Send,
} from 'lucide-react';
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function StudioFormaViso() {
    // Stati per il form
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        message: '',
        privacy: false
    });
    const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    // Dati delle card benefici
    const benefici = [
        {
            id: 1,
            title: "Analisi Professionale",
            description: "Studio dettagliato dei tuoi lineamenti, proporzioni ed espressività del volto",
            icon: Search
        },
        {
            id: 2,
            title: "Scelta Consapevole",
            description: "Comprendi quale forma di montatura crea armonia con il tuo viso",
            icon: Target
        },
        {
            id: 3,
            title: "Valorizzazione",
            description: "Evidenzia le tue caratteristiche migliori con montature studiate ad hoc",
            icon: Sparkles
        },
        {
            id: 4,
            title: "Stile Personalizzato",
            description: "Montature che rispecchiano la tua personalità e il tuo stile unico",
            icon: Heart
        }
    ];

    // Step del processo (placeholder)
    const processoSteps = [
        {
            numero: "01",
            title: "Analisi Iniziale",
            descrizione: "[Da definire: durata, modalità, cosa include]",
            placeholder: true
        },
        {
            numero: "02",
            title: "Studio della Forma Viso",
            descrizione: "[Da definire: tecniche utilizzate, misurazioni]",
            placeholder: true
        },
        {
            numero: "03",
            title: "Selezione Montature",
            descrizione: "[Da definire: quante montature, criteri di selezione]",
            placeholder: true
        },
        {
            numero: "04",
            title: "Consegna Report",
            descrizione: "[Da definire: formato report, raccomandazioni]",
            placeholder: true
        }
    ];

    // Qualifiche Martina Fazio
    const qualifiche = [
        "Certificata Image Consultant",
        "Esperta in analisi morfologica del viso",
        "Specializzazione in eyewear styling"
    ];

    // Scroll smooth al form
    const scrollToForm = () => {
        document.getElementById('contact-form')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Handle form change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: 'studio-forma-viso'
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setFormStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    preferredDate: '',
                    message: '',
                    privacy: false
                });
            } else {
                setFormStatus('error');
                setErrorMessage(data.error || 'Errore durante l\'invio del messaggio');
            }
        } catch (error) {
            setFormStatus('error');
            setErrorMessage('Errore di connessione. Riprova più tardi.');
        }
    };

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
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-gray-900 leading-tight">
                                        Studio Forma Viso
                                        <span className="text-primary block">e Stile Personale</span>
                                    </h1>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-xl text-warm-gray-600 leading-relaxed max-w-lg">
                                        Stanco di non capire quale modello di occhiali è più adatto a te? È adesso disponibile su richiesta il servizio di consulenza stilistica per l&apos;analisi della propria forma del viso, un percorso dedicato a chi desidera scegliere il proprio paio di occhiali in modo consapevole.
                                    </p>
                                    <p className="text-lg text-warm-gray-600 leading-relaxed max-w-lg mt-4">
                                        Attraverso un&apos;analisi attenta dei lineamenti, delle proporzioni e dell&apos;espressività del volto, individuiamo le montature che creano armonia, valorizzano i punti di forza e rispecchiano il tuo stile e la tua personalità.
                                    </p>
                                    <p className="text-lg text-warm-gray-700 leading-relaxed max-w-lg mt-4 font-medium">
                                        Un approccio su misura, dove estetica e identità si incontrano, per un risultato che va oltre la semplice scelta di un occhiale.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                        <button
                                            onClick={scrollToForm}
                                            className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 flex items-center gap-2 justify-center"
                                            type="button"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Prenota Consulenza
                                        </button>
                                        <a
                                            href="tel:0931521985"
                                            className="px-8 py-4 border-2 border-warm-gray-300 text-warm-gray-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 justify-center"
                                        >
                                            <Phone className="w-5 h-5" />
                                            Chiamaci
                                        </a>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>

                        {/* Immagine Destra */}
                        <div className="relative">
                            <FadeInView direction="right" delay={0.3}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80"
                                        alt="Consulenza per la scelta degli occhiali"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
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

            {/* Sezione Benefici */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <StaggerContainer>
                        <div className="text-center mb-16">
                            <StaggerItem direction="up">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-6">
                                    I Vantaggi della Consulenza
                                </h2>
                                <p className="text-xl text-warm-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    Un approccio professionale per scoprire le montature che valorizzano la tua unicità
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

            {/* Sezione Martina Fazio */}
            <section className="py-16 px-4 bg-gradient-to-br from-warm-gray-50 to-cream-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Immagine Sinistra */}
                        <div className="relative">
                            <FadeInView direction="left" delay={0.2}>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl max-h-[600px]">
                                    <Image
                                        src="/models/marti.png"
                                        alt="Martina Fazio - Image Consultant"
                                        width={400}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Badge sovrapposto */}
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                                        <span className="text-primary font-semibold text-sm">Image Consultant Certificata</span>
                                    </div>
                                </div>
                            </FadeInView>
                        </div>

                        {/* Contenuto Destra */}
                        <div className="space-y-6">
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-3">
                                        La Tua Image Consultant
                                    </h2>
                                    <h3 className="text-2xl font-bold text-primary mb-4">
                                        Martina Fazio
                                    </h3>
                                    <p className="text-lg text-warm-gray-600 mb-4">
                                        Image Consultant &amp; Consulente Stilistica
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <p className="text-warm-gray-700 leading-relaxed mb-6">
                                        Specializzata nell&apos;analisi della forma del viso e consulenza stilistica per occhiali. Martina combina competenze tecniche in optometria con un occhio attento per lo stile e l&apos;estetica, guidandoti nella scelta delle montature che esaltano la tua bellezza naturale.
                                    </p>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <div className="space-y-3 mb-6">
                                        {qualifiche.map((qualifica, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="text-warm-gray-700">{qualifica}</span>
                                            </div>
                                        ))}
                                    </div>
                                </StaggerItem>

                                <StaggerItem direction="up">
                                    <a
                                        href="https://www.instagram.com/martinafazio_imageconsultant/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
                                    >
                                        <Instagram className="w-6 h-6" />
                                        <div className="text-left">
                                            <div className="text-sm opacity-90">Seguimi su Instagram</div>
                                            <div className="font-bold">@martinafazio_imageconsultant</div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </a>
                                </StaggerItem>
                            </StaggerContainer>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione Dettagli Servizio PLACEHOLDER */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    {/* Banner Warning */}
                    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 mb-12">
                        <div className="flex items-center gap-3">
                            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                            <p className="text-amber-800 font-semibold">
                                Sezione in definizione - I dettagli verranno completati con il cliente
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Colonna Sinistra - Il Processo */}
                        <div>
                            <StaggerContainer>
                                <StaggerItem direction="up">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-8">
                                        Come Funziona la Consulenza
                                    </h2>
                                </StaggerItem>

                                <div className="space-y-6">
                                    {processoSteps.map((fase, index) => (
                                        <StaggerItem key={index} direction="up">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <span className="text-white font-bold text-sm">{fase.numero}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg text-warm-gray-900 mb-2">
                                                        {fase.title}
                                                    </h3>
                                                    <p className="text-warm-gray-400 italic text-sm leading-relaxed">
                                                        {fase.descrizione}
                                                    </p>
                                                </div>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </div>
                            </StaggerContainer>
                        </div>

                        {/* Colonna Destra - Card Informativa */}
                        <div className="relative">
                            <FadeInView direction="right" delay={0.3}>
                                <div className="bg-gradient-to-br from-primary/10 to-cream-100 rounded-3xl p-8 shadow-lg">
                                    <h3 className="font-bold text-xl text-warm-gray-900 mb-6 text-center">
                                        Dettagli Servizio
                                    </h3>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex justify-between items-start p-4 bg-white/50 rounded-lg">
                                            <div>
                                                <span className="font-semibold text-warm-gray-900">Durata:</span>
                                                <p className="text-warm-gray-400 italic text-sm mt-1">
                                                    [Da definire con il cliente]
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-start p-4 bg-white/50 rounded-lg">
                                            <div>
                                                <span className="font-semibold text-warm-gray-900">Costo:</span>
                                                <p className="text-warm-gray-400 italic text-sm mt-1">
                                                    [Su richiesta]
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-white/50 rounded-lg">
                                            <span className="font-semibold text-warm-gray-900 block mb-2">Include:</span>
                                            <ul className="space-y-2">
                                                <li className="text-warm-gray-400 italic text-sm flex items-start gap-2">
                                                    <span className="text-warm-gray-300">•</span>
                                                    [Da definire: analisi personalizzata]
                                                </li>
                                                <li className="text-warm-gray-400 italic text-sm flex items-start gap-2">
                                                    <span className="text-warm-gray-300">•</span>
                                                    [Da definire: report dettagliato]
                                                </li>
                                                <li className="text-warm-gray-400 italic text-sm flex items-start gap-2">
                                                    <span className="text-warm-gray-300">•</span>
                                                    [Da definire: follow-up]
                                                </li>
                                                <li className="text-warm-gray-400 italic text-sm flex items-start gap-2">
                                                    <span className="text-warm-gray-300">•</span>
                                                    [Da definire: altri servizi inclusi]
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Nota informativa */}
                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                                        <div className="flex items-start gap-3">
                                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-semibold text-blue-900 mb-1 text-sm">Informazioni da Completare</h4>
                                                <p className="text-xs text-blue-800 leading-relaxed">
                                                    Contattaci per personalizzare il servizio secondo le tue esigenze e ricevere informazioni dettagliate su durata, costi e modalità.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInView>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione Form di Contatto */}
            <section id="contact-form" className="py-16 px-4 bg-gradient-to-br from-warm-gray-50 to-cream-50">
                <div className="max-w-2xl mx-auto">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-warm-gray-900 mb-4">
                                    Prenota la Tua Consulenza
                                </h2>
                                <p className="text-lg text-warm-gray-600">
                                    Compila il form e ti ricontatteremo per fissare un appuntamento
                                </p>
                            </div>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                {/* Banner Success */}
                                {formStatus === 'success' && (
                                    <div className="mb-6 bg-green-50 border-2 border-green-300 rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                                            <div>
                                                <p className="text-green-800 font-semibold">Richiesta inviata con successo!</p>
                                                <p className="text-green-700 text-sm">Ti ricontatteremo presto per fissare l&apos;appuntamento.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Banner Error */}
                                {formStatus === 'error' && (
                                    <div className="mb-6 bg-red-50 border-2 border-red-300 rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                            <div>
                                                <p className="text-red-800 font-semibold">Errore durante l&apos;invio</p>
                                                <p className="text-red-700 text-sm">{errorMessage}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Nome e Cognome */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                                                Nome *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Il tuo nome"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                                                Cognome *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Il tuo cognome"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                                            placeholder="la-tua-email@esempio.com"
                                        />
                                    </div>

                                    {/* Telefono */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                                            Telefono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                                            placeholder="+39 123 456 7890"
                                        />
                                    </div>

                                    {/* Data Preferita */}
                                    <div>
                                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                                            Data Preferita
                                        </label>
                                        <input
                                            type="date"
                                            id="preferredDate"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors"
                                        />
                                        <p className="text-xs text-warm-gray-500 mt-1">
                                            Indicaci quando preferisci, ti ricontatteremo per confermare
                                        </p>
                                    </div>

                                    {/* Messaggio */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-warm-gray-700 mb-2">
                                            Note Aggiuntive
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-3 border-2 border-warm-gray-200 rounded-xl focus:border-primary focus:outline-none transition-colors resize-none"
                                            placeholder="Raccontaci le tue esigenze o preferenze..."
                                        />
                                    </div>

                                    {/* Privacy Checkbox */}
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            name="privacy"
                                            checked={formData.privacy}
                                            onChange={handleChange}
                                            required
                                            className="mt-1 w-5 h-5 text-primary border-2 border-warm-gray-300 rounded focus:ring-primary"
                                        />
                                        <label htmlFor="privacy" className="text-sm text-warm-gray-700">
                                            Accetto il trattamento dei dati personali secondo la privacy policy *
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={formStatus === 'loading'}
                                        className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300 flex items-center gap-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'loading' ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Invio in corso...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Invia Richiesta
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Call to Action Finale */}
            <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <StaggerContainer>
                        <StaggerItem direction="up">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Scopri il Tuo Stile Perfetto
                            </h2>
                            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                                Non accontentarti di occhiali qualsiasi. Prenota la tua consulenza personalizzata e trova le montature che ti valorizzano davvero.
                            </p>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={scrollToForm}
                                    className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-warm-gray-50 transition-all duration-300 flex items-center gap-2 justify-center"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Prenota Ora
                                </button>
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
