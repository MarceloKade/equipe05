import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function ContainerFeedbacks({ children }: Props) {
  return (
    <section className="relative flex flex-col items-center justify-center py-[7.2rem] px-[2.4rem]">
      {children}
    </section>
  )
}

function SmallContainer({ children }: Props) {
  return (
    <div className="flex flex-col items-center overflow-y-auto scrollbar-hide h-[105.2rem] py-[3.2rem] px-[3.2rem] mx-[11.2rem]">
      {children}
    </div>
  )
}

function GridContainer({ children }: Props) {
  return (
    <div className="w-full absolute h-[22.408rem] bottom-0 bg-gradient-to-b from-backgroundDef/0 via-backgroundDef/80  to-backgroundDef z-20">
      {children}
    </div>
  )
}

function ContainerTitle({ children }: Props) {
  return (
    <div className="flex flex-col items-center p-[3.2rem] gap-[3.2rem]">
      {children}
    </div>
  )
}

function ContainerGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[0.8rem] items-start">
      {children}
    </div>
  )
}

function ContainerFlex({ children }: Props) {
  return (
    <div className="flex flex-col gap-[0.8rem]">
      {children}
    </div>
  )
}

function ContainerUser({ children }: Props) {
  return (
    <div className="w-full h-full flex gap-[1.2rem] items-center">
      {children}
    </div>
  )
}

function ContainerStack({ children }: Props) {
  return (
    <div className="w-full h-full flex items-center">
      {children}
    </div>
  )
}

function Card({ children }: Props) {
  return (
    <div className="p-[3.2rem] bg-secondary rounded-[2.4rem] text-[1.6rem] leading-[3.2rem] flex flex-col gap-[3.2rem]">
      {children}
    </div>
  )
}


export {
  ContainerFeedbacks,
  SmallContainer,
  GridContainer,
  ContainerUser,
  ContainerStack,
  ContainerTitle,
  ContainerGrid,
  ContainerFlex,
  Card
}