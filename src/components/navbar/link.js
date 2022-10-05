import styled from "styled-components";
import { FontColor1, PrimaryLightColor } from "../../style/colors";

const Link = styled.a`
    text-decoration: none;
    color: ${FontColor1};
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;

    &:hover {
        color: ${PrimaryLightColor};
        transition: 0.3s;
    }
`

export default Link;