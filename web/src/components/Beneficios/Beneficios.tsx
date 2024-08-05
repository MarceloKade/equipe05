import * as C from "./Containers"
import * as E from "./Elements"

export default function Beneficios() {

  return(
    <C.ContainerBeneficios>
      <C.ContainerText>
        <E.titulo/>
        <E.descricao/>
      </C.ContainerText>
      <C.ContainerGrid>
        <E.projetos/>
        <C.ContainerGridColumn>
          <E.habilidades/>
          <E.networking/>
        </C.ContainerGridColumn>
      </C.ContainerGrid>
    </C.ContainerBeneficios>
  )
}