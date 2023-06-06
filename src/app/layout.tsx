'use client';
import { Fira_Sans_Condensed } from 'next/font/google';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../Components/Header/index';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@/styles/theme';
import { Footer } from '@/Components/Footer';
const roboto = Fira_Sans_Condensed({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={themeDefault}>
          <Header />
          {children}
          <Footer />
          <GlobalStyles />
        </ThemeProvider>
      </body>
    </html>
  );
}
