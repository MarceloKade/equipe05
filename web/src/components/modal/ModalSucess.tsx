import { LogoCoders } from "@/assets/TopBar/svg";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image"
import formImage from "@/assets/sucessForm.svg"

export default function ModalSucess() {
    return (
        <div className="flex items-center justify-center min-h-screen px-10 py-10">
            <div className="xl:w-[68.2rem] xl:h-[86rem] flex flex-col items-center justify-between mx-auto xl:py-[4.1rem] xl:px-[4.8rem] rounded-3xl bg-[#111114]">
                <div className="w-full flex flex-col items-center gap-[3.2rem] text-white pb-[3.9rem]">
                    <div className="w-full h-[3.6rem] flex justify-end">
                        <button
                            className="rounded-full bg-[#171717] flex justify-center items-center px-[1.0rem]"
                        >
                            <XMarkIcon className="h-[1.6rem] w-[1.6rem]" />
                        </button>
                    </div>
                    <div className="w-[46rem] flex flex-col gap-[6.4rem] justify-center items-center">
                        <div className="flex flex-col items-center">
                            <LogoCoders className="xl:w-[4.8rem] xl:h-[3.2rem] my-[2.5rem]" />
                            <h2 className="w-full text-center h-auto text-[2.4rem] leading-[3.6rem] tracking-tighter font-manrope font-bold bg-gradient-to-r from-[#A6A6A6] via-[#FFFFFF] to-[#A3A3A3] text-transparent bg-clip-text break-words">Agradeçemos seu interesse!</h2>
                        </div>
                        <div className="w-full flex flex-col items-center gap-[6.4rem]">
                            <Image
                                src={formImage}
                                alt="Fotos colaboradores"
                                priority
                                className="w-[23.5rem] h-[22.437]"
                            />
                            <div className="flex flex-col gap-[1.6rem]">
                                <div className="w-full flex gap-[1.2rem] items-center justify-center">
                                    <div className="p-[0.5rem] bg-[#22C55E] rounded-full">
                                        <CheckIcon className="w-[1.7rem] h-[1.7rem]" />
                                    </div>
                                    <p className="text-[2.4rem] text-[#FFFFFF] font-bold">Enviado com Sucesso!</p>
                                </div>
                                <p className="text-[1.5rem] text-center text-[#A3A3A3] font-medium">Agradecemos sua submissão. Em breve entraremos em contato.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="w-full">
                    <div className="flex w-full justify-end font-bold gap-[0.8rem] text-[1.4rem]">
                        <button className="flex px-[3.2rem] py-[0.4rem] rounded-[0.8rem] text-[#F27777] border border-[#F27777]" type="submit">
                            <p className="flex items-center justify-center h-[3.2rem]">Cancelar envio</p>
                        </button>
                        <button
                            className="flex px-[3.2rem] py-[0.4rem] rounded-[0.8rem] text-[#A3A3A3] border border-[#A3A3A3]"
                            type="submit"
                        >
                            <p className="flex items-center justify-center h-[3.2rem]">Fechar</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}