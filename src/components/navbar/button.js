import styled from "styled-components";
import { PrimaryColor } from "../../style/colors";

const Button = styled.div`
    cursor: pointer;
    display: none;

    &:hover {
        color: ${PrimaryColor};
        transition: 0.3s;
    }

    @media (max-width: 767px) {
        display: contents;
    }
`

export default Button;