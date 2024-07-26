import HeroSection from "@/components/HeroSection/HeroSection";
import NossaEquipe from "@/components/NossaEquipe/NossaEquipe";
import Beneficios from "@/components/Beneficios/Beneficios";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Beneficios/>
      <NossaEquipe />
    </>
  );
}
