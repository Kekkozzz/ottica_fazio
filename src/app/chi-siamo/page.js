import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import { GraduationCap, Star, User, Microscope, Trophy } from 'lucide-react';

export const metadata = {
  title: "Chi Siamo - Ottica Fazio",
  description: "Scopri la storia di Ottica Fazio, il nostro team di professionisti e i valori che ci guidano nella cura della tua vista da oltre 30 anni.",
};

export default function ChiSiamo() {
  const teamMembers = [
    {
      name: "Dr. Marco Fazio",
      role: "Fondatore e Optometrista",
      experience: "35+ anni",
      specialization: "Optometria clinica e contattologia avanzata",
      description: "Pioniere nell'applicazione di tecnologie innovative per la cura della vista."
    },
    {
      name: "Dr.ssa Laura Fazio",
      role: "Optometrista Specializzata",
      experience: "15+ anni",
      specialization: "Optometria pediatrica e ipovisione",
      description: "Esperta nella cura della vista nei bambini e in casi di ipovisione."
    },
    {
      name: "Alessandro Rossi",
      role: "Consulente Ottico",
      experience: "10+ anni",
      specialization: "Montature di design e consulenza stilistica",
      description: "Specializzato nell'abbinamento perfetto tra funzionalità e stile."
    }
  ];

  const valori = [
    {
      title: "Professionalità",
      description: "Formazione continua e aggiornamento costante sulle ultime tecnologie nel campo dell'ottica.",
      icon: GraduationCap
    },
    {
      title: "Qualità",
      description: "Selezioniamo solo i migliori prodotti e marchi per garantire risultati eccellenti e durevoli.",
      icon: Star
    },
    {
      title: "Personalizzazione",
      description: "Ogni cliente è unico: studiamo soluzioni su misura per ogni esigenza visiva e stilistica.",
      icon: User
    },
    {
      title: "Innovazione",
      description: "Investiamo nelle tecnologie più avanzate per offrire sempre il meglio ai nostri clienti.",
      icon: Microscope
    }
  ];

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeInView>
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-bordeaux">
                Chi Siamo
              </h1>
              <p className="text-xl text-warm-gray-600 max-w-3xl mx-auto leading-relaxed">
                Una storia di famiglia e passione, dedicata alla cura della vista 
                e al benessere dei nostri clienti da oltre tre decenni.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Storia Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInView>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-bordeaux">
                  La Nostra Storia
                </h2>
                <div className="space-y-4 text-warm-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-bordeaux">Fondata nel 1988</strong> dal Dr. Marco Fazio, 
                    Ottica Fazio nasce dalla passione per l&apos;ottica e dall&apos;impegno costante 
                    nel fornire soluzioni innovative per la cura della vista.
                  </p>
                  <p>
                    Nel corso degli anni, abbiamo costruito una solida reputazione basata 
                    su <strong className="text-bordeaux">competenza, qualità e attenzione al cliente</strong>. 
                    La nostra crescita ci ha permesso di diventare un punto di riferimento 
                    nel settore ottico locale.
                  </p>
                  <p>
                    Oggi, con l&apos;ingresso della seconda generazione, continuiamo a innovare 
                    mantenendo saldi i valori fondanti: <strong className="text-bordeaux">professionalità, 
                    cura del dettaglio e rapporto umano</strong> con ogni cliente.
                  </p>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-warm-gray-200">
                <div className="text-center space-y-6">
                  <div className="text-bordeaux flex justify-center">
                    <Trophy size={72} />
                  </div>
                  <h3 className="text-2xl font-bold text-bordeaux">I Nostri Numeri</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-bordeaux">35+</div>
                      <div className="text-sm text-warm-gray-600">Anni di Esperienza</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-bordeaux">10,000+</div>
                      <div className="text-sm text-warm-gray-600">Clienti Soddisfatti</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-bordeaux">50+</div>
                      <div className="text-sm text-warm-gray-600">Marchi Partner</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-bordeaux">3</div>
                      <div className="text-sm text-warm-gray-600">Generazioni</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bordeaux mb-4">
                Il Nostro Team
              </h2>
              <p className="text-xl text-warm-gray-600">
                Professionisti qualificati al vostro servizio
              </p>
            </div>
          </FadeInView>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <StaggerItem key={index}>
                  <div className="bg-cream-50 rounded-2xl p-6 border border-warm-gray-200 text-center hover:shadow-lg transition-all duration-300">
                    <div className="w-24 h-24 bg-bordeaux rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-bordeaux mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gold font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-warm-gray-500 mb-3">
                      Esperienza: {member.experience}
                    </p>
                    <p className="text-sm font-medium text-warm-gray-700 mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-sm text-warm-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Valori Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bordeaux mb-4">
                I Nostri Valori
              </h2>
              <p className="text-xl text-warm-gray-600">
                Principi che guidano ogni giorno il nostro lavoro
              </p>
            </div>
          </FadeInView>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valori.map((valore, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-warm-gray-200 hover:shadow-xl transition-all duration-300 group">
                    <div className="text-bordeaux mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      <valore.icon size={48} />
                    </div>
                    <h3 className="text-lg font-bold text-bordeaux mb-3">
                      {valore.title}
                    </h3>
                    <p className="text-sm text-warm-gray-600 leading-relaxed">
                      {valore.description}
                    </p>
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
                Scopri la Differenza Ottica Fazio
              </h2>
              <p className="text-bordeaux-100 mb-8 text-lg">
                Vieni a conoscerci di persona e sperimenta il nostro approccio professionale e personalizzato.
              </p>
              <button className="bg-gold hover:bg-gold-600 text-warm-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Prenota un Appuntamento
              </button>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
