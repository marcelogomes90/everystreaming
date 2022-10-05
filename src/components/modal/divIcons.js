import styled from "styled-components";

const Icons = styled.div`
    width: 26px;
    height: 26px;
    
    .icon {
        @media (max-width: 1500px) {
            width: 24px;
            height: 24px;
        }
        @media (max-width: 1200px) {
            width: 22px;
            height: 22px;
        }
        @media (max-width: 1000px) {
            width: 20px;
            height: 20px;
        }
        @media (max-width: 830px) {
            width: 22px;
            height: 22px;
        }
        @media (max-width: 550px) {
            width: 20px;
            height: 20px;
        }
        @media (max-width: 380px) {
            width: 18px;
            height: 18px;
        }
    }
`

export default Icons;