import * as C from "./Containers"
import * as E from "./Elements"

export default function QuemSomos() {
  return(
  <C.Container>
    <C.ContainerQuemSomos>
       <C.ContainerText>
          <E.titulo/>
          <E.descricao/>
          <E.acreditamos/>
       </C.ContainerText>
       <C.ContainerImage>
          <E.elementVectorImage/>
       </C.ContainerImage>
    </C.ContainerQuemSomos>
    <C.ContainerPilares>
      <C.ContainerImage>
          <E.tituloPilares/>
          <E.elementgroupImage/>
       </C.ContainerImage>
       <C.TextContainer>
          <E.Colaboração/>
       </C.TextContainer>
    </C.ContainerPilares>
  </C.Container>
    
  )
}