import { ReactNode } from "react"
import * as E from "./Elements"

type Props = {
    children: ReactNode
}

function ContainerSection({ children }: Props) {
    return (
        <section id='Comunidade' className="w-full flex justify-center px-[1.6rem] py-[6.4rem] xl:px-[11.95rem] xl:py-[7.2rem]">
            {children}
        </section>
    )
}
function Container({ children }: Props) {
    return (
        <div className="relative w-full flex justify-center items-center">
            <div className="absolute w-full inset-0 -z-10 right-0 -mr-[20rem]">
                <E.bgImage />
            </div>
            {children}
        </div>
    )
}

function DiscordContainer({ children }: Props) {
    return (
        <div className="w-[101.6rem] h-[519px] px-[1.0rem] py-[3.5rem]">
            {children}
        </div>
    )
}

function InnerContainer({ children }: Props) {
    return (
        <div className="absolute flex items-center justify-center w-full h-full z-20">
            <div className="flex flex-col w-[48.5rem] items-center justify-center gap-[3.0rem]">
                {children}
            </div>
        </div>
    )
}
function TextContainer({ children }: Props) {
    return (
        <div className="flex flex-col gap-[1.5rem] items-center">
            {children}
        </div>
    )
}

function ShapeColorContainer({ children }: Props) {
    return (
        <div className="relative flex justify-between w-full h-full p-[0.1rem] bg-gradient-to-tl from-white/10 to-white/40 rounded-[2.4rem] overflow-hidden">
            <div className="relative flex justify-between w-full h-full rounded-[2.4rem] overflow-hidden bg-[#09090B]">
                {children}
            </div>
        </div>

    )
}

function ShapeContainer({ children }: Props) {
    return (
        <div className="absolute flex justify-center items-center w-full h-full">
            <div className="flex justify-between w-2/3 h-1/2">
                {children}
            </div>
        </div>
    )
}

export {
    ContainerSection,
    Container,
    DiscordContainer,
    ShapeColorContainer,
    ShapeContainer,
    InnerContainer,
    TextContainer
}