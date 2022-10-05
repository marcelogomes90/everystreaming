import styled from "styled-components";

const ImgLogo = styled.img`
    width: 68px;
    border-radius: 10px;

    @media (max-width: 1500px) {
        width: 64px;
    }
    @media (max-width: 1200px) {
        width: 60px;
    }
    @media (max-width: 1000px) {
        width: 54px;
    }
    @media (max-width: 830px) {
        width: 50px;
    }
    @media (max-width: 550px) {
        width: 46px;
    }
    @media (max-width: 380px) {
        width: 42px;
    }
`

export default ImgLogo;
