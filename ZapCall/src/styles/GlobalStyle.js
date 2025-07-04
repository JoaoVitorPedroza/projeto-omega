import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%; 
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: "Roboto", sans-serif; 
    background-color: #FB6B6B; 
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
    
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;