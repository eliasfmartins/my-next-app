import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '@/styles/theme';
import { Footer } from '../Components/Footer';
import { Header } from '@/Components/Header';
import { GlobalStyles } from '@/app/GlobalStyles';
import { SearchContext } from '@/contexts/searchContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDefault}>
      <SearchContext>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyles />
      </SearchContext>
    </ThemeProvider>
  );
}

export default App;
