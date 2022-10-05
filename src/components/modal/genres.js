import styled from "styled-components";
import { FontColor2, SecondaryColor } from "../../style/colors";

const Genres = styled.div`
    background-color: ${SecondaryColor};
    color: ${FontColor2};
    font-size: 14px;
    font-weight: 600;
    width: fit-content;
    height: fit-content;
    padding: 4px;
    border-radius: 0.5rem;
    margin-bottom: 0.75rem;

    @media (max-width: 1500px) {
        font-size: 12px;
    }
    @media (max-width: 1200px) {
        font-size: 11px;
    }
    @media (max-width: 1000px) {
        font-size: 10px;
    }
    @media (max-width: 830px) {
        font-size: 11px;
    }
    @media (max-width: 530px) {
        font-size: 10px;
    }
    @media (max-width: 380px) {
        font-size: 9px;
    }
`

export default Genres;