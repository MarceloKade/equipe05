import * as C from "./Containers";
import * as E from "./Elements";
import linkedinIcon from "../../assets/NossaEquipe/linkedin-nossa-equipe.svg";
import xIcon from "../../assets/NossaEquipe/x-nossa-equipe.svg";
import githubIcon from "../../assets/NossaEquipe/github-nossa-equipe.svg";

const equipe: E.CardProps[] = [
  {
    nome: "Tess Reid",
    area: "FullStack",
    cargo: "Developer",
    imagem: "/tessReid.jpg",
    icones: [
      { src: linkedinIcon, url: "#", alt: "LinkedIn" },
      { src: xIcon, url: "#", alt: "X" },
      { src: githubIcon, url: "#", alt: "GitHub" },
    ],
  },
  {
    nome: "Ben Jhonston",
    area: "BackEnd",
    cargo: "Developer",
    imagem: "/benJohnston.jpg",
    icones: [
      { src: linkedinIcon, url: "#", alt: "LinkedIn" },
      { src: xIcon, url: "#", alt: "X" },
      { src: githubIcon, url: "#", alt: "GitHub" },
    ],
  },
  {
    nome: "Liliana Shelton",
    area: "Senior Product",
    cargo: "Designer",
    imagem: "/lilianaShelton.png",
    icones: [
      { src: linkedinIcon, url: "#", alt: "LinkedIn" },
      { src: xIcon, url: "#", alt: "X" },
      { src: githubIcon, url: "#", alt: "GitHub" },
    ],
  },
  {
    nome: "Camrym Berry",
    area: "FrontEnd",
    cargo: "Developer",
    imagem: "/camrymBerry.jpg",
    icones: [
      { src: linkedinIcon, url: "#", alt: "LinkedIn" },
      { src: xIcon, url: "#", alt: "X" },
      { src: githubIcon, url: "#", alt: "GitHub" },
    ],
  },
];

export default function NossaEquipe() {
  return (
    <section className="nossaEquipe text-center py-6 px-8 mx-[192]">
      <C.ContainerText>
        <E.Titulo />
        <E.Descricao />
      </C.ContainerText>
      <C.ContainerCards>
        {equipe.map((membro, index) => (
          <E.Card
            key={index}
            nome={membro.nome}
            area={membro.area}
            cargo={membro.cargo}
            imagem={membro.imagem}
            icones={membro.icones}
          />
        ))}
      </C.ContainerCards>
    </section>
  );
}
