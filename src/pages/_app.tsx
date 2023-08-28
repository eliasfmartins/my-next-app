import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@/styles/theme';
import { Footer } from '../Components/Footer';
import { Header } from '@/Components/Header';
import { GlobalStyles } from '@/app/GlobalStyles';
import { SearchContext } from '@/contexts/searchContext';
import { NewCardsProvider } from '@/contexts/newCardsContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDefault}>
      <NewCardsProvider>
      <SearchContext>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyles />
      </SearchContext>
      </NewCardsProvider>
    </ThemeProvider>
  );
}

export default App;
