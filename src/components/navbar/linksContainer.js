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
        height: 90vh;
        background-color: ${BackgroundColor};
        justify-content: flex-start;
        align-items: center;
        transform: ${props => props.showMenu};
        padding-top: 2vh;
        transition: transform 0.3s ease-in;
        z-index: 2;
    }
`

export default LinksContainer;