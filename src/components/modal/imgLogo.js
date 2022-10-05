import styled from "styled-components";

const ImgLogo = styled.img`
    width: 54px;
    border-radius: 10px;

    @media (max-width: 1500px) {
        width: 48px;
    }
    @media (max-width: 1200px) {
        width: 44px;
    }
    @media (max-width: 1000px) {
        width: 40px;
    }
    @media (max-width: 830px) {
        width: 38px;
    }
    @media (max-width: 550px) {
        width: 36px;
    }
    @media (max-width: 380px) {
        width: 32px;
    }
`

export default ImgLogo;
