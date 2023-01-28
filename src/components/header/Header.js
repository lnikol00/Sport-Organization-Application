import React, { useState } from 'react'
import grb from "./img/grb2.png";
import { MenuItems } from "./MenuItmes"
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <nav className='HeaderItems'>
            <img src={grb} alt="grb" />
            <h2 className='header-logo'>Udruga lađara Šarić Struga</h2>
            <div className='menu-icon' onClick={handleClick}>
                <i className={open ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={open ? "nav-menu active" : "nav-menu"} onClick={handleClick}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.url} className='link'>
                                <a className={item.cName} href={item.url}>
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