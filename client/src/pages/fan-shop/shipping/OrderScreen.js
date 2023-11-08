import React, { useEffect } from 'react'
import styles from "../../../styles/fan-shop/shipping/placeorder.module.css"
import AnimatedPage from '../../../components/context/AnimatedPage'
import * as BiIcons from "react-icons/bi"
import * as ImIcons from "react-icons/im"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getOrderDetails } from '../../../Redux/Actions/OrderAction'
import Error from '../../../components/messages/Error'
import Loading from '../../../components/messages/Loading'
import moment from "moment"
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function OrderScreen() {

    const params = useParams();
    const orderId = params.id
    const dispatch = useDispatch();
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails;

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [dispatch, orderId])

    return (
        <AnimatedPage>

            <div className={styles.mainContainer}>
                {
                    loading ? (
                        <Loading />
                    ) : error ? (
                        <Error>{error}</Error>
                    ) : (
                        <>
                            <div className={styles.infoContainer}>
                                <div>
                                    <div className={styles.icon}>
                                        <BiIcons.BiSolidUser />
                                    </div>
                                    <div className={styles.customer}>
                                        <h6>Kupac</h6>
                                        <span>{order.user.name}<br />{order.user.email}</span>
                                    </div>
                                </div>
                                <div >
                                    <div className={styles.icon}>
                                        <BiIcons.BiSolidTruck />
                                    </div>
                                    <div className={styles.orderInfo}>
                                        <h6>Informacije</h6>
                                        <span>Dostava: Croatia <br />Metoda plaćanja: {order.paymentMethod}</span>
                                        {order.isPaid ? (
                                            <div className={styles.messageContainer}>
                                                <p>PLaćeno {moment(order.paidAt).calendar()}</p>
                                            </div>
                                        ) : (
                                            <div className={`${styles.messageContainer} ${styles.danger}`}>
                                                <p>Nije Plaćeno</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div >
                                    <div className={styles.icon}>
                                        <ImIcons.ImLocation />
                                    </div>
                                    <div className={styles.delivery}>
                                        <h6>Dostava na</h6>
                                        <span>Adresa: {order.shippingAddress.address}<br />{order.shippingAddress.city}, {order.shippingAddress.postalCode}</span>
                                        {order.isDelivered ? (
                                            <div className={styles.messageContainer}>
                                                <p>Dostavljeno {moment(order.deliveredAt).calendar()}</p>
                                            </div>
                                        ) : (
                                            <div className={`${styles.messageContainer} ${styles.danger}`}>
                                                <p>Nije Dostavljeno</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.orderContainer}>
                                <div className={styles.itemContainer}>
                                    {order.orderItems.map((item) => (
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
                                        <span>€ {order.estimatedTotal}</span>
                                    </div>
                                    {/* <PayPalScriptProvider options={{ clientId: "test" }}>
                                        <PayPalButtons />
                                    </PayPalScriptProvider> */}
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </AnimatedPage>
    )
}

export default OrderScreen