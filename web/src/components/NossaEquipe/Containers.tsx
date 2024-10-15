import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ContainerText({ children }: Props) {
  return <section className="containerTextEquipe">{children}</section>;
}

function ContainerCards({ children }: Props) {
  return (
    <section className="containerCard flex justify-center flex-wrap mt-[4rem] gap-x-[1.6rem]">
      {children}
    </section>
  );
}

export { ContainerText, ContainerCards };
