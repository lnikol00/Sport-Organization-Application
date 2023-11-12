import React from 'react'
import {
    SidebarContainer,
    Container,
    MainContainer,
    Logo,
    NavLink,
    Profile
} from '../../styles/header/Sidebar.styled'
import {
    Span,
    Title
} from '../../styles/global/Text.styled'
import { menu } from './MenuItems'
import { Link } from 'react-router-dom'
import logoImage from "../../utils/images/grb2.png"

function Sidebar({ children }) {
    return (
        <SidebarContainer>
            <Container>
                <Logo>
                    <img src={logoImage} alt='logo' />
                    <Title fontSize="20px">ULŠS</Title>
                </Logo>
                <Profile>
                    <img src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' />
                    <Title fontSize="18px">Ime Prezime</Title>
                </Profile>
                {
                    menu.map((item) => {
                        return (
                            <NavLink>
                                <Link to={item.url} key={item.title}>
                                    <Span fontSize="20px" padding="5px 0px 0px">{item.icon}</Span>
                                    <Title fontSize="20px">{item.title}</Title>
                                </Link>
                            </NavLink>

                        )
                    })
                }
            </Container>

            <MainContainer>
                {children}
            </MainContainer>

        </SidebarContainer>
    )
}

export default Sidebar
