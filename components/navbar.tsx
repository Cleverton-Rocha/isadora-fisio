import { Stethoscope } from 'lucide-react';
import Link from 'next/link';
import MainNav from '@/components/main-nav';

const Navbar = () => {
  return (
    <div className="border b">
      <div className="flex flex-col md:flex-row h-[75px] md:h-16 items-center px-4 md:justify-evenly">
        <div className='flex items-center gap-2 mt-1'>
          <Stethoscope className='text-emerald-700 w-5 h-5 md:w-7 md:h-7' />
          <Link
            href="/"
            className='font-semibold text-lg md:text-2xl'
          >
            Dra. Isadora Neres
          </Link>
        </div>
        <MainNav className='mx-6' />
      </div>
    </div>
  );
};

export default Navbar;