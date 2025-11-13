import Hero from "@/components/sections/Hero";
import LogosCarousel from "@/components/sections/LogosCarousel";
import OurProducts from "@/components/sections/OurProducts";
import OurServices from "@/components/sections/OurServices";
import ContactUs from "@/components/sections/ContactUs";


export default function Home() {
  return (
    <>
      <Hero />
      <LogosCarousel />
      <OurProducts />
      <OurServices />
      <ContactUs />
    </>
  );
}
