"use client";
import axios from "axios";
import React, { useState } from "react";

const Newsletter = () => {
  // Estado para mensagem de sucesso e erro
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
    };

    try {
      const response = await axios.post(
        "https://automatic-invention-rvpxqg4567gh4x5-8000.app.github.dev/newsletter/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Verifica se a resposta é 200 ou 201 (usuário criado)
      if (response.status === 200 || response.status === 201) {
        setMessage("Email cadastrado com sucesso!"); // Exibe mensagem de sucesso
        setErrorMessage(null);
      } else {
        setErrorMessage("Erro ao cadastrar o email. Tente novamente."); // Exibe mensagem de erro
        setMessage(null);
      }
    } catch (error) {
      setErrorMessage("Erro na requisição. Verifique sua conexão."); // Exibe erro de requisição
      setMessage(null);
    }
  };

  return (
    <section className="flex justify-center w-full">
      <div className="px-[3.2rem] md:py-[11.2rem] md:px-[6.4rem]">
        <div className="flex flex-col items-center gap-[2.4rem]">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-5xl md:text-[4.8rem] w-auto md:w-76.8rem md:h-5.8rem gradient-text">
              Inscreva-se em nossa Newsletter
            </h2>
            <p className="text-[1.6rem] pt-[1.6rem] md:pt-[2.4rem] text-gray-400">
              Inscreva-se em nossa newsletter para receber as noticias mais recentes
            </p>
          </div>
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-[55.3rem] flex flex-col items-center justify-center pt-[1.6rem] gap-[1.6rem]"
          >
            <div className="w-full flex flex-col xl:flex-row justify-between gap-[1.6rem]">
              <input
                name="email"
                type="email"
                placeholder="Insira seu email"
                className="w-full px-[2.4rem] py-[1.2rem] rounded-[24px] text-[1.6rem] border focus:outline-none gradient-text"
              />
              <button
                type="submit"
                className="w-full md:w-[118px] h-[48px] bg-primitive-500 text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-[3rem] text-[1.6rem] px-[2.4rem] py-[1.2rem]"
              >
                Cadastrar
              </button>
            </div>
            <p className="text-neutral-100 text-[1.2rem] text-center mt-6">
              Ao clicar em cadastrar, você concorda com nossos{" "}
              <a href="#" className="text-[#9CA3AF] underline">
                Terms and Conditions
              </a>
              .
            </p>
          </form>
           {/* Exibe a mensagem de sucesso ou erro */}
           {message && <p className="text-green-500">{message}</p>}
           {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
