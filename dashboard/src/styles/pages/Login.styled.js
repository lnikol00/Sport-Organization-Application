import styled from "styled-components";
import backgroundImage from "../../utils/images/background.jpg"

export const LoginContainer = styled.section`
    display:flex;
    justify-content: center;
    align-items:center;
    min-height: 100vh;
    width: 100%;
    background: url(${backgroundImage});
    background-position: center;
    background-size: cover;
`

export const FormBox = styled.div`
    position:relative;
    width:400px;
    height: 400px;
    background-color:transparent;
    border: 2px solid rgba(255,255,255,0.5);
    border-radius: 20px;
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items:center;
`

export const Form = styled.form`

`

export const Title = styled.h2`
    font-size:2em;
    color:#fff;
    text-align:center;
`

export const InputBox = styled.div`
    position:relative;
    margin: 30px 0;
    width: 310px;
    border-bottom: 2px solid #fff;

    svg{
        position: absolute;
        right: 8px;
        color: #fff;
        font-size: 1.2em;
        top: 20px;
    }
    
`
export const Input = styled.input`
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding:0 35px 0 5px;
    color: #fff;

    &:focus ~ label{
        top: -5px;
    }

    &:valid ~ label{
        top: -5px;
    }

`

export const Label = styled.label`
    position: absolute;
    top:50%;
    left: 5px;
    transform: translateY(-50%);
    color: #fff;
    font-size:1em;
    pointer-events: none;
    transition: .5s;
`

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: 600;
`
