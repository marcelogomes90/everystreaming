import styled from "styled-components";
import { FontColor1 } from "../../style/colors";

const Title = styled.h2`
    color: ${FontColor1};
    padding-left: 3rem;
    margin-top: 2.5rem;

    @media (max-width: 767px) {
        padding-left: 1rem;
    }
`

export default Title;