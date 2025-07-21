import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverEffect from '@/components/animations/HoverEffect';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-cream-50">
      <h1 className="text-3xl md:text-5xl font-bold text-bordeaux mb-10">Benvenuto su Ottica Fazio</h1>
      <ul className="space-y-4 text-center">
        <li>
          <a href="/servizi" className="text-lg text-bordeaux hover:underline">Vai a Servizi</a>
        </li>
        <li>
          <a href="/prodotti" className="text-lg text-bordeaux hover:underline">Vai a Prodotti</a>
        </li>
        <li>
          <a href="/chi-siamo" className="text-lg text-bordeaux hover:underline">Vai a Chi Siamo</a>
        </li>
        <li>
          <a href="/contatti" className="text-lg text-bordeaux hover:underline">Vai a Contatti</a>
        </li>
      </ul>
    </main>
  );
}
