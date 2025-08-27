import { MapPin, Mail, Phone, Clock, Navigation, Car, Bus, Train } from "lucide-react";

export default function ContactUs() {
    const contatti = {
        telefono: "0931 521985",
        email: "otticafazio@outlook.it",
        indirizzo: "Via Principe Umberto, 76, 96011 Augusta SR",
        orari: {
            lunedi: "16:30 - 20:00",
            marMerGio: "09:00 - 13:00 | 16:30 - 20:00",
            venSab: "09:00 - 13:00 | 16:30 - 20:00",
            domenica: "Chiuso"
        }
    };

    return (
        <section className="min-h-screen py-16 px-4 bg-black">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                    CONTATTACI
                </h2>
                <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                    Siamo qui per te. Contattaci per prenotare una visita o per qualsiasi informazione.
                </p>
            </div>

            {/* Informazioni di contatto */}
            <div className="w-full max-w-6xl mx-auto mb-20">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-0 lg:divide-x lg:divide-gray-600">
                    
                    {/* Dove trovarci */}
                    <div className="flex-1 flex flex-col items-center text-center px-0 lg:px-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                            <MapPin size={28} className="text-white" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white mb-4">
                                Dove trovarci
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <p className="font-medium text-white">Augusta</p>
                                    <a 
                                        href="https://www.google.com/maps/dir/?api=1&destination=Via%20Principe%20Umberto%2076%2C%2096011%20Augusta%20SR%2C%20Italy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm hover:text-white transition-colors duration-200 cursor-pointer inline-block"
                                    >
                                        Via Principe Umberto 76<br />96011 Augusta (SR)
                                    </a>
                                </div>
                                <div>
                                    <p className="font-medium text-white">Villasmundo</p>
                                    <a 
                                        href="https://www.google.com/maps/dir/?api=1&destination=Via%20Vittorio%20Emanuele%2067%2C%2096010%20Villasmundo%20SR%2C%20Italy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm hover:text-white transition-colors duration-200 cursor-pointer inline-block"
                                    >
                                        Via Vittorio Emanuele 67<br />96010 Villasmundo (SR)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex-1 flex flex-col items-center text-center px-0 lg:px-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                            <Mail size={28} className="text-white" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white mb-4">
                                Email
                            </h3>
                            <a 
                                href="mailto:otticafazio@outlook.it" 
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-base"
                            >
                                otticafazio@outlook.it
                            </a>
                        </div>
                    </div>

                    {/* Telefono */}
                    <div className="flex-1 flex flex-col items-center text-center px-0 lg:px-8">
                        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                            <Phone size={28} className="text-white" strokeWidth={2} />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white mb-4">
                                Telefono
                            </h3>
                            <div className="space-y-3 text-gray-300">
                                <div>
                                    <p className="font-medium text-white">Augusta</p>
                                    <a 
                                        href="tel:0931521985" 
                                        className="text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                                    >
                                        0931 521985
                                    </a>
                                </div>
                                <div>
                                    <p className="font-medium text-white">Villasmundo</p>
                                    <a 
                                        href="tel:0931959425" 
                                        className="text-sm hover:text-white transition-colors duration-200 cursor-pointer"
                                    >
                                        0931 959425
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form di contatto e Orari */}
            <div className="max-w-6xl mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Form di Contatto */}
                    <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Inviaci un Messaggio
                        </h3>

                        <form className="space-y-6" role="form" aria-label="Modulo di contatto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
                                        Nome *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        required
                                        aria-required="true"
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-2">
                                        Cognome *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        required
                                        aria-required="true"
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                        placeholder="Il tuo cognome"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    aria-required="true"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                    placeholder="la-tua-email@esempio.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                                    Telefono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                    placeholder="+39 123 456 7890"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                                    Oggetto
                                </label>
                                <select 
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white"
                                    aria-describedby="subject-help"
                                >
                                    <option value="">Seleziona un oggetto</option>
                                    <option value="informazioni">Richiesta Informazioni</option>
                                    <option value="appuntamento">Prenotazione Appuntamento</option>
                                    <option value="assistenza">Assistenza Post-Vendita</option>
                                    <option value="altro">Altro</option>
                                </select>
                                <div id="subject-help" className="sr-only">
                                    Seleziona la categoria che meglio descrive la tua richiesta
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                    Messaggio *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    aria-required="true"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                                    placeholder="Scrivi qui il tuo messaggio..."
                                ></textarea>
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    required
                                    aria-required="true"
                                    className="mt-1 w-4 h-4 text-white border-gray-600 rounded focus:ring-0 focus:ring-offset-0 bg-black/50"
                                />
                                <label htmlFor="privacy" className="text-xs text-gray-200">
                                    Accetto il trattamento dei dati personali secondo la privacy policy *
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-gray-200 text-black py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                                aria-describedby="submit-help"
                            >
                                Invia Messaggio
                            </button>
                            <div id="submit-help" className="sr-only">
                                Invia il modulo di contatto per ricevere una risposta entro 24 ore
                            </div>
                        </form>
                    </div>

                    {/* Orari di Apertura */}
                    <div className="space-y-8">
                        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                                    <Clock size={24} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    Orari di Apertura
                                </h3>
                            </div>
                            <div className="space-y-4 text-gray-300">
                                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                    <span className="font-medium">Lunedì:</span>
                                    <span>{contatti.orari.lunedi}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                    <span className="font-medium">Mar-Mer-Gio:</span>
                                    <span>{contatti.orari.marMerGio}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                                    <span className="font-medium">Ven-Sab:</span>
                                    <span>{contatti.orari.venSab}</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-medium">Domenica:</span>
                                    <span className="text-red-400">{contatti.orari.domenica}</span>
                                </div>
                            </div>
                        </div>

                        {/* Come raggiungerci */}
                        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-6">
                                Come Raggiungerci
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Car className="text-white mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-white">In Auto</h4>
                                        <p className="text-sm text-gray-300">
                                            Parcheggio disponibile nelle vicinanze. 
                                            Facilmente accessibile dal centro di Augusta.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Bus className="text-white mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-white">Mezzi Pubblici</h4>
                                        <p className="text-sm text-gray-300">
                                            Autobus urbani con fermata nelle vicinanze.
                                            Linee che collegano Augusta centro.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Train className="text-white mt-1 flex-shrink-0" size={20} />
                                    <div>
                                        <h4 className="font-semibold text-white">Treno</h4>
                                        <p className="text-sm text-gray-300">
                                            Stazione ferroviaria di Augusta a breve distanza.
                                            Collegamenti con Siracusa e Catania.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8">
                <p className="text-gray-500 text-sm">
                    © 2025 Ottica Fazio. Tutti i diritti riservati.
                </p>
            </div>
        </section>
    );
}