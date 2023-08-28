'use client';
import { Fira_Sans_Condensed } from 'next/font/google';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../Components/Header/index';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@/styles/theme';
import { Footer } from '@/Components/Footer';
import { NewCardsProvider } from '@/contexts/newCardsContext';
const roboto = Fira_Sans_Condensed({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={themeDefault}>
          <NewCardsProvider>
          <Header />
          {children}
          <Footer />
          <GlobalStyles />
          </NewCardsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
