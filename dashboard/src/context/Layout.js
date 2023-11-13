import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/header/Sidebar";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../assets/Global.styled';

const Layout = () => {

    const [open, setOpen] = useState(true);

    const handleChange = () => {
        setOpen(!open)
    }

    const [theme, setTheme] = useState("light")
    const isDarkTheme = theme === "dark";

    const toggleTheme = () => {
        setTheme(isDarkTheme ? "light" : "dark")
    }

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <>
                <Sidebar open={open}>
                    <Header handleChange={handleChange} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
                    <Outlet />
                </Sidebar>
            </>
        </ThemeProvider>
    )
}

export default Layout
