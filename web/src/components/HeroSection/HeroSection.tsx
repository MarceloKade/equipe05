import * as C from "./Containers"
import * as E from "./Elements"

export default function HeroSection() {
  return(
    <section className="heroSection xl:flex-row xl:py-[24px] xl:px-[72px]">
       <C.ContainerText>
          <E.titulo/>
          <E.descricao/>
          <C.ContainerButtons>
            <E.buttonParticipe/>
            <E.buttonSaibaMais/>
          </C.ContainerButtons>
        <E.comunidade/>
       </C.ContainerText>
       <C.ContainerImage>
          <E.mapaMundi/>
       </C.ContainerImage>
    </section>
  )
}