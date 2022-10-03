import styled from "styled-components";

const Sinopse = styled.h1`
    text-align: justify;
    font-size: 1.25rem;
    font-weight: 400;

    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    @media (max-width: 800px) {
        font-size: 1.25rem;
    }
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

export default Sinopse;