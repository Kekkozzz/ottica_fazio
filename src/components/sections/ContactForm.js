'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Errore durante l\'invio');
            }

            setStatus({ loading: false, success: true, error: null });

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                privacy: false
            });

            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            console.error('Error:', error);
            setStatus({
                loading: false,
                success: false,
                error: error.message || 'Si è verificato un errore. Riprova più tardi.'
            });
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-warm-gray-200">
            <h2 className="text-2xl font-bold text-bordeaux mb-6">
                Invia un Messaggio
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Modulo di contatto">
                {/* Success Message */}
                {status.success && (
                    <div className="bg-green-50 border border-green-500 rounded-lg p-4 flex items-start gap-3">
                        <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                        <div>
                            <p className="text-green-700 font-semibold">Messaggio inviato con successo!</p>
                            <p className="text-green-600 text-sm mt-1">Ti risponderemo al più presto.</p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {status.error && (
                    <div className="bg-red-50 border border-red-500 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                        <div>
                            <p className="text-red-700 font-semibold">Errore nell&apos;invio</p>
                            <p className="text-red-600 text-sm mt-1">{status.error}</p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName-contatti" className="block text-sm font-medium text-warm-gray-700 mb-2">
                            Nome *
                        </label>
                        <input
                            type="text"
                            id="firstName-contatti"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            disabled={status.loading}
                            className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Il tuo nome"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName-contatti" className="block text-sm font-medium text-warm-gray-700 mb-2">
                            Cognome *
                        </label>
                        <input
                            type="text"
                            id="lastName-contatti"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            disabled={status.loading}
                            className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            placeholder="Il tuo cognome"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email-contatti" className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email-contatti"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        disabled={status.loading}
                        className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="la-tua-email@esempio.com"
                    />
                </div>

                <div>
                    <label htmlFor="phone-contatti" className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Telefono
                    </label>
                    <input
                        type="tel"
                        id="phone-contatti"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status.loading}
                        className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status.loading}
                        className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 bg-white text-warm-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    <label htmlFor="message-contatti" className="block text-sm font-medium text-warm-gray-700 mb-2">
                        Messaggio *
                    </label>
                    <textarea
                        id="message-contatti"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        disabled={status.loading}
                        rows={5}
                        className="w-full px-4 py-3 border border-warm-gray-300 rounded-lg focus:border-bordeaux focus:outline-none transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Scrivi qui il tuo messaggio..."
                    ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                    <input
                        type="checkbox"
                        id="privacy-contatti"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        disabled={status.loading}
                        className="mt-1 w-4 h-4 text-bordeaux border-warm-gray-300 rounded focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <label htmlFor="privacy-contatti" className="text-sm text-warm-gray-600">
                        Accetto il trattamento dei dati personali secondo la privacy policy *
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full bg-bordeaux hover:bg-bordeaux-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                    {status.loading ? (
                        <>
                            <Loader2 className="animate-spin" size={20} />
                            Invio in corso...
                        </>
                    ) : (
                        'Invia Messaggio'
                    )}
                </button>
            </form>
        </div>
    );
}
