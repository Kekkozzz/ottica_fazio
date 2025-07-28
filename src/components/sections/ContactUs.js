import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactUs() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center gap-6 my-4">
            <h2 className="my-8 md:my-16 text-2xl sm:text-3xl md:text-5xl font-extrabold font-josefin text-center mb-8 md:mb-12 tracking-tight text-black">
                CONTATTACI
            </h2>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center md:items-start gap-12 md:gap-24 px-4">
                {/* Dove trovarci */}
                <div className="flex flex-col items-center max-w-xs lg:max-w-sm">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center mb-4">
                            <MapPin size={70} strokeWidth={2.2} className="text-black" />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl mb-1 font-josefin">Dove trovarci</h3>
                    </div>
                    <p className="text-center text-base md:text-lg font-light mt-2">
                        Via Principe Umberto 76<br />
                        96011 Augusta (SR)<br />
                        Italia<br /><br />
                        Via Vittorio Emanuele 67<br />
                        96010 Villasmundo (SR)<br />
                        Italia
                    </p>
                </div>
                {/* E-mail */}
                <div className="flex flex-col items-center max-w-xs lg:max-w-sm">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center mb-4">
                            <Mail size={70} strokeWidth={2.2} className="text-black" />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl mb-1 font-josefin">E-mail</h3>
                    </div>
                    <a href="mailto:otticafazio@outlook.it" className="underline text-base md:text-lg font-light text-black hover:text-blue-700 mt-2">otticafazio@outlook.it</a>
                </div>
                {/* Numero di Telefono */}
                <div className="flex flex-col items-center max-w-xs lg:max-w-sm">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center mb-4">
                            <Phone size={70} strokeWidth={2.2} className="text-black" />
                        </div>
                        <h3 className="font-bold text-lg md:text-xl mb-1 font-josefin">Numero di Telefono</h3>
                    </div>
                    <p className="text-center text-base md:text-lg font-light mt-2">
                        0931 521985 - Augusta<br />
                        0931 959425 - Villasmundo
                    </p>
                </div>
            </div>
        </section>
    );
}