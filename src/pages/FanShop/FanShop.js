import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"

import styles from "./fanshop.module.css"
import { productsData } from './ProductsData'
import { useCart } from 'react-use-cart'




function FanShop() {

    const [query, setQuery] = useState("")
    const { addItem, totalItems } = useCart()
    const { products } = productsData

    return (
        <div className={styles.shopContainer}>
            <div className={styles.wraper}>
                <div className={styles.left}>
                    <span>HR</span>
                    <label>
                        <input onChange={event => setQuery(event.target.value)} />
                        <BsIcons.BsSearch />

                    </label>
                </div>
                <div className={styles.center}>
                    <h1>Službeni Web Shop</h1>
                </div>
                <div className={styles.right}>
                    <Link to="cart">
                        <AiIcons.AiOutlineShoppingCart className={styles.cart} />
                    </Link>

                    <span>{totalItems}</span>
                </div>
            </div>
            <hr />
            <div className={styles.container}>
                {products.filter(item => {
                    if (query === "") {
                        return item;
                    } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                        return item;
                    }
                }).map((item) => {
                    return (
                        <div className={styles.main} key={item.id}>
                            <img src={item.img} />
                            <div className={styles.info}>
                                <div className={styles.icon} onClick={() => addItem(item)}>
                                    <AiIcons.AiOutlineShoppingCart />
                                </div>
                                <Link to={`product/${item.id}`}>
                                    <div className={styles.icon}>
                                        <AiIcons.AiOutlineSearch />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FanShop
