import styled from "styled-components";

const Sinopse = styled.p`
    font-size: 18px;
    margin: 0;
    text-align: justify;

    @media (max-width: 1500px) {
        font-size: 16px;
    }
    @media (max-width: 1200px) {
        font-size: 14px;
    }
    @media (max-width: 1000px) {
        font-size: 11px;
    }
    @media (max-width: 830px) {
        font-size: 13px;
    }
    @media (max-width: 550px) {
        font-size: 11px;
    }
    @media (max-width: 380px) {
        font-size: 10px;
    }
`

export default Sinopse;