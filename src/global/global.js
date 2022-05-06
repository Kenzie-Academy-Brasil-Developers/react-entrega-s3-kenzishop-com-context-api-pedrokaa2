import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font-family: 'Nunito', sans-serif;
    outline: 0;
  }
  :root {
    --darkgrayish: #050505;
    --blueish: #1B9AAA;
    --white: #ffffff;
  }
  body {
    background-color: var(--white);
  }
`

export default GlobalStyles