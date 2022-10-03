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

  .swiper-pagination-bullet {
     background-color: rgba(131,111,169, 0.7);
  }

  .swiper-button-next, .swiper-button-prev {
    color: rgba(255,255,255, 0.7);
  }
  
`

export default GlobalStyle;