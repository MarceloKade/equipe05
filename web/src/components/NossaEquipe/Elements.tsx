import Image, { StaticImageData } from "next/image";

interface Icone {
  src: StaticImageData;
  url: string;
  alt: string;
}

export interface CardProps {
  nome: string;
  area: string;
  cargo: string;
  imagem: string;
  icones: Icone[];
}

function Titulo() {
  return (
    <h2 className="text-[4.8rem] font-bold text-center">
      Conheça nossa equipe de liderança
    </h2>
  );
}

function Descricao() {
  return (
    <p className="text-[1.8rem] mt-6">
      A nossa equipe de liderança é composta por profissionais experientes que
      trabalham juntos para impulsionar a comunidade Código Certo para frente.
    </p>
  );
}

function Card({ nome, area, cargo, imagem, icones }: CardProps) {
  return (
    <div className="border rounded-2xl pr-4 pl-4 py-6 card mt-20 h-[273px] w-[270px]">
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden mx-auto mb-2">
        <Image src={imagem} alt={nome} width={100} height={100} priority />
      </div>
      <p className="text-[2rem] font-semibold mt-[0.8rem]">{nome}</p>
      <p className="font-normal text-[2rem] break-words mt-[1.2rem]">{area}</p>
      <p className="font-normal text-[2rem] break-words">{cargo}</p>
      <div className="flex justify-center space-x-2 mt-[1.2rem]">
        {icones.map((icone, index) => (
          <a key={index} href={icone.url}>
            <Image src={icone.src} alt={icone.alt} width={28} height={28} />
          </a>
        ))}
      </div>
    </div>
  );
}

export { Titulo, Descricao, Card };
