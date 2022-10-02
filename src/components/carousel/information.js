import styled from "styled-components";

const Information = styled.div`
    width: 40vw;
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3rem 3rem 3rem;

    @media (max-width: 800px) {
        width: 100vw;
    }
`

export default Information;