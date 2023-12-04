import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 30px 50px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:${(props) => (props.$gap)};

    @media screen and (max-width: 800px) {
        flex-direction: ${(props) => (props.$flexDirection)};
        gap: 20px;

        input{
            margin: 10px 0 0;
        }
    }

    @media screen and (max-width: 600px) {

        flex-direction: column;
        gap: 10px;

        input{
            width: 200px;
        }
    }
`

export const Container = styled.div`
    margin-top: 30px;
    padding: 10px;
    border: 1px solid black;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    padding-top: 30px;
    gap: 20px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1,1fr);
    }
`

export const GridBox = styled.div`
    height:100%;
    width: 100%;
    border: 1px solid black;
    background-color: ${(props) => (props.theme.body)};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px; 
    padding-top: ${(props) => (props.$paddingTop)};

    img{
        background-color: ${(props) => (props.theme.body)};
    }

    h1{
        display:block;
        padding-left: 15px;
    }

    p{
        padding-left: 15px;
    }
    
    a{
        color:${(props) => (props.theme.link)};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 5px 20px ;

    button{
        background-color: transparent;
        border: 1px solid black;
        border-radius: 4px;

        &:nth-child(1){
            color: green;
        }

        &:nth-child(2){
            color: red;
        }

        &:hover{
           background-color:${(props) => (props.theme.buttonHover)};
        }
    }
`