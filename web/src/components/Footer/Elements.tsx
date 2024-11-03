import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return (
    <span className="font-manrope text-white font-bold leading-[2.0rem] text-[1.6rem]">
      {children}
    </span>
  );
}

function Subtitle({ children }: Props) {
  return (
    <span className="text-[1.4rem] font-normal leading-[2.0rem] text-white">
      {children}
    </span>
  );
}

function SocialMediaTitle({ children }: Props) {
  return (
    <span className="text-[1.6rem] font-semibold leading-[2.4rem] text-white">
      {children}
    </span>
  );
}

function SocialMediaSubtitle({ children }: Props) {
  return (
    <span className="hidden lg:flex text-[1.4rem] font-normal leading-[2rem] text-white">
      {children}
    </span>
  );
}

function FormTitle({ children }: Props) {
  return (
    <span className="text-[2.4rem] font-bold leading-[3.6rem] text-white">
      {children}
    </span>
  );
}

function InputName() {
  return (
    <input
      name="nome"
      className="w-full h-[4.8rem] border border-[#27272A] rounded-[0.8rem] p-[1.2rem_2.4rem] gap-[0.8rem] bg-transparent text-[1.6rem] font-normal leading-[2.4rem] text-[#A3A3A3]"
      type="text"
      placeholder="Insira seu nome"
    />
  );
}

function InputEmail() {
  return (
    <input
      name="email"
      className="w-full h-[4.8rem] border border-[#27272A] rounded-[0.8rem] p-[1.2rem_2.4rem] gap-[0.8rem] bg-transparent text-[1.6rem] font-normal leading-[2.4rem] text-[#A3A3A3]"
      type="text"
      placeholder="Insira seu email"
    />
  );
}

function InputMessage() {
  return (
    <input
      name="mensagem"
      className="w-full h-[4.8rem] border border-[#27272A] rounded-[0.8rem] p-[1.2rem_2.4rem] gap-[0.8rem] bg-transparent text-[1.6rem] font-normal leading-[2.4rem] text-[#A3A3A3]"
      type="text"
      placeholder="Mensagem"
    />
  );
}

function Button({ children }: Props) {
  return (
    <button className="bg-white w-fit px-[2.4rem] py-[1.2rem] hover:bg-primitive-500 hover:text-white transition-colors duration-300 rounded-[0.8rem] font-manrope text-[1.6rem] font-bold leading-[150%] text-[#09090B] cursor-pointer">
      {children}
    </button>
  );
}

function CopyrightText({ children }: Props) {
  return (
    <span className="font-roboto text-nowrap text-[1.4rem] font-normal leading-[2rem] text-[#A3A3A3]">
      {children}
    </span>
  );
}

function Link({ children }: Props) {
  return (
    <a className="font-roboto text-nowrap text-[1.4rem] font-normal leading-[2rem] text-[#A3A3A3]">
      {children}
    </a>
  );
}

export {
  Title,
  Subtitle,
  SocialMediaTitle,
  SocialMediaSubtitle,
  FormTitle,
  InputName,
  InputEmail,
  InputMessage,
  Button,
  CopyrightText,
  Link,
};
