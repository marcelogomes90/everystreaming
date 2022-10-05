import styled from "styled-components";

const SecondaryText = styled.p`
    color: gray;
    font-size: 14px;
    font-weight: bold;

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
        font-size: 12px;
    }
    @media (max-width: 550px) {
        font-size: 10px;
    }
    @media (max-width: 380px) {
        font-size: 9px;
    }
`

export default SecondaryText;