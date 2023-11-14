import React, { useState } from 'react'
import {
    Bars,
    HeaderContainer,
    Profile,
    Navbar,
    Theme,
    Line
} from "../../styles/header/Header.styled"
import { Image } from '../../styles/global/Image.styled'
import * as BsIcons from "react-icons/bs"


function Header({ handleChange, toggleTheme, isDarkTheme }) {

    const [isToggled, setIsToggled] = useState(isDarkTheme)

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme();
    }

    return (
        <HeaderContainer>
            <Navbar>
                <Bars onClick={handleChange}>
                    <Line />
                    <Line />
                    <Line />
                </Bars>
                <Profile>
                    <Theme onClick={onToggle}>
                        {!isDarkTheme ? <BsIcons.BsMoon /> : <BsIcons.BsSun />}
                    </Theme>
                    <Image
                        $width="40px"
                        $height="40px"
                        $borderRadius="50%"
                        src='https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
                    />
                </Profile>
            </Navbar>
        </HeaderContainer >
    )
}

export default Header
