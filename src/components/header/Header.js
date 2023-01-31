import React, { useState } from 'react'
import grb from "./img/grb2.png";
import { MenuItems } from "./MenuItmes"
import styles from './header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <nav className={styles.HeaderItems}>
            <img src={grb} alt="grb" />
            <h2 className={styles.HeaderLogo}>Udruga lađara Šarić Struga</h2>
            <div className={styles.MenuIcon} onClick={handleClick}>
                <i className={open ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={open ? `${styles.navMenu} ${styles.navMenuActive}` : `${styles.navMenu}`} onClick={handleClick}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className={styles.link}>
                                <a className={styles.navLinks} href={item.url}>
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

export default Header