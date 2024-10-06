import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Container({ children }: Props) {
  return(
    <section id="SaibaMais" className="flex flex-col justify-center px-[1.6rem]">
      {children}
    </section>
  )
}

function ContainerQuemSomos({ children }: Props) {
  return(
    <div id="QuemSomos" className=" flex flex-col justify-center xl:flex-row xl:p-[11.2rem]">
      {children}
    </div>
  )
}

function ContainerText({ children }: Props) {
  return(
     <div className="max-w-[527px] xl:py-0 xl:px-16 mr-16">
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

function ContainerPilares({ children }: Props) {
  return(
    <div className="flex flex-col lg:flex-row justify-center gap-[8.0rem] xl:p-[11.2rem]">
      {children}
    </div>
  )
}

function TextContainer({ children }: Props) {
  return(
     <div>
       {children}
     </div>
  
  )
}

function ImageContainer({ children }: Props) {
  return(
    <div>
      {children}
    </div>
  )
}

export {
Container,
ContainerQuemSomos,
ContainerText,
ContainerImage,
ContainerPilares,
ImageContainer,
TextContainer

}
