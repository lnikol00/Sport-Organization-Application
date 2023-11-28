import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap: 20px;
    background-color:${(props) => (props.theme.backgroundColor)};
    width:${(props) => (props.$width)};
    border-radius:16px;
    padding: ${(props) => (props.$padding)};
    box-shadow:${(props) => (props.$boxShadow)};

    @media screen and (max-width:600px) {
        width: 280px;
    }
`

export const Input = styled.input`
    width:${(props) => (props.$width)};
    height:${(props) => (props.$height)};
    padding-left:10px;
    border-radius:4px;
    border:1px solid black;
    outline:none;
    font-size:16px;
    background-color: ${(props) => (props.theme.body)};
    color:${(props) => (props.theme.color)};
    transition: all 0.5s;

    &::placeholder{
        color:${(props) => (props.theme.color)};
    }
`
export const Select = styled.select`
    width: ${(props) => (props.$width)};
    height: ${(props) => (props.$height)};
    padding-left:10px;
    border-radius:4px;
    outline:none;
    font-size:16px;
    border:1px solid black;
    background-color: ${(props) => (props.theme.body)};
    color:${(props) => (props.theme.color)};
    transition: all 0.5s;
`

export const Option = styled.option`

`