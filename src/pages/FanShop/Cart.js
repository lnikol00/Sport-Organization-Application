import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import * as AiIcons from "react-icons/ai"


import "./fanshop.css"

function Cart() {

    const {
        isEmpty,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();


    if (isEmpty) return (
        <div className='cart'>
            <h3>Vaša košarica ({totalItems})</h3>
            <div className='top'>
                <Link to="/fan-shop">
                    <button className='continue' >Nastavi sa kupovinom</button>
                </Link>
                <button className='done'>Nastavi sa plaćanjem</button>
            </div>
            <div className='items'>
                <p>Vaša košarica je prazna</p>
            </div>
            <div className='total-price'>
                <span>Ukupna cijena: € {cartTotal}</span>
            </div>

        </div>

    )


    return (
        <div className='cart'>
            <h3>Vaša košarica ({totalItems})</h3>
            <div className='top'>
                <Link to="/fan-shop">
                    <button className='continue' >Nastavi sa kupovinom</button>
                </Link>
                <button className='done'>Nastavi sa plaćanjem</button>
            </div>
            <div className='items'>
                {items.map((item) => (
                    <div key={item.id} className="in">
                        <div className='product'>
                            <img src={item.img} />
                            <div className='details'>
                                <h5><b>Proizvod: </b>{item.title}</h5>
                                <span><b>ID: </b>{item.nmb}</span>
                            </div>
                        </div>

                        <div className='price'>
                            <div className='iznos'>
                                <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity === 1 ? item.quantity : item.quantity - 1)}
                                    className="minus"
                                >
                                    -
                                </button>
                                <span >{item.quantity}</span>
                                <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    className="plus"
                                >
                                    +
                                </button>
                            </div>
                            <span><b>Cijena: </b>{item.price}</span>
                        </div>

                        <div className='desc'>
                            <h5>Opis: </h5>
                            <p>{item.desc}</p>
                        </div>
                        <div>
                            <AiIcons.AiOutlineClose className='iks' onClick={() => removeItem(item.id)} />

                        </div>

                    </div>

                ))}

            </div>
            <div className='total-price'>
                <span>Ukupna cijena: € {cartTotal}</span>
            </div>

        </div>
    )
}

export default Cart
