import Image from "next/image";
import vectorImage from "@/assets/vector.svg";
import dot from "@/assets/dot.svg";
import groupImage from "@/assets/group.svg";
import network from "@/assets/network.svg";
import accessibility from "@/assets/accessibility.svg";
import hearthandshake from "@/assets/heart-handshake.svg";
import scale from "@/assets/scale.svg";
import Divider from "@/assets/Divider.svg";

function titulo() {
  return (
    <h2 className="text-[#FFFF] max-w-[527px] text-[3.2rem] lg:text-[4.8rem] lg:leading-[57.6px] mb-6 font-bold">
      Quem somos e em que acreditamos?
    </h2>
  );
}

function descricao() {
  return (
    <p className="text-[#D4D4D8] text-[1.6rem] lg:text-[1.8rem] lg:leading-normal mb-8 font-normal">
      O Código Certo é uma iniciativa dedicada a impulsionar a inovação e o
      desenvolvimento digital,{" "}
      <span className="potencial">
        fundada em 2018 e atualmente com cerca de 20 funcionários.{" "}
      </span>{" "}
      é{" "}
      <span className="ilimitado">
        Com uma abordagem centrada nas pessoas e na excelência técnica,
      </span>{" "}
      estamos dedicados a construir um amanhã melhor,
      <span className="constante"> hoje.</span>
    </p>
  );
}

function acreditamos() {
  return (
    <>
      <p className="font-bold text-[#FFF] text-[2rem] mb-[1.6rem]">
        Acreditamos em:
      </p>

      <ul className="flex flex-col gap-[1.6rem]">
        <li className="text-[#E5E5E5] flex flex-row gap-[1.6rem] text-[1.6rem] lg:text-[2rem] font-medium">
          <Image src={dot} alt="dot Image" width={20} height={20} />
          Tecnologia para Todos
        </li>

        <li className="text-[#E5E5E5] flex flex-row gap-[1.6rem] text-[1.6rem] lg:text-[2rem] font-medium">
          <Image src={dot} alt="dot Image" width={20} height={20} />
          Empoderamento Individual
        </li>

        <li className="text-[#E5E5E5] flex flex-row gap-[1.6rem] text-[1.6rem] lg:text-[2rem] font-medium">
          <Image src={dot} alt="dot Image" width={20} height={20} />
          Educação Contínua
        </li>

        <li className="text-[#E5E5E5] flex flex-row gap-[1.6rem] text-[1.6rem] lg:text-[2rem] font-medium">
          <Image src={dot} alt="dot Image" width={20} height={20} />
          Diversidade e Inclusão
        </li>
      </ul>
    </>
  );
}

function elementVectorImage() {
  return <Image src={vectorImage} alt="Vector Image" className="w-full" />;
}

function elementgroupImage() {
  return <Image src={groupImage} alt="group Image" className="w-full" />;
}

function tituloPilares() {
  return (
    <h2 className="text-[#FFFF] md:w-[527px] text-[1.6rem] lg:text-[48px] lg:leading-[57.6px] mb-6">
      Quais são os pilares da nossa comunidade?
    </h2>
  );
}

function Colaboração() {
  return (
    <>
      <ul className="max-w-[58.8rem] flex flex-col gap-[1.936rem]">
        <li className="text-[#E5E5E5] flex flex-row gap-[4rem] text-[2rem] font-medium">
          <div className="flex flex-col items-center gap-[1.6rem]">
            <Image
              className="w-[10rem]"
              src={network}
              alt="accessibility Image"
            />
            <Image
              src={Divider}
              alt="accessibility Image"
              width={3}
              height={3}
            />
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h2 className="font-bold text-[2.0rem] leading-7">Colaboração</h2>
            <p className="text-[1.6rem]">
              Acreditamos que a colaboração é a chave para a inovação e o
              sucesso. Juntos, compartilhamos conhecimentos, habilidades e
              experiências para alcançar objetivos comuns.
            </p>
          </div>
        </li>

        <li className="text-[#E5E5E5] flex flex-row gap-[4rem] text-[2rem] font-medium">
          <div className="flex flex-col items-center gap-[1.6rem]">
            <Image
              className="w-[10rem]"
              src={accessibility}
              alt="accessibility Image"
            />
            <Image
              src={Divider}
              alt="accessibility Image"
              width={3}
              height={3}
            />
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h2 className="font-bold text-[2.0rem] leading-7">Inclusão</h2>
            <p className="text-[1.6rem]">
              Promovemos um ambiente acolhedor e inclusivo onde todas as vozes
              são ouvidas e respeitadas. Valorizamos a diversidade e acreditamos
              que ela fortalece nossa comunidade.
            </p>
          </div>
        </li>

        <li className="text-[#E5E5E5] flex flex-row gap-[4rem] text-[2rem] font-medium">
          <div className="flex flex-col items-center gap-[1.6rem]">
            <Image className="w-[10rem]" src={hearthandshake} alt="dot Image" />
            <Image
              src={Divider}
              alt="accessibility Image"
              width={3}
              height={3}
            />
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h2 className="font-bold text-[2.0rem] leading-7">
              Impacto Social
            </h2>
            <p className="text-[1.6rem]">
              Buscamos fazer uma diferença positiva no mundo através da
              tecnologia. Nossos projetos e iniciativas são orientados para
              criar um impacto significativo na sociedade.
            </p>
          </div>
        </li>

        <li className="text-[#E5E5E5] flex flex-row gap-[4rem] text-[2rem] font-medium">
          <div className="flex flex-col items-center gap-[1.6rem]">
            <Image className="w-[10rem]" src={scale} alt="dot Image" />
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            <h2 className="font-bold text-[2.0rem] leading-7">
              Ética e Transparência
            </h2>
            <p className="text-[1.6rem]">
              Operamos com integridade, transparência e responsabilidade.
              Acreditamos que a confiança e a ética são fundamentais para o
              desenvolvimento sustentável da nossa comunidade.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

export {
  titulo,
  descricao,
  acreditamos,
  elementVectorImage,
  tituloPilares,
  Colaboração,
  elementgroupImage,
};
