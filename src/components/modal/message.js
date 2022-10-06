import styled from "styled-components";

const Message = styled.h2`
    text-align: center;

    @media (max-width: 1500px) {
        font-size: 18px;
    }
    @media (max-width: 1200px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 830px) {
        font-size: 18px;
    }
    @media (max-width: 550px) {
        font-size: 14px;
    }
    @media (max-width: 380px) {
        font-size: 12px;
    }
`

export default Message;