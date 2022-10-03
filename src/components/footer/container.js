import styled from "styled-components";
import { BackgroundColor } from "../../style/colors";

const Container = styled.footer`
    height: 6rem;
    background-color: ${BackgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    gap: 0.75rem;
`

export default Container;