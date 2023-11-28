import styled from "styled-components";

export const UserContainer = styled.div`
    padding: 30px 50px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:${(props) => (props.$gap)};
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
`

export const GridBox = styled.div`
    height:250px;
    width: 100%;
    border: 1px solid black;
    background: linear-gradient(to bottom, ${(props) => (props.theme.backgroundColor)} 35%, ${(props) => (props.theme.body)} 35%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px; 
    padding:20px 0 5px;

    img{
        background-color: ${(props) => (props.theme.body)};
        border: 1px solid black;
    }

    h1{
        display:block;
    }
    
    a{
        color:${(props) => (props.theme.link)};
    }
`