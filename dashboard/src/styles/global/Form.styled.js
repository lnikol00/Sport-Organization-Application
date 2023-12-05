import styled from "styled-components";

export const Form = styled.form`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
    gap: 10px;
    background-color:${(props) => (props.theme.body)};
    width:60%;
    border: 1px solid ${(props) => (props.theme.color)};
    border-radius:4px;
    padding: 15px;
    margin-top: 30px;
    box-shadow:${(props) => (props.$boxShadow)};

    @media screen and (max-width:600px) {
        width: 280px;
    }
`

export const Label = styled.label`
    font-size:${(props) => (props.$fontSize)};
    color:${(props) => (props.theme.color)};
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

export const Textarea = styled.textarea`
    width:${(props) => (props.$width)};
    height:${(props) => (props.$height)};
    padding:10px 0 0 10px;
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