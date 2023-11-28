import React, { useState } from 'react'
import {
    Bars,
    HeaderContainer,
    Profile,
    Navbar,
    Theme,
    Line
} from "../../styles/header/Header.styled"
import { Button } from '../../styles/global/Button.styled'
import * as BsIcons from "react-icons/bs"
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/UserAction"

function Header({ handleChange, toggleTheme, isDarkTheme }) {

    const [isToggled, setIsToggled] = useState(isDarkTheme)

    const onToggle = () => {
        setIsToggled(!isToggled)
        toggleTheme();
    }

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
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
                    <Button
                        $width="85px"
                        $height="35px"
                        $fontSize="16px"
                        onClick={logoutHandler}>Logout</Button>
                </Profile>
            </Navbar>
        </HeaderContainer >
    )
}

export default Header
