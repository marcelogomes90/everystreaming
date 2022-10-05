import styled from "styled-components";
import { BackgroundColor } from "../../style/colors";

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 767px) {
        position: absolute;
        top: 4rem;
        right: 0;
        flex-direction: column;
        width: 80vw;
        height: 90vh;
        background-color: ${BackgroundColor};
        justify-content: flex-start;
        align-items: center;
        display: ${props => props.showMenu};
        padding-top: 2vh;
        z-index: 2;
    }
`

export default LinksContainer;