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

interface ModalFormProps {
  handleModalFormClose: () => void;
}

export default function ModalForm({ handleModalFormClose }: ModalFormProps) {
  const [phone, setPhone] = useState("");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-40">
      <div className="fixed inset-0 flex items-center justify-center min-h-screen px-10 py-10 z-50">
        <div className="w-full flex flex-col xl:w-[68.2rem] items-center gap-[2.5rem] text-white py-[2.1rem] px-[2.6rem] xl:py-[4.1rem] xl:px-[4.6rem] rounded-[2.4rem] bg-[#111114]">
          <div className="w-full h-[3.6rem] flex justify-end">
            <button
              className="rounded-full bg-[#171717] flex justify-center items-center px-[1.0rem]"
              onClick={handleModalFormClose}
            >
              <XMarkIcon className="h-[1.6rem] w-[1.6rem]" />
            </button>
          </div>
          <div>
            <LogoCoders className="w-[4.8rem] h-[3.2rem]" />
          </div>
          <div>
            <h2 className="w-full text-center h-auto text-[2.4rem] leading-[3.6rem] tracking-tighter font-manrope font-bold bg-gradient-to-r from-[#A6A6A6] via-[#FFFFFF] to-[#A3A3A3] text-transparent bg-clip-text break-words">
              Ingressar na comunidade
            </h2>
            <p className="text-[1.6rem] leading-[2.4rem] mt-[3.2rem] text-center text-[#A1A1AA] mx-auto">
              Preencha o formulário com suas informações
            </p>
          </div>
          <form className="w-full flex flex-col gap-[2.5rem]">
            <div className="flex flex-col gap-[1.5rem] xl:gap-[2.5rem]">
              <div className="flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem]">
                <div className="flex flex-col w-full">
                  <label className="text-[1.6rem]" htmlFor="nome">
                    Nome*
                  </label>
                  <input
                    type="text"
                    id="nome"
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
                    className="w-full rounded-[0.8rem] mt-[0.4rem] xl:mt-[1.2rem] p-[1.0rem] xl:p-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252] outline-none bg-transparent text-[1.6rem]"
                    placeholder="Digite seu sobrenome"
                  />
                </div>
              </div>
              <div className="flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem]">
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

                <div className="flex flex-col w-full">
                  <label className="text-[1.6rem]" htmlFor="email">
                    Email*
                  </label>
                  <div className="w-full flex rounded-[0.8rem] pl-[1.4rem] mt-[0.4rem] xl:mt-[1.2rem] gap-[1.0rem] border-[0.1rem] border-[#525252]">
                    <EnvelopeIcon className="w-[1.6rem] text-[#A3A3A3]" />
                    <input
                      type="email"
                      id="email"
                      className="w-full py-[1.0rem] xl:py-[1.2rem] outline-none bg-transparent text-[1.6rem] rounded-se-[0.8rem] rounded-ee-[0.8rem]"
                      placeholder="Digite seu email"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem]">
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="area-de-interesse"
                    className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
                  >
                    Área de interesse*
                  </label>
                  <div className="relative">
                    <select
                      id="area-de-interesse"
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
                      <option
                        value="Frontend"
                        className="bg-[#111114] text-white"
                      >
                        Frontend
                      </option>
                      <option
                        value="Backend"
                        className="bg-[#111114] text-white"
                      >
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
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="linguagem"
                    className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
                  >
                    Linguagem
                  </label>
                  <div className="relative">
                    <select
                      id="linguagem"
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
                      <option
                        value="JavaScript"
                        className="bg-[#111114] text-white"
                      >
                        JavaScript
                      </option>
                      <option value="Java" className="bg-[#111114] text-white">
                        Java
                      </option>
                      <option
                        value="Python"
                        className="bg-[#111114] text-white"
                      >
                        Python
                      </option>
                      <option
                        value="CSharp"
                        className="bg-[#111114] text-white"
                      >
                        CSharp
                      </option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <ChevronDownIcon className="w-[1.2rem]" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-col flex gap-[1.5rem] xl:flex-row xl:gap-[3.2rem]">
                <div className="flex flex-col w-full relative">
                  <label
                    htmlFor="data"
                    className="mb-[0.4rem] xl:mb-[1.2rem] text-[1.6rem]"
                  >
                    Disponibilidade*
                  </label>
                  <input
                    type="date"
                    id="data"
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
            </div>
            <div className="flex w-full">
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
                <span className="text-white font-bold">Termos e Condições</span>{" "}
                e com a{" "}
                <span className="text-white font-bold">
                  Política de Privacidade
                </span>{" "}
                da Código certo coders.
              </label>
            </div>
            <div className="flex w-full justify-end font-bold gap-[0.8rem] text-[1.4rem]">
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
          </form>
        </div>
      </div>
    </div>
  );
}
