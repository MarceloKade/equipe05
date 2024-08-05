import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerText({ children }: Props) {
  return(
    <section className="containerText xl:py-0 xl:px-16">
      {children}
    </section>
  )
}
function ContainerButtons({ children }: Props) {
  return(
    <section className="containerButtons gap-[10px]">
      {children}
    </section>
  )
}
function ContainerImage({ children }: Props) {
  return(
    <section>
      {children}
    </section>
  )
}

export {
  ContainerText,
  ContainerButtons,
  ContainerImage
}