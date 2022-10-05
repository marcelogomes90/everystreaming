import styled from "styled-components";

const Poster = styled.img`
    width: 24rem;
    height: 34rem;
    border-radius: 1rem;

    @media (max-width: 1500px) {
        width: 19rem;
        height: 28rem;
    }
    @media (max-width: 1200px) {
        width: 15rem;
        height: 22rem;
    }
    @media (max-width: 1000px) {
        width: 11rem;
        height: 17rem;
    }
    @media (max-width: 830px) {
        width: 17rem;
        height: 26rem;
    }
    @media (max-width: 550px) {
        width: 14rem;
        height: 20rem;
    }

    @media (max-width: 550px) and (max-height: 800px) {
        width: 11rem;
        height: 16rem;
    }
    @media (max-width: 380px) {
        width: 10rem;
        height: 14rem;
    }
`

export default Poster;