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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    opacity: 0.98;
    border-radius: 1rem;
`

export default Container;