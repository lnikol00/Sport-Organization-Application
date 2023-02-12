import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { productsData } from './ProductsData'

import styles from "./fanshop.module.css"

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
        <div className={styles.item}>
            <div className={styles.wraper}>
                <div className={styles.center}>
                    <h2>Službeni Web Shop</h2>
                </div>
            </div>
            <hr />

            <div className={styles.wrapperContainer}>
                <div className={styles.image}>
                    <img src={img} alt='slika' />
                </div>

                <div className={styles.information}>
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {desc}
                    </p>
                    <b>{price} €</b>
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
                    <div className={styles.add}>
                        <Link to>
                            <button onClick={handleClick} className={styles.basket}>Dodaj u košaricu</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
