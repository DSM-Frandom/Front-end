import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        font-family:Arial, Helvetica, sans-serif;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
`;

export default GlobalStyle;