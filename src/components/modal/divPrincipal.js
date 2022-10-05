import styled from "styled-components";

const DivPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    opacity: 1;
    margin-bottom: 2rem;

    @media (max-width: 830px) {
        flex-direction: column;
    }
`

export default DivPrincipal;