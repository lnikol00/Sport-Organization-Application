import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
`

export const Navbar = styled.nav`
    height: 65px;
    display: flex;
    background-color: ${(props) => (props.theme.backgroundColor)};
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    z-index: 4;
    border-bottom:1px solid ${(props) => (props.theme.color)};
    transition: all 0.5s;
`

export const Profile = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    gap: 10px;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:1px solid ${(props) => (props.theme.color)};
        margin-left: 10px;
    }
`

export const Theme = styled.div`
    cursor:pointer;
    font-size: 20px;
    padding-top: 5px;
    color: ${(props) => (props.theme.color)};
`

export const Bars = styled.div`
    display:flex;
    justify-content: center;
    gap:5px;
    align-items: center;
    flex-direction: column;
    height: 2.5em;
    width: 3em;
    cursor: pointer;

    div{
        background-color: ${(props) => (props.theme.color)};
        width: 1.5rem;
        height: 0.15em;
        border-radius:8px;
    }
`