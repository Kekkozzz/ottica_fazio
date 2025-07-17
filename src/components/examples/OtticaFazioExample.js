export default function CustomTailwindExample() {
    return (
        <div className="container mx-auto p-8 space-y-6 bg-cream-50 min-h-screen">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-bordeaux to-gold bg-clip-text text-transparent text-center">
                Ottica Fazio - Colori Brand
            </h1>

            {/* Sezione bottoni con palette dell'insegna */}
            <div className="space-x-4 flex flex-wrap gap-4 justify-center">
                <button className="px-6 py-3 bg-bordeaux text-cream-50 rounded-lg hover:bg-bordeaux-600 transition-colors font-bold shadow-lg">
                    OTTICA
                </button>
                <button className="px-6 py-3 bg-silver-warm text-warm-gray-900 rounded-lg hover:bg-silver-warm-600 transition-colors font-medium shadow-lg">
                    Fazio
                </button>
                <button className="px-6 py-3 bg-gold text-warm-gray-900 rounded-lg hover:bg-gold-600 transition-colors font-medium shadow-lg">
                    Premium
                </button>
            </div>

            {/* Cards con palette ispirata all'insegna */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-cream-100 rounded-xl shadow-xl p-6 border border-warm-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-bordeaux">Optometria</h3>
                    <p className="text-warm-gray-600 leading-relaxed">
                        Servizi professionali per la cura della vista con tecnologie allavanguardia.
                    </p>
                    <div className="mt-4 flex space-x-2">
                        <span className="px-3 py-1 bg-bordeaux-50 text-bordeaux-700 rounded-full text-sm font-medium">Professionale</span>
                        <span className="px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">Qualità</span>
                    </div>
                </div>

                <div className="bg-warm-gray-800 rounded-xl shadow-xl p-6 border border-warm-gray-700 animate-fade-in">
                    <h3 className="text-xl font-bold mb-3 text-cream-100">Contattologia</h3>
                    <p className="text-warm-gray-300 leading-relaxed">
                        Lenti a contatto di ultima generazione per ogni esigenza visiva.
                    </p>
                    <div className="mt-4">
                        <button className="px-4 py-2 bg-bordeaux text-cream-100 rounded-lg hover:bg-bordeaux-600 transition-colors text-sm font-medium">
                            Scopri di più
                        </button>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-cream-100 to-gold-100 rounded-xl shadow-xl p-6 animate-slide-up">
                    <h3 className="text-xl font-bold mb-3 text-warm-gray-800">Professionisti della Visione</h3>
                    <p className="text-warm-gray-700 leading-relaxed">
                        Esperienza e competenza al servizio del tuo benessere visivo.
                    </p>
                </div>
            </div>

            {/* Palette ispirata all'insegna */}
            <div className="bg-cream-100 rounded-xl shadow-xl p-8 border border-warm-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-warm-gray-800 text-center">Palette Colori Ottica Fazio</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Bordeaux */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-warm-gray-800 mb-2">Bordeaux</h4>
                        <div className="bg-bordeaux h-12 rounded-lg shadow-md"></div>
                        <div className="bg-bordeaux-300 h-8 rounded"></div>
                        <div className="bg-bordeaux-700 h-8 rounded"></div>
                    </div>

                    {/* Silver Warm */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-warm-gray-800 mb-2">Silver Warm</h4>
                        <div className="bg-silver-warm h-12 rounded-lg shadow-md"></div>
                        <div className="bg-silver-warm-300 h-8 rounded"></div>
                        <div className="bg-silver-warm-700 h-8 rounded"></div>
                    </div>

                    {/* Cream */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-warm-gray-800 mb-2">Cream</h4>
                        <div className="bg-cream h-12 rounded-lg shadow-md border border-warm-gray-300"></div>
                        <div className="bg-cream-300 h-8 rounded"></div>
                        <div className="bg-cream-700 h-8 rounded"></div>
                    </div>

                    {/* Gold */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-warm-gray-800 mb-2">Gold</h4>
                        <div className="bg-gold h-12 rounded-lg shadow-md"></div>
                        <div className="bg-gold-300 h-8 rounded"></div>
                        <div className="bg-gold-700 h-8 rounded"></div>
                    </div>

                    {/* Warm Gray */}
                    <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-warm-gray-800 mb-2">Warm Gray</h4>
                        <div className="bg-warm-gray-500 h-12 rounded-lg shadow-md"></div>
                        <div className="bg-warm-gray-300 h-8 rounded"></div>
                        <div className="bg-warm-gray-700 h-8 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Replica dell'insegna */}
            <div className="bg-cream-200 rounded-xl shadow-2xl p-12 border-4 border-gold-400">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold text-bordeaux tracking-wider">OTTICA</h1>
                    <h2 className="text-5xl font-light text-silver-warm-600 italic">Fazio</h2>
                    <p className="text-sm text-warm-gray-600 mt-4">OPTOMETRIA • CONTATTOLOGIA</p>
                    <p className="text-xs text-warm-gray-500 italic">Professionisti della Visione</p>
                </div>
            </div>

            {/* Sezione con spacing personalizzato */}
            <div className="mt-18 p-6 bg-gradient-to-r from-bordeaux to-gold rounded-xl text-cream-100 shadow-xl">
                <h3 className="text-xl font-bold mb-2">Design Autentico</h3>
                <p>Palette di colori fedele all&apos;identità visiva dell&apos;insegna Ottica Fazio, con toni caldi e professionali.</p>
            </div>
        </div>
    );
}
