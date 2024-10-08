import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { LogoCoders } from "@/assets/TopBar/svg";

interface SideBarProps {
  onClose: () => void; // Definindo o tipo da propriedade onClose
}

export function SideBar({ onClose }: SideBarProps) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-20"
        onClick={onClose}
      ></div>
      <aside className="fixed right-0 top-0 w-[28.6rem] h-full p-8 bg-secondary border border-neutral-800 z-30">
        <div className="flex justify-between">
          <Link href="/" className="my-[1.0rem]">
            <LogoCoders className="w-[2.4rem] h-[1.8rem]" />
          </Link>
          <button
            className="bg-white bg-opacity-06 rounded-full px-[1.0rem] py-[1.0rem] hover:bg-white/20 active:bg-white/10"
            onClick={onClose}
          >
            <XMarkIcon className="h-[1.6rem] w-[1.6rem] my-auto text-white/50" />
          </button>
        </div>
        <nav className="w-full mt-[6.4rem]">
          <ul
            className="flex flex-col gap-[1.6rem] py-2 pl-4 leading-[2.0rem]"
            onClick={onClose}
          >
            <li>
              <Link href="#Sobre">Sobre</Link>
            </li>

            <li>
              <Link href="#Beneficios">Benefícios</Link>
            </li>

            <li>
              <Link href="#Oportunidades">Oportunidades</Link>
            </li>

            <li>
              <Link href="#Comunidade">Comunidade</Link>
            </li>
            <li>
              <Link href="#Contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
