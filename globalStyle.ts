import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html, body {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: yellow !important; // the important is just to show that the style works!
}

`;