import Image from "next/image";
import Bro from "@/assets/bro.svg";
import Code from "@/assets/code-xml.svg";
import Business from "@/assets/briefcase-business.svg";

function titulo() {
  return (
    <h2 className="font-bold leading-[120%] md-leading-[120%] gradient-text text-[3.2rem] lg:text-[4.8rem]">
      Por que se juntar a comunidade da Código Certo?
    </h2>
  );
}

function descricao() {
  return (
    <p className="text-white text-base md:text-[1.8rem] xl:leading-[150%] leading-[2.7rem]">
      Nossa comunidade é um espaço colaborativo onde você pode aprender com os
      outros, compartilhar suas experiências e encontrar oportunidades de
      crescimento. Junte-se a nós e descubra como podemos ajudá-lo a alcançar
      seus objetivos.
    </p>
  );
}

function projetos() {
  return (
    <div className="flex flex-col items-center justify-around leading-normal text-white space-y-6 w-full md:w-[549px] py-8 flex-1 border rounded-3xl border-neutral-700 bg-[#111114]">
      <Image
        src={Bro}
        alt="Charts Bro"
        width={418}
        height={316}
        className="w-[209px] md:w-[419px]"
      />
      <div className="p-12 m-0 space-y-6">
        <h3 className="font-bold text-[20px] md:text-[40px]">
          Desenvolvimento de Projetos
        </h3>
        <p className="text-base md:text-xl	leading-[30px]">
          Você encontrará desenvolvedores experientes e iniciantes, todos
          trabalhando juntos para resolver problemas e criar soluções
          inovadoras. Junte-se a nós e descubra como podemos ajudá-lo a
          impulsionar sua carreira e projetos.
        </p>
      </div>
    </div>
  );
}

function habilidades() {
  return (
    <div className=" text-white flex flex-col space-y-6 w-full md:w-[548px] p-12 border rounded-3xl border-neutral-700 bg-[#111114]">
      <Image
        src={Code}
        alt="code-xml"
        width={48}
        height={48}
        className="w-[48px] xl:w-[48px]"
      />
      <h3 className="font-bold text-[20px] md:text-[40px]">
        Desenvolvimento de Habilidades
      </h3>
      <p className="text-base md:text-xl	leading-[30px]">
        Você está pronto para levar sua habilidade de desenvolvimento para o
        próximo nível? A comunidade Código Certo é o lugar perfeito para você.
      </p>
    </div>
  );
}

function networking() {
  return (
    <div className="text-white flex flex-col space-y-6 w-full md:w-[548px] border rounded-3xl border-neutral-700 bg-[#111114] p-12">
      <Image
        src={Business}
        alt="lucide/briefcase-business"
        width={48}
        height={48}
        className="w-[48px] xl:w-[48px]"
      />
      <h3 className="font-bold text-[20px] md:text-[40px]">
        Oportunidades de Networking
      </h3>
      <p id="Oportunidades" className="text-base md:text-xl	leading-[30px]">
        Conecte-se com outros desenvolvedores de software e expanda sua rede de
        contatos.
      </p>
    </div>
  );
}

export { titulo, descricao, projetos, habilidades, networking };
