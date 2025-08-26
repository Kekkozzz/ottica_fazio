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
                                    <p className="text-sm">Via Principe Umberto 76<br />96011 Augusta (SR)</p>
                                </div>
                                <div>
                                    <p className="font-medium text-white">Villasmundo</p>
                                    <p className="text-sm">Via Vittorio Emanuele 67<br />96010 Villasmundo (SR)</p>
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
                                    <p className="text-sm">0931 521985</p>
                                </div>
                                <div>
                                    <p className="font-medium text-white">Villasmundo</p>
                                    <p className="text-sm">0931 959425</p>
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

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Nome *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Cognome *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                        placeholder="Il tuo cognome"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                    placeholder="la-tua-email@esempio.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Telefono
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                                    placeholder="+39 123 456 7890"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Oggetto
                                </label>
                                <select className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 text-white">
                                    <option value="">Seleziona un oggetto</option>
                                    <option value="informazioni">Richiesta Informazioni</option>
                                    <option value="appuntamento">Prenotazione Appuntamento</option>
                                    <option value="assistenza">Assistenza Post-Vendita</option>
                                    <option value="altro">Altro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Messaggio *
                                </label>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                                    placeholder="Scrivi qui il tuo messaggio..."
                                ></textarea>
                            </div>

                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    required
                                    className="mt-1 w-4 h-4 text-white border-gray-600 rounded focus:ring-0 focus:ring-offset-0 bg-black/50"
                                />
                                <label htmlFor="privacy" className="text-sm text-gray-300">
                                    Accetto il trattamento dei dati personali secondo la privacy policy *
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white hover:bg-gray-200 text-black py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                            >
                                Invia Messaggio
                            </button>
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

            {/* Dove Siamo - Mappe */}
            <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-bold text-white mb-4">
                        Dove Siamo
                    </h3>
                    <p className="text-xl text-gray-300">
                        Due sedi per servirti meglio: Augusta e Villasmundo
                    </p>
                </div>

                {/* Sede Augusta */}
                <div className="mb-12">
                    <h4 className="text-2xl font-bold text-white mb-6 text-center">
                        📍 Sede Augusta
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mappa Augusta */}
                        <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700">
                            <div className="h-96 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.123456789!2d15.21667!3d37.23333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131313e2b8b8b8b8%3A0x1234567890abcdef!2sVia%20Principe%20Umberto%2C%2076%2C%2096011%20Augusta%20SR%2C%20Italy!5e0!3m2!1sit!2sit!4v1642668000000!5m2!1sit!2sit"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ottica Fazio - Augusta"
                                    className="rounded-2xl"
                                ></iframe>
                            </div>
                        </div>

                        {/* Informazioni Augusta */}
                        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                            <h5 className="text-xl font-bold text-white mb-4 flex items-center">
                                <MapPin className="mr-2" size={24} />
                                Augusta - Sede Principale
                            </h5>
                            <p className="text-gray-300 mb-6">
                                Via Principe Umberto, 76<br />
                                96011 Augusta (SR)<br />
                                Sicilia, Italia
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=Via%20Principe%20Umberto,%2076,%2096011%20Augusta%20SR,%20Italy`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    <Navigation className="mr-2" size={16} />
                                    Ottieni Indicazioni
                                </a>
                                <a
                                    href={`https://maps.google.com/?q=Via%20Principe%20Umberto,%2076,%2096011%20Augusta%20SR,%20Italy`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    <MapPin className="mr-2" size={16} />
                                    Visualizza su Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sede Villasmundo */}
                <div>
                    <h4 className="text-2xl font-bold text-white mb-6 text-center">
                        📍 Sede Villasmundo
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mappa Villasmundo */}
                        <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700">
                            <div className="h-96 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8574832937446!2d15.1956!3d37.2450!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e1234567890%3A0xabcdef1234567890!2sVia%20Vittorio%20Emanuele%2C%2067%2C%2096010%20Villasmundo%20SR%2C%20Italy!5e0!3m2!1sit!2sit!4v1642668100000!5m2!1sit!2sit"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ottica Fazio - Villasmundo"
                                    className="rounded-2xl"
                                ></iframe>
                            </div>
                        </div>

                        {/* Informazioni Villasmundo */}
                        <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
                            <h5 className="text-xl font-bold text-white mb-4 flex items-center">
                                <MapPin className="mr-2" size={24} />
                                Villasmundo - Sede Secondaria
                            </h5>
                            <p className="text-gray-300 mb-6">
                                Via Vittorio Emanuele, 67<br />
                                96010 Villasmundo (SR)<br />
                                Sicilia, Italia
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=Via%20Vittorio%20Emanuele,%2067,%2096010%20Villasmundo%20SR,%20Italy`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    <Navigation className="mr-2" size={16} />
                                    Ottieni Indicazioni
                                </a>
                                <a
                                    href={`https://maps.google.com/?q=Via%20Vittorio%20Emanuele,%2067,%2096010%20Villasmundo%20SR,%20Italy`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                                >
                                    <MapPin className="mr-2" size={16} />
                                    Visualizza su Maps
                                </a>
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