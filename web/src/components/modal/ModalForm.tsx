"use client";
import { LogoCoders } from "@/assets/TopBar/svg";
import {
  CalendarDaysIcon,
  CheckIcon,
  XMarkIcon,
  ChevronDownIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import ModalSuccess from "./ModalSucess"; // Importar seu modal de sucesso
import ModalError from "./ModalError"; // Importar seu modal de erro
import axios from "axios";

interface ModalFormProps {
  handleModalFormClose: () => void;
}

export default function ModalForm({ handleModalFormClose }: ModalFormProps) {
  const [phone, setPhone] = useState("");
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [validationError, setValidationError] = useState(""); 


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     // Montando os dados de envio no formato esperado
    // Usando uma asserção de tipo para especificar que o elemento é um HTMLInputElement
  const nomeElement = document.getElementById("nome") as HTMLInputElement;
  const sobrenomeElement = document.getElementById("sobrenome") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const disponibilidadeElement = document.getElementById("disponibilidade") as HTMLInputElement;

   // Obtendo os elementos dos menus dropdown
   const areaInteresseElement = document.getElementById("areaDeInteresse") as HTMLSelectElement;
   const turnoElement = document.getElementById("turno") as HTMLSelectElement;
   const linguagemElement = document.getElementById("linguagem") as HTMLSelectElement;

   // Validação de campos vazios
   if (
    !nomeElement.value ||
    !sobrenomeElement.value ||
    !emailElement.value ||
    !disponibilidadeElement.value ||
    areaInteresseElement.value === "" ||
    turnoElement.value === "" ||
    linguagemElement.value === ""
  ) {
    console.error("Um ou mais campos estão vazios.");
    
    setValidationError("Por favor, preencha todos os campos obrigatórios.");
    return; // Interrompe a execução se algum campo estiver vazio
  }
  
    const formData = {
      nome: nomeElement.value,
      sobrenome: sobrenomeElement.value,
      email: emailElement.value,
      whatsapp: phone,
      disponibilidade: new Date(disponibilidadeElement.value).toISOString(),
      area_de_interesse: {
        nome: areaInteresseElement.value, // Obtendo o valor do dropdown de área de interesse
        selecionada: areaInteresseElement.value !== "" // Você pode definir uma lógica para saber se foi selecionada
      },
      turno: {
        nome: turnoElement.value, // Obtendo o valor do dropdown de turno
        selecionado: turnoElement.value !== "" // Lógica semelhante
      },
      linguagem: {
        nome: linguagemElement.value, // Obtendo o valor do dropdown de linguagem
        selecionada: linguagemElement.value !== "" // Lógica semelhante
      }
    };

      try {
        const response = await axios.post(
          "https://automatic-invention-rvpxqg4567gh4x5-8000.app.github.dev/usuarios/",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        // Fecha o modal do formulário antes de abrir o de sucesso ou erro
        handleModalFormClose();
    
        if (response.status === 200 || response.status === 201) {
          setSuccessModalOpen(true); // Abre o modal de sucesso
        } else {
          setErrorModalOpen(true); // Abre o modal de erro
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // O erro é uma instância de AxiosError
          console.error("Erro ao enviar dados:", error.response?.data || error.message);
        } else {
          // Outro tipo de erro
          console.error("Erro desconhecido:", error);
        }
        
        handleModalFormClose(); // Fecha o modal em caso de erro
        setErrorModalOpen(true);
      }
    
    };
  
  return (
    <>
     {isSuccessModalOpen && <ModalSuccess onClose={() => setSuccessModalOpen(false)} />}
     {isErrorModalOpen && <ModalError onClose={() => setErrorModalOpen(false)} />}
    <div
      className="fixed inset-0 flex justify-center bg-black bg-opacity-90 z-30 px-[1.6rem] xl:p-0 py-[2rem]"
      onClick={handleModalFormClose}
    >
      <form
        className="w-full flex flex-col xl:w-[68.2rem] text-white py-[2.1rem] px-[2.6rem] xl:py-[4.1rem] xl:px-[4.6rem] xl:justify-between rounded-[2.4rem] bg-[#111114] z-50 overflow-y-auto hide-scrollbar"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="w-full h-[3.6rem] flex justify-end">
          <button
            className="rounded-full bg-[#171717] flex justify-center items-center p-[1.0rem]"
            onClick={handleModalFormClose}
          >
            <XMarkIcon className="h-[1.6rem] w-[1.6rem]" />
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          <LogoCoders className="w-[4.8rem] h-[3.2rem]" />
        </div>
        <div className="w-full">
          <h2 className="text-center h-auto text-[2.4rem] leading-[3.6rem] tracking-tighter font-manrope font-bold gradient-text break-words">
            Ingressar na comunidade
          </h2>
          <p className="text-[1.6rem] leading-[2.4rem] mt-[3.2rem] text-center text-[#A1A1AA] mx-auto">
            Preencha o formulário com suas informações
          </p>
        </div>
        <div className="w-full flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem] mt-[1.5rem]">
          <div className="flex flex-col w-full">
            <label className="text-[1.6rem]" htmlFor="nome">
              Nome*
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="w-full rounded-[0.8rem] mt-[0.4rem] xl:mt-[1.2rem] p-[1.0rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-[1.6rem]"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-[1.6rem]" htmlFor="sobrenome">
              Sobrenome*
            </label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              className="w-full rounded-[0.8rem] mt-[0.4rem] xl:mt-[1.2rem] p-[1.0rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-[1.6rem]"
              placeholder="Digite seu sobrenome"
            />
          </div>
        </div>
        <div className="w-full flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem] mt-[1.5rem]">
          <div className="flex flex-col w-full">
            <label className="text-[1.6rem]" htmlFor="whatsapp">
              Whatsapp*
            </label>
            <div className="flex w-full h-full mt-[0.4rem] xl:mt-[1.2rem]">
              <PhoneInput
                country={"br"}
                value={phone}
                onChange={setPhone}
                inputProps={{
                  name: "whatsapp",
                  required: true,
                  autoFocus: false,
                }}
                inputStyle={{
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "#525252",
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.8rem",
                  paddingBlock: "1.2rem",
                  fontSize: "1.6rem",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  color: "white",
                }}
                dropdownStyle={{
                  backgroundColor: "#333",
                  color: "white",
                }}
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label className="text-[1.6rem]" htmlFor="email">
              Email*
            </label>
            <div className="w-full flex rounded-[0.8rem] pl-[1.4rem] mt-[0.4rem] xl:mt-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252]">
              <EnvelopeIcon className="w-[1.6rem] text-[#A3A3A3]" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-[1.0rem] xl:py-[1.2rem] outline-none bg-transparent text-[1.6rem] rounded-se-[0.8rem] rounded-ee-[0.8rem]"
                placeholder="Digite seu email"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem] mt-[1.5rem]">
          <div className="flex flex-col w-full">
            <label
              htmlFor="area-de-interesse"
              className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
            >
              Área de interesse*
            </label>
            <div className="relative">
              <select
                id="areaDeInteresse"
                name="area-de-interesse"
                defaultValue=""
                className="w-full rounded-[0.8rem] p-[1.0rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white cursor-pointer appearance-none text-[1.6rem]"
              >
                <option
                  value=""
                  hidden
                  disabled
                  className="bg-[#111114] text-white"
                >
                  Selecione uma opção
                </option>
                <option value="Frontend" className="bg-[#111114] text-white">
                  Frontend
                </option>
                <option value="Backend" className="bg-[#111114] text-white">
                  Backend
                </option>
                <option value="QA" className="bg-[#111114] text-white">
                  QA
                </option>
                <option
                  value="Banco-de-dados"
                  className="bg-[#111114] text-white"
                >
                  Banco de dados
                </option>
                <option value="Ux-UI" className="bg-[#111114] text-white">
                  Ux/UI
                </option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <ChevronDownIcon className="w-[1.2rem]" />
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="linguagem"
              className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
            >
              Linguagem
            </label>
            <div className="relative">
              <select
                id="linguagem"
                name="linguagem"
                defaultValue=""
                className="w-full rounded-[0.8rem] p-[1.0rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white cursor-pointer appearance-none text-[1.6rem]"
              >
                <option
                  value=""
                  hidden
                  disabled
                  className="bg-[#111114] text-white"
                >
                  Selecione uma opção
                </option>
                <option value="JavaScript" className="bg-[#111114] text-white">
                  JavaScript
                </option>
                <option value="Java" className="bg-[#111114] text-white">
                  Java
                </option>
                <option value="Python" className="bg-[#111114] text-white">
                  Python
                </option>
                <option value="CSharp" className="bg-[#111114] text-white">
                  CSharp
                </option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <ChevronDownIcon className="w-[1.2rem]" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem] mt-[1.5rem]">
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="data"
              className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
            >
              Disponibilidade*
            </label>
            <input
              type="date"
              id="disponibilidade"
              name="disponibilidade"
              className="w-full
                                    rounded-[0.8rem]
                                    p-[1.0rem]
                                    xl:p-[1.2rem]
                                    gap-[1.0rem]
                                    border-[0.1rem]
                                    border-[#525252]
                                    outline-none
                                    bg-transparent
                                    text-[#A3A3A3]
                                    pl-[2.8rem]
                                    xl:pl-[2.8rem]
                                    text-[1.6rem]
                                    "
            />
            <CalendarDaysIcon className="absolute left-[1.2rem] top-[60%] xl:top-[65%] w-5 h-5 text-[#A3A3A3] cursor-pointer" />
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="turno"
              className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
            >
              Turno
            </label>
            <div className="relative">
              <select
                id="turno"
                name="turno"
                defaultValue=""
                className="w-full rounded-[0.8rem] p-[1.0rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-white cursor-pointer appearance-none text-[1.6rem]"
              >
                <option value="" hidden disabled className="bg-[#111114]">
                  Selecione uma opção
                </option>
                <option value="Manhã" className="bg-[#111114]">
                  Manhã
                </option>
                <option value="Tarde" className="bg-[#111114]">
                  Tarde
                </option>
                <option value="Noite" className="bg-[#111114]">
                  Noite
                </option>
              </select>
              <span className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                <ChevronDownIcon className="w-[1.2rem]" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-[1.5rem]">
          <div className="mr-[1.48rem] w-[1.583rem] h-[1.583rem] relative">
            <input
              type="checkbox"
              id="aceitar-termos"
              className="
                                w-[1.583rem]
                                h-[1.583rem]
                                appearance-none
                                bg-transparent
                                border-[0.15rem]
                                border-[#404040]
                                rounded-lg
                                focus:outline-none
                                hover:border-[#E53939]
                                checked:border-[#E53939]
                                checked:bg-[#E53939]
                                cursor-pointer
                                peer
                                transition-all
                                duration-200
                                "
            />
            <span className="absolute inset-0 hidden peer-checked:flex items-center justify-center pointer-events-none">
              <CheckIcon className="w-3 h-3 stroke-[3px] text-white" />
            </span>
          </div>
          <label
            htmlFor="aceitar-termos"
            className="w-[55.8rem] text-[1.4rem] leading-[2.1rem] font-manrope text-[#A3A3A3]"
          >
            Declaro que li e concordo com os{" "}
            <span className="text-white font-bold">Termos e Condições</span> e
            com a{" "}
            <span className="text-white font-bold">
              Política de Privacidade
            </span>{" "}
            da Código certo coders.
          </label>
        </div>
        <div className="w-full flex justify-end font-bold gap-[0.8rem] text-[1.4rem] mt-[1.5rem]">
          <button
            className="flex px-[3.2rem] py-[0.4rem] rounded-[0.8rem] text-[#A3A3A3] border border-[#A3A3A3]"
            type="submit"
            onClick={handleModalFormClose}
          >
            <p className="flex items-center justify-center h-[3.2rem]">
              Fechar
            </p>
          </button>
          <button
            className="flex px-[3.2rem] py-[0.4rem] rounded-[0.8rem] text-black bg-[#FFFFFF] border border-[#FFFFFF]"
            type="submit"
          >
            <p className="flex items-center justify-center h-[3.2rem]">
              Enviar
            </p>
          </button>
        
        </div>
        <p>
           {/* Mensagem de erro de validação */}
      {validationError && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          {validationError}
        </div>
      )}
      </p>
      </form>
   
       {/* Modal de Sucesso */}
       {isSuccessModalOpen && (
        <ModalSuccess 
          onClose={() => {
            setSuccessModalOpen(false);
            handleModalFormClose(); // Fecha o modal do formulário
          }}
        />
      )}

      {/* Modal de Erro */}
      {isErrorModalOpen && (
        <ModalError 
          onClose={() => {
            setErrorModalOpen(false);
            handleModalFormClose(); // Fecha o modal do formulário
          }}
        />
      )}
    </div>
    </>
  );
}
function setModalFormOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}

