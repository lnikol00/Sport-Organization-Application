import React, { useState } from 'react'
import styles from '../../styles/header/header.module.css'
import { NavLink, Link } from 'react-router-dom';
import logoImage from "../../utils/images/header/grb2.png"
import { MenuItems } from './MenuItmes'
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../Redux/Actions/UserAction"
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
    const dispatch = useDispatch();

    const navbar = MenuItems;

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const [open, setOpen] = useState(false)
    const [menu_class, setMenuClass] = useState(`${styles.menuBars} ${styles.unclicked}`)

    const handleChange = () => {
        if (!open) {
            setMenuClass(`${styles.menuBars} ${styles.clicked}`)
        }
        else {
            setMenuClass(`${styles.menuBars} ${styles.unclicked}`)
        }
        setOpen(!open)
    }

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div className={styles.mainContainer}>
            <nav className={styles.navbarContainer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img alt='logo' src={logoImage} />
                    </Link>
                </div>
                <div className={styles.menuItem} onClick={handleChange}>
                    <div className={menu_class}></div>
                    <div className={menu_class}></div>
                </div>
                <div className={open ? `${styles.navbar} ${styles.navbarActive}` : `${styles.navbar}`}>
                    <ul className={styles.menu}>
                        {
                            navbar.map((items, index) => {
                                return (
                                    <li key={index} onClick={handleChange}><NavLink to={`${items.url}`}>{items.title}</NavLink></li>
                                )
                            })
                        }
                        {
                            userInfo ?
                                <li>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                color: "black",
                                                fontSize: "1.1em",
                                                padding: "0"
                                            }}>
                                            {userInfo.name}
                                        </Dropdown.Toggle>
                                        <img src={userInfo.image} />
                                        <Dropdown.Menu
                                            style={{
                                                backgroundColor: "yellow",
                                                border: "1px solid black"
                                            }}>
                                            <Dropdown.Item href="/user">Profile</Dropdown.Item>
                                            <Dropdown.Item href="#" onClick={logoutHandler}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                                :
                                <li onClick={handleChange}>
                                    <Link to="/login">
                                        Login
                                    </Link>
                                </li>
                        }
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Header