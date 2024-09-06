// _app.tsx (ou _main.tsx)
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
