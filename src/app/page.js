import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverEffect from '@/components/animations/HoverEffect';
import Hero from "@/components/Hero";
import LogosCarousel from "@/components/LogosCarousel";


export default function Home() {
  return (
    <>
      <Hero />
      <LogosCarousel />
      
    </>
  );
}
