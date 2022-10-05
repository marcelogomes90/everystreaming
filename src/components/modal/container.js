import styled from "styled-components";
import { BackgroundDarkColor } from './../../style/colors';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${BackgroundDarkColor};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 0.99;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 7;
`

export default Container;