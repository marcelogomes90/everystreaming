import styled from "styled-components";
import { FontColor1, PrimaryColor } from './../../style/colors';

const CloseButton = styled.div`
    position: absolute;
    color: ${FontColor1};
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    opacity: 1;

    &:hover{
        color: ${PrimaryColor};
    }
`

export default CloseButton;