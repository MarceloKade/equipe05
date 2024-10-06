import React from 'react';

const Newsletter = () => {
  return (
    <section className='flex justify-center w-full'>
    <div className="w-[151.2rem] px-[6.4rem] py-[11.2rem] md:py-[11.2rem] md:px-[6.4rem]">
      <div className='flex flex-col items-center gap-[2.4rem]'>
      <div className='text-center mb-6 md:mb-8'>
        <h2 className="text-5xl md:text-[4.8rem] w-auto md:w-76.8rem md:h-5.8rem gradient-text">
          Inscreva-se em nossa Newsletter
        </h2>
        <p className="text-[1.6rem] pt-[1.6rem] md:pt-[2.4rem] text-gray-400">
          Join our newsletter to stay up to date on features and releases.
        </p>
      </div>
      <form className="w-full max-w-[55.3rem] flex flex-col items-center justify-center pt-[1.6rem] gap-[1.6rem]">
        <div className='w-full flex justify-between gap-[1.6rem]'>

        <input
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
        Ao clicar em cadastrar, você concorda com nossos{' '}
        <a href="#" className="text-[#9CA3AF] underline">Terms and Conditions</a>.
      </p>
      </form>
          </div>
    </div>
    </section>
  );
};

export default Newsletter;


