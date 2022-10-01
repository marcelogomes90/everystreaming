import { createGlobalStyle } from 'styled-components';
import { BackgroundDarkColor, FontColor1 } from './colors'

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${BackgroundDarkColor};
    font-family: 'Ubuntu', sans-serif;
    color: ${FontColor1};
  }
  
`

export default GlobalStyle;