import styled from "styled-components";

const Title = styled.h1`
    font-size: 3rem;

    @media (max-width: 1500px) {
        font-size: 2.5rem;
    }
    @media (max-width: 1200px) {
        font-size: 2rem;
    }
    @media (max-width: 1000px) {
        font-size: 1.5rem;
    }
    @media (max-width: 800px) {
        font-size: 2rem;
    }
    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
    
`

export default Title;