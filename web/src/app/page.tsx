import NossaEquipe from "@/components/NossaEquipe/NossaEquipe";
import Beneficios from "@/components/Beneficios/Beneficios";
import Feedbacks from "@/components/Feedbacks/Feedbacks";
import QuemSomos from "@/components/QuemSomos/QuemSomos";
import HeroSection from "@/components/HeroSection/HeroSection";
import Oportunidades from "@/components/Oportunidades/Oportunidades";
import Comunidade from "@/components/Comunidade/Comunidade";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <main className="pt-[9.6rem] flex flex-col gap-[6.4rem] xl:gap-0">
      <HeroSection />
      <QuemSomos />
      <Beneficios />
      <Oportunidades />
      <NossaEquipe />
      <Feedbacks />
      <Comunidade />
      <Newsletter />
    </main>
  );
}
