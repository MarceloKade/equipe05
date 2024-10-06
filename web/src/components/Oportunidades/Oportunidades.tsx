import { RayImage } from "@/assets/TopBar/svg"
import * as C from "./Containers"
import * as E from "./Elements"

export default function Oportunidades() {
  return (
    <C.ContainerSection>
      <C.Container>
      <E.BgImage />
      <C.ContainerTitle>
        <E.TitleContainer />
        <E.TitleDescription />
      </C.ContainerTitle>
      <C.ContainerContent>
        <C.ContainerOportunidades>
          <E.BgImageOportunidades />
          <C.ContainerTextOportunidades>
            <E.TitleLeftText />
            <E.DescriptionLeftText />
            <C.ButtonVoluntariar>
              <E.TextButtonVoluntariar />
              <E.ButtonIcon />
            </C.ButtonVoluntariar>
          </C.ContainerTextOportunidades>
        </C.ContainerOportunidades>
        <C.ContainerHabilidades>
          <RayImage />
          <E.TitleRightText />
        </C.ContainerHabilidades>
        <C.ContainerDesenvolver>
          <E.TitleRightBottomText />
          <E.Skills />
        </C.ContainerDesenvolver>
        <C.ContainerAprenda>
          <E.BgImageAprenda />
          <C.ContainerTextAprenda>
            <E.TitleBottomText />
            <E.DescriptionBottomText />
            <C.ButtonAprenda>
              <E.TextButtonVoluntariar />
              <E.ButtonIcon />
            </C.ButtonAprenda>
          </C.ContainerTextAprenda>
          <E.ProjetoImage />
        </C.ContainerAprenda>
      </C.ContainerContent>
    </C.Container>
    </C.ContainerSection>
  )
}