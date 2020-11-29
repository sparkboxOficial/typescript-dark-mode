import { createGlobalStyle } from 'styled-components';

interface IGlobalTheme {
  dark: boolean;
}

export default createGlobalStyle<IGlobalTheme>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ dark }) => dark ? '#08162B': '#fff'};
    color: ${({ dark }) => dark ? '#fff' : '#000000'};
    -webkit-font-smoothing: antialiased;
    transition: all 0.2s ease-in-out;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`