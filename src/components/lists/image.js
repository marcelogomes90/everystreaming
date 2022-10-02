import styled from "styled-components";

const Image = styled.img`
    height: 18rem;
    border-radius: 1rem;

    @media (max-width: 767px) {
        height: 14rem;
    }

    @media (max-width: 370px) {
        height: 10rem;
    }
`

export default Image;