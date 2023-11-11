import React, { useState } from 'react'
import styles from "../../../styles/fan-shop/shipping/payment.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../../../Redux/Actions/CartAction'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../../../context/AnimatedPage'

function Payment() {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;
    const dispatch = useDispatch()

    const navigate = useNavigate()

    if (!shippingAddress) {
        navigate("/shipping")
    }

    const [paymentMethod, setPaymentMethod] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate("/placeorder")
    }


    return (
        <AnimatedPage>

            <div className={styles.mainContainer}>
                <form onSubmit={handleSubmit}>
                    <h5>Metoda plaćanja</h5>
                    <div className={styles.radioContainer}>
                        <div>
                            <input type='radio'
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod("PayPal")}
                            />
                            <label>PayPal ili Kreditna Kartica</label>
                        </div>
                        <div>
                            <input type='radio'
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod("Cash")}
                            />
                            <label>Gotovina</label>
                        </div>

                    </div>
                    <button>Nastavi</button>
                </form>
            </div>

        </AnimatedPage>
    )
}

export default Payment