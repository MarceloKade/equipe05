import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

function TopBarContainer({ children }: Props) {
    return (
        <header className="fixed right-[1.6rem] left-[1.6rem] xl:w-full xl:left-0 xl:right-0 xl:h-[9.6rem] xl:px-[6.4rem] bg-backgroundDef z-30 border-b-1 border-[#27272A]">
            {children}
        </header>
    )
}

function NavBarContainer({ children }: Props) {
    return (
        <nav className="w-full h-full flex justify-between items-center">
            {children}
        </nav>
    )
}
function MenuContainer({ children }: Props) {
    return (
        <menu className="hidden xl:block xl:max-w-[50.1rem] xl:max-h-[3.2rem] xl:gap-[4.8rem]">
            {children}
        </menu>
    )
}
function OlContainer({ children }: Props) {
    return (
        <ol className="w-full h-full flex xl:gap-[4.8rem]">
            {children}
        </ol>
    )
}
function LiContainer({ children }: Props) {
    return (
        <li>
            {children}
        </li>
    )
}
function ButtonContainer({ children }: Props) {
    return (
        <div className="max-w-[13.2rem] max-h-[4.8rem]">
            {children}
        </div>
    )
}

export {
    TopBarContainer,
    NavBarContainer,
    MenuContainer,
    ButtonContainer,
    OlContainer,
    LiContainer
}