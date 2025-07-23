import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { Eye, Contact, Search } from 'lucide-react';

export const metadata = {
  title: "Servizi - Ottica Fazio",
  description: "Scopri i nostri servizi professionali: optometria, contattologia e consulenze specializzate per la cura della tua vista.",
};

export default function Servizi() {
  const servizi = [
    {
      title: "Optometria Completa",
      description: "Esami della vista approfonditi con tecnologie all'avanguardia per una diagnosi precisa e personalizzata.",
      features: ["Esame della vista computerizzato", "Analisi del fondo oculare", "Misurazione pressione intraoculare", "Test per daltonismo"],
      icon: Eye
    },
    {
      title: "Contattologia Specializzata",
      description: "Applicazione e controllo di lenti a contatto per ogni esigenza visiva e stile di vita.",
      features: ["Lenti giornaliere e mensili", "Lenti multifocali", "Lenti toriche per astigmatismo", "Lenti cosmetiche"],
      icon: Contact
    },
    {
      title: "Consulenza Personalizzata",
      description: "Supporto professionale nella scelta della soluzione visiva più adatta alle tue necessità.",
      features: ["Analisi delle abitudini visive", "Consigli per l'uso corretto", "Follow-up periodici", "Assistenza post-vendita"],
      icon: Search
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeInView>
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-bordeaux">
                I Nostri Servizi
              </h1>
              <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                Professionisti qualificati al servizio della tua vista con tecnologie moderne 
                e un approccio personalizzato per ogni paziente.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Servizi Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servizi.map((servizio, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 border border-warm-gray-200 hover:shadow-2xl transition-all duration-500 group">
                    <div className="text-bordeaux mb-4 group-hover:scale-110 transition-transform duration-300">
                      <servizio.icon size={48} />
                    </div>
                    <h3 className="text-2xl font-bold text-bordeaux mb-4">
                      {servizio.title}
                    </h3>
                    <p className="text-warm-gray-600 mb-6 leading-relaxed">
                      {servizio.description}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-warm-gray-800 text-sm uppercase tracking-wide">
                        Cosa Include:
                      </h4>
                      <ul className="space-y-2">
                        {servizio.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-warm-gray-600">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
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
                Prenota la Tua Visita
              </h2>
              <p className="text-bordeaux-100 mb-8 text-lg">
                Il primo passo per prenderti cura della tua vista inizia qui.
              </p>
              <button className="bg-gold hover:bg-gold-600 text-warm-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Contattaci Ora
              </button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
