import styled from "styled-components";
import { BackgroundColor } from "../../style/colors";

const Nav = styled.header`
    background: ${BackgroundColor};
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem 0 3rem;

    @media (max-width: 767px) {
        padding: 0 1rem 0 1rem;
    }
`

export default Nav;