import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { Eye, Microscope, Map, ContactRound, Palette } from 'lucide-react';
import Image from 'next/image';

export default function OurServices() {
    // Dati dei servizi
    const services = [
        {
            id: 1,
            title: "Esame dell'acuità visiva",
            description: "Controllo completo della vista con strumentazione all'avanguardia per valutare la tua capacità visiva.",
            icon: Eye,
            color: "from-primary to-bordeaux-600",
            image: "/services/acuita-visiva.png"
        },
        {
            id: 2,
            title: "Esame in lampada a fessura",
            description: "Analisi dettagliata delle strutture oculari per individuare eventuali patologie o anomalie.",
            icon: Microscope,
            color: "from-warm-gray-600 to-warm-gray-700",
            image: "/services/lampada-a-fessura.jpg"
        },
        {
            id: 3,
            title: "Topografia corneale",
            description: "Mappatura precisa della superficie corneale per una correzione visiva ottimale.",
            icon: Map,
            color: "from-primary to-bordeaux-600",
            image: "/services/topografia-corneale.webp"
        },
        {
            id: 4,
            title: "Applicazione e valutazione lenti a contatto",
            description: "Consulenza specializzata per la scelta e l'applicazione delle lenti a contatto più adatte.",
            icon: ContactRound,
            color: "from-warm-gray-600 to-warm-gray-700",
            image: "/services/lenti.jpg"
        },
        {
            id: 5,
            title: "Studio forma del viso",
            description: "Analisi personalizzata per identificare la montatura perfetta che valorizzi i tuoi lineamenti.",
            icon: Palette,
            color: "from-primary to-bordeaux-600",
            image: "/services/Forma-viso.webp"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-8 py-12 px-4">
            <div className="text-center mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-warm-gray-900 mb-4">
                    I NOSTRI SERVIZI
                </h2>
                <p className="text-warm-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
                    Professionalità e tecnologia avanzata per la cura della tua vista
                </p>
            </div>

            <section className="w-full max-w-7xl mx-auto">
                <StaggerContainer>
                    {/* Griglia responsive: 1 col mobile, 2 col tablet, 3 col desktop per i primi 3, poi 2 centrati per gli ultimi 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {services.slice(0, 3).map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <StaggerItem key={service.id}>
                                    <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        {/* Icona con gradient background */}
                                        <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                        
                                        {/* Contenuto */}
                                        <h3 className="font-bold text-xl mb-4 text-warm-gray-900 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-warm-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Immagine in alto a destra */}
                                        <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>

                    {/* Seconda riga centrata per gli ultimi 2 servizi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.slice(3).map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <StaggerItem key={service.id}>
                                    <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                        {/* Icona con gradient background */}
                                        <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                        
                                        {/* Contenuto */}
                                        <h3 className="font-bold text-xl mb-4 text-warm-gray-900 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-warm-gray-600 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Immagine in alto a destra */}
                                        <div className="absolute top-4 right-4 w-16 h-16 rounded-2xl overflow-hidden opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </section>
        </section>
    );
}