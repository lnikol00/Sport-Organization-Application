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
    Icon,
    Title
} from '../../styles/global/Text.styled'
import { Image } from '../../styles/global/Image.styled'
import { menu } from './MenuItems'
import { Link } from 'react-router-dom'
import logoImage from "../../utils/images/grb2.png"
import { useSelector } from 'react-redux'

function Sidebar({ children, open }) {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    return (
        <SidebarContainer>
            <Container $openNavbar={open}>
                <Logo $openNavbar={open} $resposniveJustifyContent="center" $responsiveMarginLeft="0">
                    <Title
                        $fontSize="20px"
                        $openNavbar={open}
                        $responsiveTitle="none"
                    >
                        ULŠS
                    </Title>
                    <Image
                        $width="90px"
                        $height="60px"
                        src={logoImage}
                        alt='logo'
                    />
                </Logo>
                <Profile $openNavbar={open} $resposniveJustifyContent="center">
                    <Image
                        $width="40px"
                        $height="40px"
                        $responsiveMarginLeft="0"
                        $borderRadius="50%"
                        $openNavbar={open}
                        src={userInfo.image}
                        alt={userInfo.name}
                    />
                    <Title
                        $fontSize="18px"
                        $openNavbar={open}
                        $responsiveTitle="none"
                    >
                        {userInfo.name}
                    </Title>
                </Profile>
                {
                    menu.map((item, index) => {
                        return (
                            <NavLink $openNavbar={open}>
                                <Link to={item.url} key={index}>
                                    <Icon
                                        $fontSize="20px"
                                        $border="none"
                                    >
                                        {item.icon}
                                    </Icon>
                                    <Title
                                        $fontSize="20px"
                                        $openNavbar={open}
                                        $responsiveTitle="none"
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
