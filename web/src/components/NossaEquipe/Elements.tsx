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
    <h1 className="text-4xl font-bold text-center">
      Conheça nossa equipe de liderança
    </h1>
  );
}

function Descricao() {
  return (
    <p className="text-lg mt-6">
      A nossa equipe de liderança é composta por profissionais experientes que trabalham juntos para impulsionar a comunidade Código Certo para frente.
    </p>
  );
}

function Card({ nome, area, cargo, imagem, icones }: CardProps) {
  return (
    <div className="border rounded-2xl pr-4 pl-4 py-6 card mt-20">
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
        <Image src={imagem} alt={nome} width={100} height={100} priority />
      </div>
      <h2 className="text-xl font-semibold text-[20px]">{nome}</h2>
      <p className="font-normal text-[18px] break-words">{area}</p>
      <p className="font-normal text-[18px] break-words">{cargo}</p>
      <div className="flex justify-center space-x-2 mt-4">
        {icones.map((icone, index) => (
          <a key={index} href={icone.url}>
            <Image src={icone.src} alt={icone.alt} width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  );
}

export { Titulo, Descricao, Card };