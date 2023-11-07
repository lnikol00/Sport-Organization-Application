import React, { useEffect, useState } from 'react'
import styles from "../../styles/fan-shop/product.module.css"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from '../../Redux/Actions/ProductActions'
import AnimatedPage from '../../components/context/AnimatedPage'

function SingleProduct() {
    let navigate = useNavigate();
    const params = useParams();
    const [qty, setQty] = useState(1);
    const productId = params.id;
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(productId))
    }, [dispatch, productId])

    const AddToCartHandle = (e) => {
        e.preventDefault();
        navigate(`/cart/${productId}?qty=${qty}`)
    }

    return (
        < AnimatedPage >
            <div className={styles.mainContainer}>
                <div className={styles.wraper}>
                    <div className={styles.center}>
                        <h1>Web Shop</h1>
                    </div>
                </div>
                <hr />
                {
                    loading ? (<p>Loading...</p>) : error ? (<p>Something went wrong!</p>)
                        :
                        (
                            <div className={styles.itemContainer}>
                                <div className={styles.image}>
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className={styles.description}>
                                    <h1>{product.title}</h1>
                                    <p>{product.description}</p>
                                    <b>€ {product.price}</b>
                                    <div className={styles.selectContainer}>
                                        <b>Quantity: </b>
                                        <select
                                            onChange={(e) => setQty(e.target.value)}
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
                                    <div className={styles.buttonContainer}>
                                        <button onClick={AddToCartHandle}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </AnimatedPage >
    )
}

export default SingleProduct
