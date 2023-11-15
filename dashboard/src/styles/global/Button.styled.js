import styled from "styled-components";

export const Button = styled.button`
    width:${(props) => (props.$width)};
    height:${(props) => (props.$height)};
    border-radius:8px;
    border:none;
    outline:none;
    background-color:${(props) => (props.theme.buttonColor)};
    color:${(props) => (props.theme.color)};
    font-size:${(props) => (props.$fontSize)};
    cursor: pointer;
    box-shadow:${(props) => (props.$boxShadow)};
`