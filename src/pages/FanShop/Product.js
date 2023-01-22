import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { productsData } from './ProductsData'

import "./fanshop.css"

import { useCart } from 'react-use-cart'



function Product() {

    const navigate = useNavigate()

    const handleClick = () => {
        addItem(item);
        navigate(-1);
    }

    const { id } = useParams()

    const { products } = productsData

    const item = products.find((item) => item.id === id)

    const { img, title, price, desc } = item

    const { addItem } = useCart()

    return (
        <div id='item'>
            <div className='wraper'>
                <div className='center'>
                    <h2>Službeni Web Shop</h2>
                </div>
            </div>
            <hr />

            <div className='wrapper'>
                <div className='imagee'>
                    <img src={img} alt='slika' />
                </div>

                <div className='information'>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {desc}
                    </p>
                    <span>{price}
                    </span>
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
                        <Link to>
                            <button onClick={handleClick} className='basket'>Dodaj u košaricu</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
