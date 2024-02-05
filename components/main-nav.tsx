'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';


const MainNav = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {

  const routes = [
    {
      href: '#home',
      label: 'Home',
    },
    {
      href: '#especialidades',
      label: 'Especialidades',
    },
    {
      href: '#sobre',
      label: 'Sobre',
    },
    {
      href: '#contato',
      label: 'Contato',
    },
  ];

  return (
    <nav
      className={cn('flex items-center space-x-1 lg:space-x-6 md:bg-white md:rounded-none bg-gray-100 rounded-full', className)}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={
            cn(
              'text-xs md:text-2xl md:mt-0 subpixel-antialiased font-medium spacing transition duration-300 ease-in-out text-lightDark hover:bg-black hover:text-white p-4 rounded-full',
            )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;