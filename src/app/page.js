import Image from "next/image";
import FadeInView from '@/components/animations/FadeInView';
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer';
import HoverEffect from '@/components/animations/HoverEffect';
import Hero from "@/components/sections/Hero";
import LogosCarousel from "@/components/sections/LogosCarousel";
import MostSold from "@/components/sections/MostSold";
import OurProducts from "@/components/sections/OurProducts";
import OurServices from "@/components/sections/OurServices";
import ContactUs from "@/components/sections/ContactUs";
import Prova from "@/components/sections/Prova";


export default function Home() {
  return (
    <>
      <Hero />
      <LogosCarousel />
      <MostSold />
      <OurProducts />
      <OurServices />
      <ContactUs />
    </>
  );
}
