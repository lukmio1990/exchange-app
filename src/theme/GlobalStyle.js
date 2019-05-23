import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&subset=latin-ext');
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    font-size:62.5%;
}

body{
    font-size:1.6rem;
    font-family:"Montserrat", sans-serif;
}
`;

export default GlobalStyle;
