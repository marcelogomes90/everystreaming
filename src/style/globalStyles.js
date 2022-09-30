import { createGlobalStyle } from 'styled-components';
import { BackgroundColor } from './colors'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: ${BackgroundColor};
    font-family: 'Ubuntu', sans-serif;
  }
  
`

export default GlobalStyle;