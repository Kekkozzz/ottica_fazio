import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverEffect from '@/components/animations/HoverEffect';
import OtticaFazioExample from "@/components/examples/OtticaFazioExample";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <OtticaFazioExample />
      </main>
    </>
  );
}
