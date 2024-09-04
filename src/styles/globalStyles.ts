// styles/globalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* Reset de CSS */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Estilos globais */
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
        color: #333;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }

    button {
        cursor: pointer;
        font-family: inherit;
    }

    /* Outros estilos globais que você deseja adicionar */
`;

export default GlobalStyles;
