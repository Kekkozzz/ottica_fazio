import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverEffect from '@/components/animations/HoverEffect';

export default function Hero() {
    return (
        <main className="w-full flex items-center justify-center p-0 m-0">
            <section className="w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] bg-gray-50">
                {/* Colonna testo, bg grigio chiaro, testo centrato */}
                <div className="flex-[2] flex flex-col justify-center items-center px-4 md:px-12 py-12 min-h-[600px]">
                    <FadeInView>
                        <StaggerContainer>
                            <StaggerItem>
                                <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight text-black">
                                    NOVITÀ
                                </h1>
                            </StaggerItem>
                            <StaggerItem>
                                <p className="text-lg md:text-xl text-center text-black mb-4 max-w-3xl leading-relaxed">
                                    Sentire meglio non è mai stato così semplice. Il nuovo dispositivo acustico di EssilorLuxottica, integrato nei tuoi occhiali, è pensato per adulti con perdite uditive leggere o moderate.
                                </p>
                            </StaggerItem>
                            <StaggerItem>
                                <p className="text-base md:text-lg text-center text-black max-w-3xl leading-relaxed">
                                    I prodotti Nuance Audio sono <span className="font-bold ">disponibili presso il nostro store</span>. Vieni a provare e scopri un nuovo modo di ascoltare.
                                </p>
                            </StaggerItem>
                        </StaggerContainer>
                    </FadeInView>
                </div>

                {/* Colonna immagine e logo, bg gradiente azzurro, angolo arrotondato solo in alto a destra */}
                <div className="relative flex-[1] flex flex-col items-end justify-center rounded-tr-[48px] min-h-[400px]">
                    <FadeInView>
                        <StaggerContainer>
                            <StaggerItem>
                                {/* Immagine occhiali attaccata a destra */}
                                <div className="relative flex flex-col items-end justify-center w-full h-full">
                                    <Image
                                        src="/Nuance.webp"
                                        alt="Occhiali Nuance Audio"
                                        width={700}
                                        height={200}
                                        className="object-contain self-end"
                                        priority
                                    />
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </FadeInView>
                </div>
            </section>
        </main>
    )
}