import React, { useEffect } from 'react'
import styles from '../../styles/fan-shop/cart.module.css'
import AnimatedPage from '../../components/context/AnimatedPage'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from '../../Redux/Actions/CartAction'

function Cart() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const productId = params.id;
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    // Calculate price
    const estimatedTotal = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const checkoutHandler = () => {
        navigate("/shipping")
    }

    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h3><BsIcons.BsBag /> Moja Košarica</h3>
                {
                    cartItems.length === 0 ?
                        (
                            <div className={styles.emptyCartContainer}>
                                <h1>Vaša košarica je prazna</h1>
                                <p>Za kupnju putem Web Shopa potreban vam je korisnički račun. Ukoliko želite kreirati račun kliknite:</p>
                                <button><Link to="/register">REGISTRIRAJ ME</Link></button>
                                <p>Ukoliko imate kreiran račun kliknite:</p>
                                <button><Link to="/products">NASTAVI KUPNJU</Link></button>
                            </div>
                        ) :
                        (
                            <div className={styles.cartContainer}>
                                <div className={styles.shopContainer}>
                                    <div className={styles.total}>
                                        Ukupan broj proizvoda ({cartItems.length})
                                    </div>
                                    <div className={styles.items}>
                                        {cartItems.map((item) => (
                                            <div className={styles.in} key={item.product}>
                                                <div className={styles.close}>
                                                    <AiIcons.AiFillCloseCircle onClick={() => removeFromCartHandle(item.product)} />
                                                    <img src={item.image} alt={item.title} />
                                                </div>
                                                <div className={styles.title}>
                                                    <h5>{item.title}</h5>
                                                </div>
                                                <div>
                                                    <b>Pojedinačno: </b>
                                                    <b>€{item.price}</b>
                                                </div>
                                                <div>
                                                    <b>Količina</b>
                                                    <div className={styles.quantity}>
                                                        <select
                                                            value={item.qty}
                                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                        >
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <b>Veličina: </b>
                                                    <div className={styles.size}>
                                                        <select
                                                            value={item.size}
                                                            onChange={(e) => dispatch(addToCart(item.product, String(e.target.value)))}
                                                        >
                                                            <option>XXS</option>
                                                            <option>XS</option>
                                                            <option>S</option>
                                                            <option>M</option>
                                                            <option>L</option>
                                                            <option>XL</option>
                                                            <option>XXL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <b>Ukupno: </b>
                                                    <b>€ {Number(item.price * item.qty).toFixed(2)}</b>
                                                </div>
                                            </div>
                                        )
                                        )}
                                    </div>
                                    <div className={styles.estimatedTotal}>
                                        UKUPNO: €{Number(estimatedTotal)}
                                    </div>
                                    <hr />
                                    <div className={styles.buttons}>
                                        <div className={styles.continueShopping}>
                                            <button><Link to="/products">NASTAVI KUPNJU</Link></button>
                                        </div>
                                        <div className={styles.checkoutButton}>
                                            <button onClick={checkoutHandler}>
                                                <GiIcons.GiShoppingBag /> Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
            </div>
        </AnimatedPage >
    )
}

export default Cart
