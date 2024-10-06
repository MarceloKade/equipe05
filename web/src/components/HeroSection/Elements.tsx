import Image from "next/image";
import tagImage from "@/assets/Tag.png";
import mapImage from "@/assets/map.svg";
import Link from "next/link";
import { useToggle } from "@/hooks/useToggle";

function titulo() {
  return (
    <h2 className="h-[24.2rem] title-heroSection bg-clip-text text-transparent bg-gradient-to-r from-[#A6A6A6] via-[#FFF] to-[#A3A3A3] md:w-[646px] lg:text-[64px] lg:leading-[72px]">
      Impulsione Seu Futuro na Área Tech com a Código Certo!
    </h2>
  );
}

function descricao() {
  return (
    <p className="description-heroSection max-w-[55.2rem] lg:text-[20px] lg:leading-normal">
      Seja bem-vindo ao universo do Código Certo Coders, onde o{" "}
      <span className="potencial">potencial</span> é{" "}
      <span className="ilimitado">ilimitado</span> e a inovação é{" "}
      <span className="constante">constante</span>!
    </p>
  );
}

interface ButtonParticipeProps {
  handleModalFormOpen: () => void;
}

function buttonParticipe({ handleModalFormOpen }: ButtonParticipeProps) {
  return (
    <button
      onClick={handleModalFormOpen}
      className="btn-participe hover:bg-white hover:text-black transition-colors duration-300 text-[1.4rem] lg:text-[1.8rem] lg:font-semibold lg:leading-[32px]"
    >
      Participe Agora
    </button>
  );
}

function buttonSaibaMais() {
  return (
    <Link href="#SaibaMais">
      <button className="btn-saibaMais text-[#FFF] hover:border-[#FFF] hover:text-[#FFF] transition-colors duration-300 text-[1.4rem] lg:text-[1.8rem] lg:font-medium lg:leading-[32px]">
        Saiba Mais
      </button>
    </Link>
  );
}

function comunidade() {
  return (
    <div className="comunidade lg:text-[16px] lg:font-bold lg:leading-normal">
      <Image
        src={tagImage}
        alt="Fotos colaboradores"
        width={114}
        height={32}
        className="w-[69px] lg:w-[114px]"
      />
      <p>Comunidade + 300 pessoas</p>
    </div>
  );
}

function mapaMundi() {
  return <Image src={mapImage} alt="Mapa mundi" />;
}

export {
  titulo,
  descricao,
  buttonParticipe,
  buttonSaibaMais,
  comunidade,
  mapaMundi,
};
