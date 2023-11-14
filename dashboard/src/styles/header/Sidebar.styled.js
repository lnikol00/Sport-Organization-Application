import styled from "styled-components";

export const SidebarContainer = styled.div`
    display:flex;
`

export const Container = styled.div`
    width:${(props) => (props.$openNavbar ? "350px" : "80px")};
    border-right:1px solid ${(props) => (props.theme.color)};
    height:100vh;
    transition: all 0.5s;
    background-color: ${(props) => (props.theme.backgroundColor)};
    color: ${(props) => (props.theme.color)};

    @media screen and (max-width:768px){
        width:${(props) => (props.$openNavbar ? "80px" : "0")};
    }
`

export const MainContainer = styled.div`
    width:100%;
    background-color:${(props) => (props.theme.body)};
`

export const Logo = styled.div`
    display:flex;
    justify-content:${(props) => (props.$openNavbar ? "space-between" : "center")};
    align-items:center;
    margin-left: ${(props) => (props.$openNavbar ? "20px" : "0")};
    margin-top: 5px;

    @media screen and (max-width:768px){
        display:${(props) => (props.$openNavbar ? "flex" : "none")};
        justify-content:${(props) => (props.$resposniveJustifyContent)};
        margin: ${(props) => (props.$responsiveMarginLeft)};

    }
`

export const Profile = styled.div`
    display: flex;
    justify-content:${(props) => (props.$openNavbar ? "flex-start" : "center")};
    align-items: center;
    gap: 15px;
    padding:15px;

    @media screen and (max-width:768px){
        display:${(props) => (props.$openNavbar ? "flex" : "none")};
        justify-content:${(props) => (props.$resposniveJustifyContent)};
    }
`

export const NavLink = styled.li`
    list-style: none;
    display: flex;  
    justify-content:center;
    align-items: ${(props) => (props.$openNavbar ? "flex-start" : "center")};
    flex-direction: column;
    margin:${(props) => (props.$openNavbar ? "5px 20px" : "5px 10px")};
    padding:10px;
    cursor: pointer;

    &:hover{
        background-color: ${(props) => (props.theme.hover)};
    }

    a{
        display:flex;
        justify-content:center;
        align-items: center;
        gap: 10px;
        color:black;
        text-decoration:none;
    }

    @media screen and (max-width:768px){
        display:${(props) => (props.$openNavbar ? "flex" : "none")};
        margin:${(props) => (props.$openNavbar ? "5px 10px" : "0")};
        align-items: ${(props) => (props.$openNavbar ? "center" : "none")};
    }
`