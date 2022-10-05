import styled from "styled-components";
import { BackgroundLightColor, FontColor1 } from "../../style/colors";

const Input = styled.input`
    height: 1.75rem;
    width: 11rem;
    border: none;
    border-radius: 1rem;
    background-color: ${BackgroundLightColor};
    padding-left: 10px;
    color: ${FontColor1};
    margin: 0;

    &:focus {
        outline: none;
    }
`

export default Input;