import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import Image from "next/image";

export default function OurServices() {
    // Dati dei servizi
    const services = [
        {
            id: 1,
            title: "Controllo della Vista",
            description: "Esame della vista professionale con strumentazione all'avanguardia.",
            icon: "/icons/eye-test.svg"
        },
        {
            id: 2,
            title: "Laboratorio Ottico",
            description: "Montaggio e riparazione occhiali direttamente in sede.",
            icon: "/icons/lab.svg"
        },
        {
            id: 3,
            title: "Consulenza Personalizzata",
            description: "Supporto nella scelta della montatura e delle lenti più adatte.",
            icon: "/models/mod1.jpg"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6">
            <h2 className="my-8 md:my-16 text-2xl sm:text-3xl md:text-5xl font-extrabold font-josefin text-center mb-8 md:mb-12 tracking-tight text-black">
                I NOSTRI SERVIZI
            </h2>
            <section className="w-full py-8 md:py-16 flex flex-col items-center justify-center bg-[#fafafa] border border-gray-200 shadow-lg rounded-[0px] md:rounded-[48px] max-w-full md:max-w-[1600px] mx-auto">
                <StaggerContainer>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full px-4">
                        {services.map((service) => (
                            <StaggerItem key={service.id}>
                                <div className="flex flex-col items-center justify-center p-4 w-56 sm:w-64 md:w-80 mb-6 sm:mb-0">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden flex items-center justify-center mb-4 bg-gradient-to-b from-blue-100 to-green-200transform rotate-45">
                                        <div className="transform -rotate-45 w-full h-full flex items-center justify-center">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={120}
                                                height={120}
                                                className="object-contain w-24 h-24"
                                            />
                                        </div>
                                    </div>
                                        <div className="text-center mt-14">
                                            <h3 className="font-bold text-lg md:text-xl mb-1 font-bevietnam">{service.title}</h3>
                                            <p className="text-sm md:text-base text-gray-700 mb-1">{service.description}</p>
                                        </div>
                                    </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </section>
    );
}