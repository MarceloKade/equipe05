import Image from "next/image"

import BGImage from "@/assets/BGImage.png"
import starLeft from "@/assets/starsLeft.svg"
import starRight from "@/assets/starsRight.svg"
import discord from "@/assets/discord.svg"

function bgImage() {
    return (
        <Image
            src={BGImage}
            alt="Fotos colaboradores"
            fill
            quality={100}
            className="object-contain object-right"
            priority
        />
    )
}

function Circle1() {
    return (
        <div className="bg-[#F8A9A9] border-[1px] border-[#FDF3F3] filter blur-[100px] xl:blur-[120px] w-[6.0rem] h-[6.0rem] xl:w-[12.0rem] xl:h-[12.0rem] rounded-full"></div>
    )
}

function Circle2() {
    return (
        <div className="bg-[#E53939] bg-gradient-to-bl from-[#FFF]/40 to-[#FFF]/10 filter blur-[100px] xl:blur-[120px] self-end w-[6.0rem] h-[6.0rem] xl:w-[12.0rem] xl:h-[12.0rem] right-0 rounded-full"></div>
    )
}

function Circle3() {
    return (
        <div className="bg-[#E53939] bg-gradient-to-bl from-[#FFF]/40 to-[#FFF]/10 filter blur-[100px] xl:blur-[120px] w-[6.0rem] h-[6.0rem] xl:w-[12.0rem] xl:h-[12.0rem] bottom-0 rounded-full"></div>
    )
}

function StarLeft() {
    return (
        <Image
            src={starLeft}
            alt="Estrelas lado esquerdo"
            quality={100}
            priority
        />

    )
}

function StarRight() {
    return (
        <Image
            src={starRight}
            alt="Estrelas lado direito"
            quality={100}
            priority
        />

    )
}

function LogoDiscord() {
    return (
        <Image
            src={discord}
            alt="Logo Discord"
            quality={100}
            priority
        />

    )
}

function Title() {
    return (
        <h2 className="text-[2.0rem] lg:text-[4.0rem] font-medium text-center text-[#F6F6F7] leading-[2.4rem] lg:leading-[4.8rem]">Faça parte da nossa comunidade!</h2>

    )
}

function Description() {
    return (
        <p className="w-[30.0rem] text-[1.4rem] leading-[2.4rem] lg:text-[1.6rem] lg:leading-[2.4rem] text-center text-[#F3F4F6]">Junte-se a uma comunidade formada por mais de 300 pessoas apaixonadas por tecnologia e contribua para o seu desenvolvimento pessoal e profissional!</p>

    )
}

function Button() {
    return (
        <div className="inline-block bg-gradient-to-tl from-white/10 to-white/40 bg-[#E53939] p-[1px] rounded-[3.6rem]">
            <button className="bg-[#E53939] text-[#FFFFFF] hover:bg-white hover:text-black transition-colors duration-300 w-full h-full px-[2.5rem] py-[1.5rem] rounded-[3.6rem]">
                <p className="text-[1.6rem] leading-[1.6rem]">Junte-se ao Discord</p>
            </button>
        </div>

    )
}

export {
    bgImage,
    Circle1,
    Circle2,
    Circle3,
    StarLeft,
    StarRight,
    LogoDiscord,
    Title,
    Description,
    Button
}