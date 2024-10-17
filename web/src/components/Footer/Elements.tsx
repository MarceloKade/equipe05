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
      name="name"
      className="w-full lg:w-[213px] h-[48px] border border-[#27272A] rounded-[8px] p-[12px_24px] gap-[8px] bg-transparent text-[16px] font-normal leading-[24px] text-[#A3A3A3]"
      type="text"
      placeholder="Insira seu nome"
    />
  );
}

function InputEmail() {
  return (
    <input
      name="email"
      className="w-full lg:w-[271px] h-[48px] border border-[#27272A] rounded-[8px] p-[12px_24px] gap-[8px] bg-transparent text-[16px] font-normal leading-[24px] text-[#A3A3A3]"
      type="text"
      placeholder="Insira seu email"
    />
  );
}

function InputMessage() {
  return (
    <input
      name="message"
      className="w-full lg:w-[500px] h-[48px] border border-[#27272A] rounded-[8px] p-[12px_24px] gap-[8px] bg-transparent text-[16px] font-normal leading-[24px] text-[#A3A3A3]"
      type="text"
      placeholder="Mensagem"
    />
  );
}

function Button({ children }: Props) {
  return (
    <button className="w-full lg:w-[97px] h-[48px] bg-white hover:bg-primitive-500 hover:text-white transition-colors duration-300 rounded-[0.8rem] lg:ml-[403px] font-manrope text-[1.6rem] font-bold leading-[150%] text-[#09090B] cursor-pointer">
      {children}
    </button>
  );
}

function CopyrightText({ children }: Props) {
  return (
    <span className="font-roboto text-sm font-normal leading-5 text-[#A3A3A3]">
      {children}
    </span>
  );
}

function Link({ children }: Props) {
  return (
    <a className="font-roboto text-sm font-normal leading-5 text-[#A3A3A3]">
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
