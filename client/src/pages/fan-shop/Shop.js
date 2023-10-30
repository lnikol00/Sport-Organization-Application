import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from '../../Redux/Actions/ProductActions'
import styles from "../../styles/fan-shop/shop.module.css"
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'
import AnimatedPage from '../../components/context/AnimatedPage'

function Shop() {

    const [query, setQuery] = useState("")

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])

    return (
        <AnimatedPage>
            <div className={styles.shopContainer}>
                <div className={styles.wraper}>
                    <div className={styles.left}>
                        <span>HR</span>
                        <label>
                            <input onChange={event => setQuery(event.target.value)} />
                            <BsIcons.BsSearch />
                        </label>
                    </div>
                    <div className={styles.center}>
                        <h1>Web Shop</h1>
                    </div>
                    <div className={styles.right}>
                        <Link to="cart">
                            <AiIcons.AiOutlineShoppingCart className={styles.cart} />
                        </Link>

                        <span></span>
                    </div>
                </div>
                <hr />
                <div className={styles.mainContainer}>
                    <div className={styles.menuContainer}>
                        {
                            loading ? (<Loading />) : error ? (<Error>Something went wrong</Error>)
                                :
                                (
                                    <>
                                        {products.filter(item => {
                                            if (query === "") {
                                                return item;
                                            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                                                return item;
                                            }
                                        }).map((item) => {
                                            return (
                                                <div className={styles.itemsContainer} key={item._id}>
                                                    <img src={item.img} alt={item.title} />
                                                    <div className={styles.info}>
                                                        <div className={styles.icon}>
                                                            <AiIcons.AiOutlineShoppingCart />
                                                        </div>
                                                        <Link to={`/products/${item._id}`}>
                                                            <div className={styles.icon}>
                                                                <AiIcons.AiOutlineSearch />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
                                )
                        }
                    </div>
                </div>
            </div>

        </AnimatedPage>

    )
}

export default Shop
