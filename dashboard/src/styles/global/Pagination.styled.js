import styled from "styled-components";

export const PageButton = styled.button`
    background-color: ${(props) => (props.$currentButton) ? `${(props.theme.currentButton)}` : `${(props.theme.buttonColor)}`};
    color:${(props) => (props.theme.color)};
    cursor: pointer;
    margin:8px 5px;
    width: 35px;
    height: 30px;
    outline: none;
    border: none;
`