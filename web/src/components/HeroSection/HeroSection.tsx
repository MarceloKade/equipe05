"use client";
import { useToggle } from "@/hooks/useToggle";
import * as C from "./Containers";
import * as E from "./Elements";
import ModalForm from "../modal/ModalForm";

export default function HeroSection() {
  const { isModalFormOpen, handleModalFormClose, handleModalFormOpen } =
    useToggle();

  return (
    <C.ContainerHeroSection>
      <C.ContainerText>
        <E.titulo />
        <E.descricao />
        <C.ContainerButtons>
          <E.buttonParticipe handleModalFormOpen={handleModalFormOpen} />
          <E.buttonSaibaMais />
        </C.ContainerButtons>
        <E.comunidade />
      </C.ContainerText>
      <C.ContainerImage>
        <E.mapaMundi />
      </C.ContainerImage>
      {isModalFormOpen && (
        <ModalForm handleModalFormClose={handleModalFormClose} />
      )}
    </C.ContainerHeroSection>
  );
}
