import styled from "styled-components";
import { PrimaryColor } from "../../style/colors";

const DivSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 60px;
    width: 266px;
    white-space: pre-wrap;
    cursor: pointer;

    &:hover{
        background-color: ${PrimaryColor};
    }
`

export default DivSearch;