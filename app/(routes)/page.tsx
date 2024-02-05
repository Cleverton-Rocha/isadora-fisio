'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const MainPage = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="mx-auto px-5 md:px-24 mt-10 md:mt-20">
        {/* Home */}
        <div id='home' className='flex flex-col md:flex-row gap-10 md:gap-32 h-screen'>
          <div 
            className='flex flex-col items-center md:w-8/12'
            data-aos='fade-down'
            data-aos-delay='700'
          >
            <h1 
              className='text-[3rem] md:text-[8.5em] font-bold tracking-wide subpixel-antialiased' 
            >
              Dra. Isadora Neres
            </h1>
            <p className='text-sm md:text-2xl text-muted-foreground tracking-wider'>
              Olá, sou Isadora, fisioterapeuta dedicada. Minha abordagem combina habilidade técnica com uma personalidade extrovertida e amigável. Estou aqui para proporcionar não apenas tratamento físico, mas também um ambiente acolhedor para sua recuperação.
            </p>
          </div>
          <div 
            className='flex flex-col'
            data-aos='fade-left'
            data-aos-delay='900'
          >
            <h1 className='text-muted-foreground text-lg md:text-3xl tracking-wider md:mt-24'>ESPECIALIDADES</h1>
            <div className='flex flex-col md:mt-5 w-12/12 text-md md:text-2xl tracking-wider cursor-pointer'>
              <h1 className='py-8 border-b hover:border-black transition duration-500'>Ventosaterapia</h1>
              <h1 className='py-8 border-b hover:border-black transition duration-500'>Drenagem facial</h1>
              <h1 className='py-8 border-b hover:border-black transition duration-500'>Drenagem linfática</h1>
              <h1 className='py-8 border-b hover:border-black transition duration-500'>Reabilitação</h1>
            </div>
          </div>
        </div>
        {/* Home */}
      </div>
    </>
  );
};

export default MainPage;