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
import { Image } from '../../styles/global/Image.styled'
import { menu } from './MenuItems'
import { Link } from 'react-router-dom'
import logoImage from "../../utils/images/grb2.png"

function Sidebar({ children, open }) {

    return (
        <SidebarContainer>
            <Container $openNavbar={open}>
                <Logo $openNavbar={open} $resposniveJustifyContent="center" $responsiveMarginLeft="0">
                    <Title
                        fontSize="20px"
                        $openNavbar={open}
                    >
                        ULŠS
                    </Title>
                    <Image
                        width="90px"
                        height="60px"
                        src={logoImage}
                        alt='logo'
                    />
                </Logo>
                <Profile $openNavbar={open} $resposniveJustifyContent="center">
                    <Image
                        width="40px"
                        height="40px"
                        $responsiveMarginLeft="0"
                        $borderRadius="50%"
                        $openNavbar={open}
                        src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
                    />
                    <Title
                        fontSize="18px"
                        $openNavbar={open}
                    >
                        Ime Prezime
                    </Title>
                </Profile>
                {
                    menu.map((item, index) => {
                        return (
                            <NavLink $openNavbar={open}>
                                <Link to={item.url} key={index}>
                                    <Span fontSize="20px">{item.icon}</Span>
                                    <Title
                                        fontSize="20px"
                                        $openNavbar={open}
                                    >
                                        {item.title}
                                    </Title>
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
