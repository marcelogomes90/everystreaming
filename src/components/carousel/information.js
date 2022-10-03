import styled from "styled-components";

const Information = styled.div`
    width: 40vw;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 3rem 3rem 3rem;

    @media (max-width: 1500px) {
        height: 32rem;
    }
    @media (max-width: 1200px) {
        height: 28rem;
    }
    @media (max-width: 1000px) {
        height: 26rem;
    }
    @media (max-width: 800px) {
        height: 20rem;
        width: 80vw;
    }
    @media (max-width: 500px) {
        height: 16rem;
        padding: 0 2rem 2rem 2rem;
    }
`

export default Information;