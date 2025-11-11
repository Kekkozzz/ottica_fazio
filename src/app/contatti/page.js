import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { MapPin, Phone, Mail, Clock, Calendar, Settings, PhoneCall, Car, Bus, Train, Navigation } from 'lucide-react';

export const metadata = {
    title: "Contatti - Ottica Fazio",
    description: "Contatta Ottica Fazio per informazioni, appuntamenti e consulenze. Siamo a tua disposizione per ogni esigenza relativa alla cura della vista.",
};

export default function Contatti() {
    const contatti = {
        telefono: "0931 521985",
        email: "info@otticafazio.it",
        indirizzo: "Via Principe Umberto, 76, 96011 Augusta SR",
        orari: {
            lunedi: "16:30 - 20:00",
            marMerGio: "09:00 - 13:00 | 16:30 - 20:00",
            venSab: "09:00 - 13:00 | 16:30 - 20:00",
            domenica: "Chiuso"
        }
    };

    const servizi = [
        {
            title: "Consultazione Immediata",
            description: "Per urgenze e informazioni rapide",
            icon: PhoneCall,
            action: "Chiama Ora"
        },
        {
            title: "Consulenza Personalizzata",
            description: "Richiedi informazioni sui nostri servizi",
            icon: Calendar,
            action: "Richiedi Informazioni"
        },
        {
            title: "Assistenza Post-Vendita",
            description: "Supporto continuo per i tuoi acquisti",
            icon: Settings,
            action: "Richiedi Supporto"
        }
    ];

    return (
        <main className="min-h-screen -50">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <FadeInView>
                        <div className="text-center space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-bordeaux">
                                Contattaci
                            </h1>
                            <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Siamo qui per rispondere alle tue domande e aiutarti a trovare
                                la soluzione perfetta per la cura della tua vista.
                            </p>
                        </div>
                    </FadeInView>
                </div>
            </section>

            {/* Informazioni di Contatto */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Dettagli Contatto */}
                        <FadeInView>
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold text-bordeaux">
                                    Informazioni di Contatto
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-warm-gray-200">
                                        <div className="text-bordeaux mt-1">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-bordeaux mb-1">Indirizzo</h3>
                                            <p className="text-warm-gray-600">{contatti.indirizzo}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-warm-gray-200">
                                        <div className="text-bordeaux mt-1">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-bordeaux mb-1">Telefono</h3>
                                            <p className="text-warm-gray-600">
                                                <a href={`tel:${contatti.telefono}`} className="hover:text-bordeaux transition-colors">
                                                    {contatti.telefono}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-warm-gray-200">
                                        <div className="text-bordeaux mt-1">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-bordeaux mb-1">Email</h3>
                                            <p className="text-warm-gray-600">
                                                <a href={`mailto:${contatti.email}`} className="hover:text-bordeaux transition-colors">
                                                    {contatti.email}
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg border border-warm-gray-200">
                                        <div className="text-bordeaux mt-1">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-bordeaux mb-1">Orari di Apertura</h3>
                                            <div className="space-y-1 text-warm-gray-600">
                                                <p><span className="font-medium">Lunedì:</span> {contatti.orari.lunedi}</p>
                                                <p><span className="font-medium">Mar-Mer-Gio:</span> {contatti.orari.marMerGio}</p>
                                                <p><span className="font-medium">Ven-Sab:</span> {contatti.orari.venSab}</p>
                                                <p><span className="font-medium">Domenica:</span> {contatti.orari.domenica}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInView>

                        {/* Form di Contatto */}
                        <FadeInView>
                            <div className="bg-white rounded-2xl shadow-xl p-8 border border-warm-gray-200">
                                <h2 className="text-2xl font-bold text-bordeaux mb-6">
                                    Invia un Messaggio
                                </h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                                                Nome *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300"
                                                placeholder="Il tuo nome"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                                                Cognome *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300"
                                                placeholder="Il tuo cognome"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300"
                                            placeholder="la-tua-email@esempio.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                                            Telefono
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300"
                                            placeholder="+39 123 456 7890"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject-contatti" className="block text-sm font-medium text-warm-gray-700 mb-2">
                                            Oggetto
                                        </label>
                                        <select 
                                            id="subject-contatti"
                                            name="subject"
                                            className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 bg-white text-warm-gray-900"
                                            aria-describedby="subject-contatti-help"
                                        >
                                            <option value="">Seleziona un oggetto</option>
                                            <option value="informazioni">Richiesta Informazioni</option>
                                            <option value="assistenza">Assistenza Post-Vendita</option>
                                            <option value="altro">Altro</option>
                                        </select>
                                        <div id="subject-contatti-help" className="sr-only">
                                            Seleziona la categoria che meglio descrive la tua richiesta
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-warm-gray-700 mb-2">
                                            Messaggio *
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 resize-none"
                                            placeholder="Scrivi qui il tuo messaggio..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="privacy"
                                            required
                                            className="mt-1 w-4 h-4 text-bordeaux border-warm-gray-300 rounded focus:ring-0 focus:ring-offset-0"
                                        />
                                        <label htmlFor="privacy" className="text-sm text-warm-gray-600">
                                            Accetto il trattamento dei dati personali secondo la privacy policy *
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-bordeaux hover:bg-bordeaux-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg"
                                    >
                                        Invia Messaggio
                                    </button>
                                </form>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </section>

            {/* Servizi Rapidi */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <FadeInView>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-bordeaux mb-4">
                                Come Possiamo Aiutarti
                            </h2>
                            <p className="text-xl text-warm-gray-600">
                                Scegli il modo più conveniente per metterti in contatto con noi
                            </p>
                        </div>
                    </FadeInView>

                    <StaggerContainer>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {servizi.map((servizio, index) => (
                                <StaggerItem key={index}>
                                    <div className="text-center p-6 -50 rounded-xl border border-warm-gray-200 hover:shadow-lg transition-all duration-300 group">
                                        <div className="text-bordeaux mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                            <servizio.icon size={48} />
                                        </div>
                                        <h3 className="text-xl font-bold text-bordeaux mb-3">
                                            {servizio.title}
                                        </h3>
                                        <p className="text-warm-gray-600 mb-6 leading-relaxed">
                                            {servizio.description}
                                        </p>
                                        <button className="bg-bordeaux hover:bg-bordeaux-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                                            {servizio.action}
                                        </button>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Sezione Mappa */}
            <section className="py-16 px-4 -50">
                <div className="container mx-auto max-w-6xl">
                    <FadeInView>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-bordeaux mb-4">
                                Dove Siamo
                            </h2>
                            <p className="text-xl text-warm-gray-600">
                                Ci trovi nel centro di Augusta, facilmente raggiungibile
                            </p>
                        </div>
                    </FadeInView>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Mappa */}
                        <FadeInView>
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-warm-gray-200">
                                <div className="md:h-[62vh] h-96 w-full">
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
                        </FadeInView>

                        {/* Informazioni e Come Raggiungerci */}
                        <FadeInView>
                            <div className="space-y-6">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-warm-gray-200">
                                    <h3 className="text-xl font-bold text-bordeaux mb-4 flex items-center">
                                        <MapPin className="mr-2" size={24} />
                                        Indirizzo Completo
                                    </h3>
                                    <p className="text-warm-gray-600 mb-4">
                                        Via Principe Umberto, 76<br />
                                        96011 Augusta (SR)<br />
                                        Sicilia, Italia
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={`https://www.google.com/maps/dir/?api=1&destination=Via%20Principe%20Umberto,%2076,%2096011%20Augusta%20SR,%20Italy`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-bordeaux text-white rounded-lg hover:bg-bordeaux-600 transition-colors"
                                        >
                                            <Navigation className="mr-2" size={16} />
                                            Ottieni Indicazioni
                                        </a>
                                        <a
                                            href={`https://maps.google.com/?q=Via%20Principe%20Umberto,%2076,%2096011%20Augusta%20SR,%20Italy`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-gold text-warm-gray-900 rounded-lg hover:bg-gold-600 transition-colors"
                                        >
                                            <MapPin className="mr-2" size={16} />
                                            Visualizza su Maps
                                        </a>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-warm-gray-200">
                                    <h3 className="text-xl font-bold text-bordeaux mb-4">
                                        Come Raggiungerci
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Car className="text-bordeaux mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-warm-gray-800">In Auto</h4>
                                                <p className="text-sm text-warm-gray-600">
                                                    Parcheggio disponibile nelle vicinanze. 
                                                    Facilmente accessibile dal centro di Augusta.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Bus className="text-bordeaux mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-warm-gray-800">Mezzi Pubblici</h4>
                                                <p className="text-sm text-warm-gray-600">
                                                    Autobus urbani con fermata nelle vicinanze.
                                                    Linee che collegano Augusta centro.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Train className="text-bordeaux mt-1 flex-shrink-0" size={20} />
                                            <div>
                                                <h4 className="font-semibold text-warm-gray-800">Treno</h4>
                                                <p className="text-sm text-warm-gray-600">
                                                    Stazione ferroviaria di Augusta a breve distanza.
                                                    Collegamenti con Siracusa e Catania.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </section>

            {/* Mappa/Indicazioni */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <FadeInView>
                        <div className="bg-bordeaux rounded-2xl p-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Vieni a Trovarci
                            </h2>
                            <p className="text-bordeaux-100 mb-8 text-lg">
                                Siamo nel cuore di Augusta, in Via Principe Umberto.
                                Ti aspettiamo per prenderci cura della tua vista.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={`tel:${contatti.telefono}`}
                                    className="bg-gold hover:bg-gold-600 text-warm-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center justify-center"
                                >
                                    <Phone className="mr-2" size={20} />
                                    Chiama Ora
                                </a>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=Via%20Principe%20Umberto,%2076,%2096011%20Augusta%20SR,%20Italy`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-white text-white hover:bg-white hover:text-bordeaux px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center"
                                >
                                    <Navigation className="mr-2" size={20} />
                                    Ottieni Indicazioni
                                </a>
                            </div>
                        </div>
                    </FadeInView>
                </div>
            </section>
        </main>
    );
}
