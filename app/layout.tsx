import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dra. Isadora Neres | Fisioterapeuta',
  description: 'Tenha acesso aos meus serviços e descubra melhor quem eu sou ♡!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
      </body>

    </html>
  );
}
