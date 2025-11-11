import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverEffect from '@/components/animations/HoverEffect';
import { Glasses, Sun, Smartphone } from 'lucide-react';

export const metadata = {
    title: "Prodotti - Ottica Fazio",
    description: "Scopri la nostra selezione di occhiali da vista e da sole delle migliori marche, lenti di qualità e accessori per la cura della vista.",
};

export default function Prodotti() {
    const categorie = [
        {
            title: "Occhiali da Vista",
            description: "Montature di design e qualità per ogni stile e personalità",
            image: Glasses,
            brands: ["Ray-Ban", "Oakley", "Tom Ford", "Persol", "Gucci"],
            features: ["Montature in titanio", "Design ergonomico", "Trattamenti anti-riflesso", "Garanzia 2 anni"]
        },
        {
            title: "Occhiali da Sole",
            description: "Protezione UV totale con stile e comfort per ogni occasione",
            image: Sun,
            brands: ["Maui Jim", "Polaroid", "Carrera", "Bulgari", "Prada"],
            features: ["Protezione UV 100%", "Lenti polarizzate", "Montature leggere", "Custodie incluse"]
        },
        {
            title: "Lenti a Contatto",
            description: "Comfort e libertà di movimento per la tua vita attiva",
            image: Smartphone,
            brands: ["Acuvue", "Biofinity", "Dailies", "Air Optix", "PureVision"],
            features: ["Lenti giornaliere", "Multifocali progressive", "Per astigmatismo", "Colorate e cosmetiche"]
        }
    ];

    const lentiSpeciali = [
        {
            name: "Lenti Progressive",
            description: "Visione nitida a tutte le distanze senza linee di separazione",
            benefits: ["Transizione graduale", "Comfort visivo", "Estetica naturale"]
        },
        {
            name: "Lenti Fotocromatiche",
            description: "Si adattano automaticamente alle condizioni di luce",
            benefits: ["Protezione UV", "Comfort in ogni ambiente", "Praticità d'uso"]
        },
        {
            name: "Lenti Anti-Blu",
            description: "Proteggono dalla luce blu degli schermi digitali",
            benefits: ["Riduce affaticamento", "Migliora il sonno", "Protegge la retina"]
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
                                I Nostri Prodotti
                            </h1>
                            <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Selezioniamo per te solo i migliori brand e le tecnologie più avanzate
                                per garantire qualità, comfort e stile.
                            </p>
                        </div>
                    </FadeInView>
                </div>
            </section>

            {/* Categorie Principali */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <StaggerContainer>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {categorie.map((categoria, index) => (
                                <StaggerItem key={index}>
                                    <HoverEffect>
                                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-warm-gray-200 group">
                                            <div className="p-8">
                                                <div className="text-bordeaux mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                                                    <categoria.image size={72} />
                                                </div>
                                                <h3 className="text-2xl font-bold text-bordeaux mb-4 text-center">
                                                    {categoria.title}
                                                </h3>
                                                <p className="text-warm-gray-600 mb-6 text-center leading-relaxed">
                                                    {categoria.description}
                                                </p>

                                                {/* Brands */}
                                                <div className="mb-6">
                                                    <h4 className="font-semibold text-warm-gray-800 text-sm uppercase tracking-wide mb-3">
                                                        Marchi Disponibili:
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {categoria.brands.map((brand, brandIndex) => (
                                                            <span key={brandIndex} className="px-3 py-1 -100 text-warm-gray-700 rounded-full text-xs font-medium">
                                                                {brand}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Features */}
                                                <div>
                                                    <h4 className="font-semibold text-warm-gray-800 text-sm uppercase tracking-wide mb-3">
                                                        Caratteristiche:
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {categoria.features.map((feature, featureIndex) => (
                                                            <li key={featureIndex} className="flex items-center text-sm text-warm-gray-600">
                                                                <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </HoverEffect>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
            </section>

            {/* Lenti Speciali */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <FadeInView>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-bordeaux mb-4">
                                Lenti Specializzate
                            </h2>
                            <p className="text-xl text-warm-gray-600">
                                Tecnologie avanzate per esigenze specifiche
                            </p>
                        </div>
                    </FadeInView>

                    <StaggerContainer>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {lentiSpeciali.map((lente, index) => (
                                <StaggerItem key={index}>
                                    <div className="-50 rounded-xl p-6 border border-warm-gray-200 hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-xl font-bold text-bordeaux mb-3">
                                            {lente.name}
                                        </h3>
                                        <p className="text-warm-gray-600 mb-4 leading-relaxed">
                                            {lente.description}
                                        </p>
                                        <div className="space-y-2">
                                            {lente.benefits.map((benefit, benefitIndex) => (
                                                <div key={benefitIndex} className="flex items-center text-sm text-warm-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-bordeaux rounded-full mr-3 flex-shrink-0"></div>
                                                    {benefit}
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

            {/* CTA Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                    <FadeInView>
                        <div className="bg-bordeaux rounded-2xl p-12 text-center text-white">
                            <h2 className="text-3xl font-bold mb-4">
                                Trova il Prodotto Perfetto
                            </h2>
                            <p className="text-bordeaux-100 mb-8 text-lg">
                                Vieni a trovarci per una consulenza personalizzata e scopri quale soluzione si adatta meglio a te.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gold hover:bg-gold-600 text-warm-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                                    Sfoglia il Catalogo
                                </button>
                            </div>
                        </div>
                    </FadeInView>
                </div>
            </section>
        </main>
    );
}
