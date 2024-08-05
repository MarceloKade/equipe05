import HeroSection from "@/components/HeroSection/HeroSection";
import NossaEquipe from "@/components/NossaEquipe/NossaEquipe";
import Beneficios from "@/components/Beneficios/Beneficios";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Beneficios/>
      <NossaEquipe />
      <Feedbacks/>
    </>
  );
}
