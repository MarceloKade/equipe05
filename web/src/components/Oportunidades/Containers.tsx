import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ContainerSection({ children }: Props) {
  return <section className="flex justify-center ">{children}</section>;
}

function Container({ children }: Props) {
  return (
    <div className="relative max-w-[151.2rem] xl:px-[22.0rem]">{children}</div>
  );
}
function ContainerTitle({ children }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center px-[1.778rem] xl:px-0 xl:gap-6 xl:pt-[2.35rem] xl:mb-[7.2rem]">
      {children}
    </div>
  );
}
function ContainerContent({ children }: Props) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-[3.0rem]">
      {children}
    </div>
  );
}

function ContainerOportunidades({ children }: Props) {
  return (
    <div className="relative border border-zinc-700 col-span-1 xl:row-span-2 p-[2.4rem] xl:px-[4.9rem] xl:py-[5.3rem] flex flex-col justify-end rounded-[2.4rem] overflow-hidden bg-gradient-to-b from-neutral-750/10 via-black/70 to-black">
      {children}
    </div>
  );
}

function ContainerTextOportunidades({ children }: Props) {
  return (
    <div className="w-full flex flex-col justify-start gap-[0.8rem] xl:gap-[1.6rem] mt-[122px] xl:mt-0 text-zinc-300">
      {children}
    </div>
  );
}

function ButtonVoluntariar({ children }: Props) {
  return (
    <button className="w-[23.6rem] rounded-full bg-white text-backgroundDef hover:bg-[#F27777] hover:text-[#FFFFFF] transition-colors duration-300 px-[2.4rem] py-[1.2rem] flex items-center justify-between">
      {children}
    </button>
  );
}

function ContainerHabilidades({ children }: Props) {
  return (
    <div className="h-full flex items-center border border-zinc-700 col-span-1 gap-10 px-[4.0rem] xl:px-[7.037rem] py-[4.55rem] xl:py-[5.052rem] rounded-[2.4rem] bg-secondary">
      {children}
    </div>
  );
}

function ContainerDesenvolver({ children }: Props) {
  return (
    <div className="h-full border border-zinc-700 col-span-1 px-[1.6rem] xl:px-[2.4rem] py-[2.4rem] flex flex-col rounded-[2.4rem] bg-secondary">
      {children}
    </div>
  );
}

function ContainerAprenda({ children }: Props) {
  return (
    <div className="relative h-full border border-zinc-700 col-span-1 xl:col-span-2 p-[2.4rem] xl:p-0 xl:pl-[4.0rem] xl:py-[5.3rem] flex justify-between items-center flex-col-reverse xl:flex-row rounded-[2.4rem]">
      {children}
    </div>
  );
}

function ContainerTextAprenda({ children }: Props) {
  return (
    <div className="flex flex-col mt-[6.4rem] xl:mt-0 gap-[2.0rem] xl:gap-[1.6rem] w-full xl:w-[50%]">
      {children}
    </div>
  );
}

function ButtonAprenda({ children }: Props) {
  return (
    <button className="relative w-[23.6rem] rounded-full bg-[#E53939] text-white hover:bg-white hover:text-[#09090B] transition-colors duration-300 px-[2.4rem] py-[1.2rem] flex items-center justify-between self-center xl:self-start">
      {children}
    </button>
  );
}

export {
  Container,
  ContainerSection,
  ContainerTitle,
  ContainerContent,
  ContainerOportunidades,
  ContainerTextOportunidades,
  ButtonVoluntariar,
  ContainerHabilidades,
  ContainerDesenvolver,
  ContainerAprenda,
  ContainerTextAprenda,
  ButtonAprenda,
};
