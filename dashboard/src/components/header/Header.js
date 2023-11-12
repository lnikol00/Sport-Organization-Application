import React from 'react'
import {
    Bars,
    HeaderContainer,
    Profile,
    Navbar,
} from "../../styles/header/Header.styled"


function Header() {
    return (
        <HeaderContainer>
            <Navbar>
                <Bars >
                    <div></div>
                    <div></div>
                    <div></div>
                </Bars>
                <Profile>
                    aa
                    <img src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg' />
                </Profile>
            </Navbar>
        </HeaderContainer>
    )
}

export default Header
