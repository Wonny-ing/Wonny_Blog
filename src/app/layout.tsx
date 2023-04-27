import './globals.css';
import { Josefin_Sans, Source_Serif_Pro } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideBar from '@/components/SideBar';
import Inner from '@/components/Inner';

const sourceSerifPro = Source_Serif_Pro({
  weight: ['200', '300', '400', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
});
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

export const metadata = {
  title: 'My Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='ko'
      className={`${sourceSerifPro.variable} ${josefinSans.variable}`}
    >
      <body className='flex flex-col mx-auto bg-uBgColor '>
        <Inner>
          <Header />
          <main className='h-60'>
            <section className='grow'>{children}</section>
            <SideBar />
          </main>
        </Inner>
        <Footer />
      </body>
    </html>
  );
}
