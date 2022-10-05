import styled from "styled-components";

const DivInformation = styled.div`
    flex-direction: column;
    width: 50rem;

    @media (max-width: 1500px) {
        width: 45rem;
    }
    @media (max-width: 1200px) {
        width: 42rem;
    }
    @media (max-width: 1000px) {
        width: 36rem;
    }
    @media (max-width: 830px) {
        width: 32rem;
    }
    @media (max-width: 550px) {
        width: 18rem;
    }
    @media (max-width: 380px) {
        width: 16rem;
    }
`

export default DivInformation;
