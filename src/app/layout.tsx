'use client'
import { Roboto } from 'next/font/google'
import { GlobalStyles } from './GlobalStyles';
import { Header } from '../Components/Header/index';

const roboto = Roboto({weight:'400', subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <Header/>
        {children}
        <GlobalStyles/>
      </body>

    </html>
  )
}
