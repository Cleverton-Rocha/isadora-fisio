import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const font = Poppins({
  subsets: ['latin'],
  weight: '400'
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

      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
