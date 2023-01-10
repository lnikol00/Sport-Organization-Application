import React from 'react'
import { Link } from 'react-router-dom'


import "./fanshop.css"

function Cart(props) {
    return (
        <div className='cart'>
            <h3>Vaša košarica</h3>
            <div className='top'>
                <Link to="/fan-shop">
                    <button className='continue' >Nastavi sa kupovinom</button>
                </Link>
                <button className='done'>Nastavi sa plaćanjem</button>
            </div>
        </div>
    )
}

export default Cart
