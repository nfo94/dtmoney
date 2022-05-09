import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F0F2F5;
    --red: #E62E4D;
    --green: #33cc95;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969cb3;
    --background: #F0F2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 1rem = default font-size */
  /* font size 16px */
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`