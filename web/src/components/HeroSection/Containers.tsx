import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerHeroSection({ children }: Props) {
  return(
    <div className="heroSection lg:flex-row lg:px-[2.4rem] lg:py-[7.2rem]">
      {children}
    </div>
  )
}
function ContainerText({ children }: Props) {
  return(
    <div className="containerText lg:py-0 lg:px-[6.4rem]">
      {children}
    </div>
  )
}
function ContainerButtons({ children }: Props) {
  return(
    <div className="containerButtons gap-[10px]">
      {children}
    </div>
  )
}
function ContainerImage({ children }: Props) {
  return(
    <div>
      {children}
    </div>
  )
}

export {
  ContainerHeroSection,
  ContainerText,
  ContainerButtons,
  ContainerImage
}