import styled from "styled-components";
import { BackgroundColor } from "../../style/colors";

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 2rem;

    @media (max-width: 767px) {
        position: absolute;
        top: 8vh;
        right: 0;
        flex-direction: column;
        width: 60vw;
        height: 92vh;
        background-color: ${BackgroundColor};
        justify-content: flex-start;
        align-items: center;
        display: ${props => props.showDisplay || "none"};
    }
`

export default LinksContainer;