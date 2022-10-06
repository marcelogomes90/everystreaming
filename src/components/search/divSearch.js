import styled from "styled-components";
import { BackgroundLightColor, PrimaryDarkColor,  } from "../../style/colors";

const DivSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${BackgroundLightColor};
    height: 60px;
    width: 266px;
    white-space: pre-wrap;
    cursor: pointer;

    &:hover{
        background-color: ${PrimaryDarkColor};
    }
`

export default DivSearch;