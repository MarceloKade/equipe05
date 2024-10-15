import Image from "next/image";
import bgImage from "@/assets/Oportunidades/bg.png";
import bgImageOportunidades from "@/assets/Oportunidades/bgOportunidades.png";
import bgImageAprenda from "@/assets/Oportunidades/bgAprenda.png";
import projetoImage from "@/assets/Oportunidades/Projeto.png";
import { UxDesignIcon } from "@/assets/TopBar/svg";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

function BgImage() {
  return (
    <Image
      src={bgImage}
      alt="Fotos colaboradores"
      width={500}
      height={500}
      className="absolute object-cover -z-10 left-0 top-0 opacity-60 w-full h-[70.6rem]"
    />
  );
}

function BgImageOportunidades() {
  return (
    <Image
      src={bgImageOportunidades}
      alt="Fotos colaboradores"
      width={500}
      height={500}
      className="absolute object-cover object-left-top -z-10 left-0 top-0 w-full h-full"
    />
  );
}

function BgImageAprenda() {
  return (
    <Image
      src={bgImageAprenda}
      alt="Fotos colaboradores"
      width={500}
      height={500}
      className="absolute object-contain object-center xl:object-center pt-40 xl:pt-0 pr-14 xl:pr-0 opacity-60 w-full h-full"
    />
  );
}

function TitleContainer() {
  return (
    <h2 className="flex flex-col xl:gap-3 text-[3.2rem] leading-[120%] xl:text-[4.8rem] font-bold gradient-text">
      <span>O que você vai encontrar na</span>
      <span>Código Certo?</span>
    </h2>
  );
}

function TitleDescription() {
  return (
    <p className="text-[1.6rem] leading-[150%] xl:text-[2.0rem] mt-[2.0rem] xl:mt-0 mb-[3.2rem] xl:mb-0 text-zinc-300">
      Junte-se a nós e comece a construir seu futuro!
    </p>
  );
}

function TitleLeftText() {
  return (
    <h3 className="flex flex-col xl:gap-3 text-[3.2rem] font-bold">
      Oportunidades de Voluntariado
    </h3>
  );
}

function DescriptionLeftText() {
  return (
    <p className="font-manrope mt-[1.2rem] text-[1.6rem] leading-[150%] xl:text-[2.0rem]">
      Explore oportunidades de voluntariado dentro e fora da comunidade Código
      Certo Coders. Pode incluir{" "}
      <span className="font-bold text-white">
        projetos voluntários em andamento ou Projetos futuros.
      </span>
      Venha fazer a diferença!
    </p>
  );
}

function TextButtonVoluntariar() {
  return <p className="font-bold text-[1.6rem]">Quero me voluntariar</p>;
}

function TextButtonCursos() {
  return <p className="font-bold text-[1.6rem]">Conhecer Cursos</p>;
}
function ButtonIcon() {
  return <ArrowTopRightOnSquareIcon className="h-[1.6rem] w-[1.6rem]" />;
}

function TitleRightText() {
  return (
    <h3 className="text-[2.4rem] leading-[120%] xl:text-[3.2rem] font-medium">
      Oportunidade de desenvolver suas habilidades com Devs experientes
    </h3>
  );
}

function TitleRightBottomText() {
  return (
    <h4 className="text-[2.0rem] leading-[120%] text-white">
      Oportunidades para se desenvolver!
    </h4>
  );
}

function Skills() {
  return (
    <div className="flex flex-wrap gap-x-[0.8rem] gap-y-[1.6rem] xl:gap-[1.3rem] text-[1.2rem] mt-[2.4rem] xl:mt-[5.06rem]">
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full flex gap-[1.0rem]">
        <CodeBracketIcon className="h-full w-[1.8rem]" /> Desenvolvimento
        Front-end
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full  flex gap-[1.0rem]">
        <RocketLaunchIcon className="h-full w-[1.8rem]" /> Soft Skills
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full  flex gap-[1.0rem]">
        <UxDesignIcon /> UX Design
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full flex gap-[1.0rem]">
        <HandRaisedIcon className="h-full w-[1.8rem]" /> Times colaborativos
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full flex gap-[1.0rem]">
        <CodeBracketIcon className="h-full w-[1.8rem]" /> Desenvolvimento
        Back-end
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full  flex gap-[1.0rem]">
        <UsersIcon className="h-full w-[1.8rem]" /> Networking
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full flex gap-[1.0rem]">
        <CodeBracketIcon className="h-full w-[1.8rem]" /> QA
      </div>
      <div className="px-[1.6rem] py-[0.8rem] bg-zinc-800 rounded-full flex gap-[1.0rem]">
        <CodeBracketIcon className="h-full w-[1.8rem]" /> Banco de Dados
      </div>
    </div>
  );
}

function TitleBottomText() {
  return (
    <h3 className="text-[3.2rem] leading-[120%] font-medium">
      Aprenda e contribua com a comunidade!
    </h3>
  );
}

function DescriptionBottomText() {
  return (
    <p className="text-[1.6rem] leading-[150%] xl:text-[2.0rem] text-white">
      Tenha acesso uma variedade de recursos de aprendizagem em tecnologia,
      incluindo tutoriais, cursos online, livros recomendados, ferramentas de
      desenvolvimento e muito mais!
    </p>
  );
}

function ProjetoImage() {
  return (
    <Image
      src={projetoImage}
      alt="Fotos colaboradores"
      width={350}
      height={350}
      className="z-10"
    />
  );
}

export {
  TitleContainer,
  TitleDescription,
  TitleLeftText,
  DescriptionLeftText,
  TextButtonVoluntariar,
  TextButtonCursos,
  ButtonIcon,
  TitleRightText,
  TitleRightBottomText,
  Skills,
  TitleBottomText,
  DescriptionBottomText,
  ProjetoImage,
  BgImage,
  BgImageOportunidades,
  BgImageAprenda,
};
