import styled from "styled-components";

const Image = styled.img`
    height: 18rem;
    width: 12rem;
    border-radius: 1rem;

    @media (max-width: 767px) {
        height: 14rem;
        width: 9.5rem;
    }

    @media (max-width: 370px) {
        height: 10rem;
        width: 7.5rem;
    }
`

export default Image;