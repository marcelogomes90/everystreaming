import styled from "styled-components";

const DivCarousel = styled.div`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

export default DivCarousel;