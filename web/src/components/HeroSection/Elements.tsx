import Image from "next/image"
import tagImage from "@/assets/Tag.png"
import mapImage from "@/assets/map.svg"

function titulo() {
  return (
    <h1 className="title-heroSection bg-clip-text text-transparent bg-gradient-to-r from-[#A6A6A6] via-[#FFF] to-[#A3A3A3] md:w-[646px] xl:text-[64px] xl:leading-[72px]">Impulsione Seu Futuro na Área Tech com a Código Certo!</h1>
  )
}

function descricao() {
  return (
    <p className="description-heroSection xl:text-[20px] xl:leading-normal">Seja bem-vindo ao universo do Código Certo Coders, onde o <span className="potencial">potencial</span> é <span className="ilimitado">ilimitado</span> e a inovação é <span className="constante">constante</span>!</p>
  )
}

function buttonParticipe() {
  
  return (
    <button className="btn-participe xl:text-[18px] xl:font-semibold xl:leading-[32px]">Participe Agora</button>
  )
}

function buttonSaibaMais() {
  return (
    <button className="btn-saibaMais xl:text-[18px] xl:font-medium xl:leading-[32px]">Saiba Mais</button>
  )
}

function comunidade() {
  return (
    <div className="comunidade xl:text-[16px] xl:font-bold xl:leading-normal">
      <Image
        src={tagImage}
        alt="Fotos colaboradores"
        width={114}
        height={32}
        className="w-[69px] xl:w-[114px]"
      />
      <p>Comunidade + 300 pessoas</p>
    </div>
  )
}

function mapaMundi() {
  return(
    <Image
      src={mapImage}
      alt="Mapa mundi"
     className="img-mapaMundi xl:w-[632px] xl:h-[440px]"
    />
  )
}

export {
  titulo,
  descricao,
  buttonParticipe,
  buttonSaibaMais,
  comunidade,
  mapaMundi
}