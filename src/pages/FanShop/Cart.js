import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import * as AiIcons from "react-icons/ai"


import styles from "./fanshop.module.css"

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
        <div className={styles.cartContainer}>
            <h3>Vaša košarica ({totalItems})</h3>
            <div className={styles.topButtons}>
                <Link to="/fan-shop">
                    <button className={styles.continueButton} >Nastavi sa kupovinom</button>
                </Link>
                <button className={styles.doneButton}>Nastavi sa plaćanjem</button>
            </div>
            <div className={styles.items}>
                <p>Vaša košarica je prazna</p>
            </div>
            <div className={styles.totalPrice}>
                <span>Ukupna cijena: € {cartTotal}</span>
            </div>

        </div>

    )


    return (
        <div className={styles.cartContainer}>
            <h3>Vaša košarica ({totalItems})</h3>
            <div className={styles.topButtons}>
                <Link to="/fan-shop">
                    <button className={styles.continueButton} >Nastavi sa kupovinom</button>
                </Link>
                <button className={styles.doneButton}>Nastavi sa plaćanjem</button>
            </div>
            <div className={styles.items}>
                {items.map((item) => (
                    <div key={item.id} className={styles.in}>
                        <div className={styles.product}>
                            <img src={item.img} />
                            <div className={styles.details}>
                                <h5><b>Proizvod: </b>{item.title}</h5>
                                <span><b>ID: </b>{item.nmb}</span>
                            </div>
                        </div>

                        <div className={styles.price}>
                            <div className={styles.amount}>
                                <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity === 1 ? item.quantity : item.quantity - 1)}
                                    className={styles.subrtractButton}
                                >
                                    -
                                </button>
                                <span >{item.quantity}</span>
                                <button
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    className={styles.addButton}
                                >
                                    +
                                </button>
                            </div>
                            <span><b>Cijena: </b>{item.price}</span>
                        </div>

                        <div className={styles.desc}>
                            <h5>Opis: </h5>
                            <p>{item.desc}</p>
                        </div>
                        <div>
                            <AiIcons.AiOutlineClose className={styles.removeButton} onClick={() => removeItem(item.id)} />

                        </div>

                    </div>

                ))}

            </div>
            <div className={styles.totalPrice}>
                <span>Ukupna cijena: € {cartTotal}</span>
            </div>

        </div>
    )
}

export default Cart
