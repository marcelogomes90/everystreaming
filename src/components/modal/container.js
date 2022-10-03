import styled from "styled-components";
import { BackgroundColor } from './../../style/colors';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${BackgroundColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`

export default Container;