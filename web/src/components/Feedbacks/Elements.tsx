import Image from "next/image";
import tagImage from "@/assets/Tag.png"
import imgCard1 from "@/assets/imgCard1.png"
import imgCard2 from "@/assets/imgCard2.png"
import imgCard3 from "@/assets/imgCard3.png"
import imgCard4 from "@/assets/imgCard4.png"
import imgCard5 from "@/assets/imgCard5.png"
import imgCard6 from "@/assets/imgCard6.png"
import imgCard7 from "@/assets/imgCard7.png"

function comunidadeFeedbacks() {
  return (
    <div className="comunidadeFeedbacks flex flex-row items-center text-white h-[4.8rem] px-[1.6rem] py-[0.8rem] relative bg-[#ffffff0d] rounded-[3.2rem] w-[19.2rem] ">
      <Image
        src={tagImage}
        alt="Fotos colaboradores"
        priority
        className="w-[10.4rem]"
      />
      <p className=" flex-row h-[27px] w-[5.2rem] px-[0.8rem] py-[0.4rem] bg-gradient-to-r from-[#ff4545] to-[#ee5151] rounded-[2.4rem] justify-center items-center gap-[1.0rem] inline-flex text-white text-[1.4rem] font-normal font-manrope">+ 300</p>
    </div>
  )
}

function ImgCard1() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard1}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function ImgCard2() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard2}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function ImgCard3() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard3}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function ImgCard4() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard4}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function ImgCard5() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard5}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function ImgCard6() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard6}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function ImgCard7() {
  return (
    <div className="w-[4.8rem] h-[4.8rem] rounded-full overflow-hidden">
      <Image
        src={imgCard7}
        alt="Fotos colaboradores"
        priority
        className="w-full h-full object-contain"
      />
    </div>
  )
}

function titulo() {
  return (
    <h2 className="text-center font-bold leading-[3.6rem] lg:w-[88.4rem] lg:leading-[5.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#A6A6A6] via-[#FFF] to-[#A3A3A3] text-[3.6rem] lg:text-[4.8rem]">
      Venha fazer parte dessa comunidade que não para de crescer!
    </h2>
  );
}

function Stack1() {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <p className="text-[1.6rem] leading-[2.4rem] font-bold">
        Black, Marvin
      </p>

      <p className="text-[1.6rem] leading-[2.0rem] font-medium text-[#6C7275]">
        @dani_dev
      </p>
    </div>
  );
}

function buttonQueroMeInscrever() {

  return (
    <button className="btn-participe xl:text-[1.8rem] xl:font-semibold xl:leading-[3.2rem]">Quero me inscrever</button>
  )
}

export {
  comunidadeFeedbacks,
  ImgCard1,
  ImgCard2,
  ImgCard3,
  ImgCard4,
  ImgCard5,
  ImgCard6,
  ImgCard7,
  titulo,
  Stack1,
  buttonQueroMeInscrever
}