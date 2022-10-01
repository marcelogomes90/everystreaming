import styled from "styled-components";
import { PrimaryColor } from "../../style/colors";

const NavTitle = styled.a`
    color: ${PrimaryColor};
    font-weight: 600;
    font-size: 2rem;
    text-decoration: none;
    letter-spacing: 1px;

    @media (max-width: 1023px) {
        font-size: 1.75rem;
    }
    @media (max-width: 767px) {
        font-size: 1.5rem;
    }
`

export default NavTitle;