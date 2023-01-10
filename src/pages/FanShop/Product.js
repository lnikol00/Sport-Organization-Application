import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import * as AiIcons from "react-icons/ai"
import * as BsIcons from "react-icons/bs"

import "./fanshop.css"

import slika1 from "./img/slikaa1.png"



function Product() {

    const [counter, setCounter] = useState(0)
    const [number, setNumber] = useState(1)

    const divide = () => {
        setNumber(number === 1 ? number : number - 1)
    }

    const add = () => {
        setNumber(number + 1)
    }

    return (
        <div id='item'>
            <div className='wraper'>
                <div className='left'>
                    <span>HR</span>
                    <label>
                        <input></input>
                        <BsIcons.BsSearch />

                    </label>
                </div>
                <div className='center'>
                    <h2>Službeni Web Shop</h2>
                </div>
                <div className='right'>
                    <Link to="cart">
                        <AiIcons.AiOutlineShoppingCart className='cartt' />
                    </Link>
                    <span>{counter}</span>
                </div>
            </div>
            <hr />

            <div className='wrapper'>
                <div className='imagee'>
                    <img src={slika1} alt='slika' />
                </div>

                <div className='information'>
                    <h1>
                        Veslačka majica 2022.
                    </h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <span>€ 5.50</span>
                    <form>
                        <label>
                            Veličina:
                            <select>
                                <option>XXS</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>XXL</option>
                            </select>
                        </label>
                    </form>
                    <div className='add'>
                        <div className='amount'>
                            <button onClick={divide} className='minus'>-</button>
                            <span>{number}</span>
                            <button onClick={add} className='plus'>+</button>
                        </div>
                        <button className='basket'>Dodaj u košaricu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
