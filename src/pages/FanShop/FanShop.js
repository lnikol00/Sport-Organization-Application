import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"

import "./fanshop.css"
import { productsData } from './ProductsData'
import { useCart } from 'react-use-cart'




function FanShop() {

    const [query, setQuery] = useState("")
    const { addItem, totalItems } = useCart()
    const { products } = productsData

    return (
        <section id='shop'>
            <div className='wraper'>
                <div className='left'>
                    <span>HR</span>
                    <label>
                        <input onChange={event => setQuery(event.target.value)} />
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

                    <span>{totalItems}</span>
                </div>
            </div>
            <hr />
            <div className='container'>
                {products.filter(item => {
                    if (query === "") {
                        return item;
                    } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                        return item;
                    }
                }).map((item) => {
                    return (
                        <div className='main' key={item.id}>
                            <img src={item.img} />
                            <h1>{item.title}</h1>
                            <div className='info2'>
                                <div className='icon' onClick={() => addItem(item)}>
                                    <AiIcons.AiOutlineShoppingCart />
                                </div>
                                <Link to={`product/${item.id}`}>
                                    <div className='icon'>
                                        <AiIcons.AiOutlineSearch />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FanShop
