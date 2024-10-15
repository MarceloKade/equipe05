import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ContainerBeneficios({ children }: Props) {
  return (
    <section
      id="Beneficios"
      className="beneficios flex flex-col items-center justify-center xl:py-[112px] xl:px-[192px] gap-8 md:gap-20"
    >
      {children}
    </section>
  );
}
function ContainerText({ children }: Props) {
  return (
    <div className="w-full flex flex-col items-center text-center m-auto md:w-[600px] lg:w-[768px] gap-6">
      {children}
    </div>
  );
}
function ContainerGrid({ children }: Props) {
  return <div className="flex flex-col lg:flex-row gap-8">{children}</div>;
}
function ContainerGridColumn({ children }: Props) {
  return <div className="flex flex-col gap-8">{children}</div>;
}

export {
  ContainerBeneficios,
  ContainerText,
  ContainerGrid,
  ContainerGridColumn,
};
