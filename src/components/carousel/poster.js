import styled from "styled-components";

const Poster = styled.img`
    width: 60vw;
    height: 35rem;
    cursor: pointer;
    -webkit-mask-image:-webkit-gradient(linear, left top, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));

    @media (max-width: 1500px) {
        height: 34rem;
    }
    @media (max-width: 1200px) {
        height: 30rem;
    }
    @media (max-width: 1000px) {
        height: 28rem;
    }
    @media (max-width: 800px) {
        height: 20rem;
        width: 100vw;
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
    }
    @media (max-width: 500px) {
        height: 16rem;
    }
`

export default Poster;