import { FormEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};

function Container({ children }: Props) {
  return (
    <div
      id="Contato"
      className="w-full text-white px-[2.0rem] py-[4.8rem] xl:p-[8rem] flex flex-col items-center border-t-1 border-[#27272A] mt-[6.4rem]"
    >
      {children}
    </div>
  );
}

function SocialForm({ children }: Props) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center m-auto w-full gap-[12.8rem]">
      {children}
    </div>
  );
}

function SocialMedia({ children }: Props) {
  return <div className="flex flex-col gap-[26px] w-full">{children}</div>;
}

function Contacts({ children }: Props) {
  return (
    <div className="hidden gap-[6rem] lg:flex gap justify-between">
      {children}
    </div>
  );
}

function Contact({ children }: Props) {
  return <div className="flex flex-col gap-[1.6rem]">{children}</div>;
}

function IconName({ children }: Props) {
  return (
    <div className="flex text-nowrap items-center gap-[1.2rem]">{children}</div>
  );
}

function Social({ children }: Props) {
  return <div className="flex flex-col w-full gap-[1.6rem]">{children}</div>;
}

function SocialDetails({ children }: Props) {
  return (
    <div className="flex justify-start gap-[1.2rem] lg:justify-between lg:gap-0 mt-[2.4rem]">
      {children}
    </div>
  );
}

function SocialAddress({ children }: Props) {
  return (
    <div className="flex items-center justify-center gap-[1.2rem]">
      {children}
    </div>
  );
}

function FormContainer({ children }: Props) {
  return (
    <div className="flex flex-col gap-[2.4rem] items-center w-full">
      {children}
    </div>
  );
}

function Form({ children, onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-end gap-[3.8rem] w-full"
    >
      {children}
    </form>
  );
}

function InputsContainer({ children }: Props) {
  return (
    <div className="flex flex-col w-full lg:flex-row gap-[3.8rem]">
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden lg:flex mt-[8rem] lg:w-[1384px] h-[1px] bg-[#27272A]" />
  );
}

function DividerMobile() {
  return (
    <div className="flex w-full lg:hidden mt-[8rem] h-[1px] bg-[#27272A]" />
  );
}

function Copyright({ children }: Props) {
  return (
    <div className="flex items-start w-full flex-col-reverse  lg:flex-row lg:justify-between mt-[3.2rem]">
      {children}
    </div>
  );
}

function Terms({ children }: Props) {
  return (
    <div className="flex gap-[1.6rem] flex-col lg:flex-row my-[3.2rem] lg:my-0 lg:ml-[732px]">
      {children}
    </div>
  );
}

export {
  Container,
  SocialForm,
  SocialMedia,
  Contacts,
  Contact,
  IconName,
  Social,
  SocialDetails,
  SocialAddress,
  FormContainer,
  Form,
  InputsContainer,
  Divider,
  DividerMobile,
  Copyright,
  Terms,
};
