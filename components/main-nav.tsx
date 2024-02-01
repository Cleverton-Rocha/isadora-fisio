'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const MainNav = ({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>) => {



  const routes = [
    {
      href: '/#contato',
      label: 'Contato',
    },
    {
      href: '/#sobre-mim',
      label: 'Sobre mim',
    },
    {
      href: '/#servicos',
      label: 'Serviços',
    },
  ];

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={
            cn(
              'text-xs md:text-sm mt-2 md:mt-0 border border-zinc-400 rounded px-3 py-0.5 font-medium transition-colors hover:text-primary text-muted-foreground',
            )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;