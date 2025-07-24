'use client';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';

export default function MostSold() {
    return (
        <>
            <h2 className="my-8 md:my-16 text-2xl sm:text-3xl md:text-5xl font-extrabold font-josefin text-center mb-8 md:mb-12 tracking-tight text-black">
                I PIÙ VENDUTI
            </h2>
            <section className="w-full py-8 md:py-16 flex flex-col items-center justify-center bg-[#fafafa] border border-gray-200 shadow-2xl rounded-[32px] md:rounded-[48px] max-w-full md:max-w-[1600px] mx-auto">
                <StaggerContainer>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full px-4">
                        {[1, 2, 3].map((i) => (
                            <StaggerItem key={i}>
                                <div
                                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-80 md:h-80 bg-gradient-to-b from-blue-100 to-green-200 rounded-full flex items-center justify-center border border-gray-200 shadow-2xl mb-6 sm:mb-0"
                                >
                                </div>
                            </StaggerItem>
                        ))}
                    </div>
                </StaggerContainer>
            </section>
        </>
    );
}