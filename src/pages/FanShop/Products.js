import React from 'react'
import { Link } from 'react-router-dom'


import * as AiIcons from "react-icons/ai"

import "./fanshop.css"


function Products(props) {
    const { products } = props
    return (
        <div className='container'>
            {products.map((item) => {
                return (
                    <div className='main' key={item.id}>
                        <img src={item.img} />
                        <div className='info2'>
                            <div className='icon'>
                                <AiIcons.AiOutlineShoppingCart />
                            </div>
                            <Link to={"product"}>
                                <div className='icon'>
                                    <AiIcons.AiOutlineSearch />
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
