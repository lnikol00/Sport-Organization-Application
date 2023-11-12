import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: sticky;
    top: 0;
    z-index: 999;
`

export const Navbar = styled.nav`
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    z-index: 4;
    border-bottom:2px solid #ccc;
`

export const Profile = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:1px solid black;
        margin-left: 10px;
    }
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
        background-color:black;
        width: 1.5rem;
        height: 0.15em;
        border-radius:8px;
    }
`