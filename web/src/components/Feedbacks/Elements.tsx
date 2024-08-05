import Image from "next/image";
import tagImage from "@/assets/Tag.png"

function comunidadeFeedbacks() {
  return (
    <div className="comunidadeFeedbacks flex flex-row items-center text-white h-12 px-4 py-2relative bg-[#ffffff0d] rounded-[32px] w-[192px] ">
      <Image
        src={tagImage}
        alt="Fotos colaboradores"
        width={104}
        height={32}
        className="w-[104px]"
      />
      <p className=" flex-row h-[27px] w-[52px] px-2 py-1 bg-gradient-to-r from-[#ff4545] to-[#ee5151] rounded-3xl justify-center items-center gap-2.5 inline-flex text-white text-sm font-normal font-['Manrope']">+ 300</p>
    </div>
  )
}
function titulo() {
  return (
    <h2 className="font-bold leading-9 md-leading-[57.6px] bg-clip-text text-transparent bg-gradient-to-r from-[#A6A6A6] via-[#FFF] to-[#A3A3A3] text-[32px] lg:text-5xl">
      Venha fazer parte dessa comunidade que não para de crescer!
    </h2>
  );
}

function buttonQueroMeInscrever() {
  
  return (
    <button className="btn-participe xl:text-[18px] xl:font-semibold xl:leading-[32px]">Quero me inscrever</button>
  )
}

export {
  comunidadeFeedbacks,
  titulo,
  buttonQueroMeInscrever
}