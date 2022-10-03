import styled from "styled-components";

const Sinopse = styled.p`
    
    display: -webkit-box;
    text-align: justify;
    font-size: 1.25rem;
    overflow: hidden;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    @media (max-width: 800px) {
        font-size: 1.25rem;
        -webkit-line-clamp: 8;
    }
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`

export default Sinopse;