'use client';

import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import MainNav from '@/components/main-nav';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Navbar = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        className="flex flex-col md:flex-row h-[80px] md:h-20 items-center px-24 md:justify-between"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className='flex items-center gap-5 mt-5 mb-3'>
          <Avatar className='w-8 h-8 mb-0.5'>
            <AvatarImage src='https://github.com/Cleverton-Rocha/isadora-fisio/assets/141706599/257c4c20-eebe-4b22-b2f9-59778be95c99'
            />
            <AvatarFallback>ISA</AvatarFallback>
          </Avatar>

          <Link
            href="/"
            className='font-semibold text-lg md:text-3xl  text-lightDark subpixel-antialiased'
          >
            Isadora Neres.
          </Link>
        </div>
        <MainNav className='mx-6' />
      </div>
    </div>
  );
};

export default Navbar;