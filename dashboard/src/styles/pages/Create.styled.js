import styled from "styled-components"

export const MainContainer = styled.div`
    padding: 30px 50px;

    h1{
        display: block;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        &:nth-child(1){
            background-color: ${(props) => (props.theme.decline)};
            color: white;
        }

        &:nth-child(3){
            background-color: ${(props) => (props.theme.accept)};
            color: ${(props) => (props.theme.acceptText)};
        }
    }
`

export const FormContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`