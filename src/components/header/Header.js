import React, { Component } from 'react'
import grb from "./img/grb2.png";
import { MenuItems } from "./MenuItmes"
import './header.css'
import { Link } from 'react-router-dom';

class Header extends Component {
    state = { clicked: false }

    handleCliCk = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className='HeaderItems'>
                <img src={grb} />
                <h2 className='header-logo'>Udruga lađara Šarić Struga</h2>
                <div className='menu-icon' onClick={this.handleCliCk}>
                    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
}

export default Header