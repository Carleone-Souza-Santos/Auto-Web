import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    
  }

  body {
    background-color: #1a1621;
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    overflow: hidden;
  }
`;

export default GlobalStyle;
