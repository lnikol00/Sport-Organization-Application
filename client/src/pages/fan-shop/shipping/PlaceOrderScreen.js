import React, { useEffect } from 'react'
import styles from "../../../styles/fan-shop/shipping/placeorder.module.css"
import * as BiIcons from "react-icons/bi"
import * as ImIcons from "react-icons/im"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { ORDER_CREATE_RESET } from "../../../Redux/Constants/OrderContants";
import { createOrder } from '../../../Redux/Actions/OrderAction'
import Error from '../../../utils/messages/Error'
import AnimatedPage from '../../../context/AnimatedPage'


function PlaceOrderScreen() {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart)

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    // Calculate price
    const estimatedTotal = cart.cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error } = orderCreate;

    const navigate = useNavigate();

    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [navigate, dispatch, success, order])

    const placeOrderHandler = (e) => {
        e.preventDefault();
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                estimatedTotal: estimatedTotal
            })
        )

    }

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.infoContainer}>
                    <div>
                        <div className={styles.icon}>
                            <BiIcons.BiSolidUser />
                        </div>
                        <div className={styles.customer}>
                            <h6>Kupac</h6>
                            <span>{userInfo.name}<br />{userInfo.email}</span>
                        </div>
                    </div>
                    <div >
                        <div className={styles.icon}>
                            <BiIcons.BiSolidTruck />
                        </div>
                        <div className={styles.orderInfo}>
                            <h6>Informacije</h6>
                            <span>Dostava: Croatia <br />Metoda plaćanja: {cart.paymentMethod}</span>
                        </div>
                    </div>
                    <div >
                        <div className={styles.icon}>
                            <ImIcons.ImLocation />
                        </div>
                        <div className={styles.delivery}>
                            <h6>Dostava na</h6>
                            <span>Adresa: {cart.shippingAddress.address}<br />{cart.shippingAddress.city}, {cart.shippingAddress.postalCode}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.orderContainer}>
                    <div className={styles.itemContainer}>
                        {cart.cartItems.map((item) => (
                            <div className={styles.order} key={item.product}>
                                <div className={styles.title}>
                                    <img src={item.image} alt={item.title} />
                                    <h5>{item.title}</h5>
                                </div>
                                <div className={styles.quantity}>
                                    <span>Količina</span>
                                    <div>
                                        {item.qty}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.price}>
                        <div className={styles.table}>
                            <b>Ukupna Cijena:</b>
                            <span>€ {estimatedTotal}</span>
                        </div>
                        <button onClick={placeOrderHandler}>NARUČI</button>
                        {error && (
                            <Error>
                                {error}
                            </Error>
                        )}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default PlaceOrderScreen