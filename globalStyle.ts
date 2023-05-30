import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html, body {
    box-sizing: border-box;
    margin:0;
    padding:0;

    font-family: 'Montserrat';
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;