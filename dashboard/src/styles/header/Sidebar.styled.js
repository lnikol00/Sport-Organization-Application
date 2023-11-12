import styled from "styled-components";

export const SidebarContainer = styled.div`
    display:flex;
`

export const Container = styled.div`
    width:350px;
    border-right:2px solid #ccc;
    height:100vh;
`

export const MainContainer = styled.div`
    width:100%;
`

export const Logo = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 0 20px 10px 0;

    img{
        width:100px;
        height: 70px;
    }
`

export const Profile = styled.div`
    display: flex;
    justify-content:flex-start;
    align-items: center;
    gap: 15px;
    padding:15px;

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border:1px solid black;
        margin-left: 10px;
    }
`

export const NavLink = styled.li`
    list-style: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin:5px 20px;
    padding:10px;
    cursor: pointer;

    &:hover{
        background-color:lightgray;
    }

    a{
        display:flex;
        justify-content:center;
        align-items: center;
        gap: 10px;
        color:black;
        text-decoration:none;
    }
`