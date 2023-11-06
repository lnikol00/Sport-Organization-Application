import React, { useEffect, useState } from 'react'
import styles from "../../../styles/user/user.module.css"
import * as BiIcons from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from '../../../Redux/Actions/UserAction'
import AccountDetails from './AccountDetails'
import Orders from './Orders'
import { listMyOrders } from '../../../Redux/Actions/OrderAction'

function User() {

    const [change, setChange] = useState(false)

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading, error, orders } = orderListMy;

    useEffect(() => {
        dispatch(listMyOrders())
        dispatch(getUserDetails("profile"))
    }, [dispatch])

    return (
        <div className={styles.mainContainer}>
            <h1>My Account</h1>
            <div className={styles.infoContainer}>
                <div className={styles.chategories}>
                    <div className={styles.chategoriesInfo}>
                        <div>
                            <BiIcons.BiSolidUserCircle />
                        </div>
                        <span><b>User: </b>{userInfo.name}</span>
                    </div>
                </div>

                <div className={styles.data}>
                    <div className={styles.modes}>
                        <div
                            onClick={() => setChange(true)}
                            className={change ? `${styles.clicked}` : `${styles.notClicked}`}>
                            <button>Orders</button>

                        </div>
                        <div
                            onClick={() => setChange(false)}
                            className={change ? `${styles.notClicked}` : `${styles.clicked}`}>
                            <button>Account Details</button>
                        </div>
                    </div>
                    <div>
                        {change ?
                            <div className={styles.orders}>
                                <Orders orders={orders} loading={loading} error={error} />
                            </div>
                            :
                            <div className={styles.details}>
                                <AccountDetails />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User