import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"

import "./fanshop.css"
import { productsData } from './ProductsData'
import Products from './Products'
import Cart from './Cart'



function FanShop() {
    const { products } = productsData
    const [counter, setCounter] = useState(0)

    return (
        <section id='shop'>
            <div className='wraper'>
                <div className='left'>
                    <span>HR</span>
                    <label>
                        <input></input>
                        <BsIcons.BsSearch />

                    </label>
                </div>
                <div className='center'>
                    <h1>Službeni Web Shop</h1>
                </div>
                <div className='right'>
                    <Link to="cart">
                        <AiIcons.AiOutlineShoppingCart className='cartt' />
                    </Link>

                    <span>{counter}</span>
                </div>
            </div>
            <hr />
            <Products products={products} />
        </section>
    )
}

export default FanShop
