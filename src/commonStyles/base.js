import { createGlobalStyle } from "styled-components";
// import { colors } from "./variables";
// import { font } from "./variables";
/* 
  body {
    font-family: 'Open Sans', sans-serif; 
    font-weight: ${font.fontWeightMain};
    font-size: ${font.fontMain};
    color: ${colors.black};
  } */
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
  }

  
  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden; 
  }

  a {text-decoration: none; color: inherit;}

  input {font: inherit;}

  button {
    font-family: inherit;
  }

  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  
  .container {
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  .App {
    display: grid;
    height: 100vh;
    grid-template-rows: 60px 10fr 40px;
  }
`;

export default GlobalStyle;
