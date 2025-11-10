'use client';

import { Eye, Focus, Glasses } from 'lucide-react';

export default function ContactLensTypes() {
    const lensTypes = [
        {
            icon: Eye,
            title: 'Lenti Morbide Sferiche',
            subtitle: 'Per Miopia e Ipermetropia',
            description: 'Correzione visiva classica per difetti di refrazione comuni',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Focus,
            title: 'Lenti Morbide Toriche',
            subtitle: 'Per Astigmatismo',
            description: 'Correzione specializzata per astigmatismo con stabilità superiore',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Glasses,
            title: 'Lenti Morbide Multifocali',
            subtitle: 'Per Presbiopia',
            description: 'Visione perfetta a tutte le distanze per chi soffre di presbiopia',
            color: 'from-purple-500 to-purple-600'
        }
    ];

    return (
        <section className="py-16 px-4 ">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Le Nostre Soluzioni
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Tipologie di <span className="text-primary">Lenti a Contatto</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Soluzioni personalizzate per ogni tipo di difetto visivo
                    </p>
                </div>

                {/* Grid Tipologie */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {lensTypes.map((lens, index) => {
                        const Icon = lens.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20"
                            >
                                {/* Icon */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${lens.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                                        {lens.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                                        {lens.subtitle}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {lens.description}
                                    </p>
                                </div>

                                {/* Decorative element */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                                    <Icon className="w-full h-full" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
