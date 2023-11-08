import React, { useState } from 'react'
import styles from "../../../styles/fan-shop/shipping/shipping.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../../../Redux/Actions/CartAction'
import { useNavigate } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as ImIcons from "react-icons/im"
import AnimatedPage from '../../../components/context/AnimatedPage'

function Shipping() {

    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart;
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode }))
        navigate("/payment")
    }

    return (
        <AnimatedPage>

            <div className={styles.mainContainer}>
                <form onSubmit={handleSubmit}>
                    <h5>Adresa dostave</h5>
                    <label>
                        <ImIcons.ImLocation />
                        <input
                            type='text'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder='Address'
                            required
                        />
                    </label>
                    <label>
                        <FaIcons.FaCity />
                        <input
                            type='text'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                            required
                        />
                    </label>
                    <label>
                        <AiIcons.AiOutlineFieldNumber />
                        <input
                            type='text'
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            placeholder='Postal Code'
                            required
                        />
                    </label>
                    <button>
                        Nastavi
                    </button>
                </form>
            </div>
        </AnimatedPage>
    )
}

export default Shipping