import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ContainerText({ children }: Props) {
  return (
    <section className="containerTextEquipe">
      {children}
    </section>
  );
}

function ContainerCards({ children }: Props) {
  return (
    <section className="containerCard flex justify-center flex-wrap gap-x-2.5">
      {children}
    </section>
  );
}

export { ContainerText, ContainerCards };