import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from '../../Redux/Actions/ProductActions'
import styles from "../../styles/fan-shop/shop.module.css"
import Loading from '../../utils/messages/Loading'
import Error from '../../utils/messages/Error'
import AnimatedPage from '../../context/AnimatedPage'
import Pagination from '../../hooks/Pagination'

function Shop() {

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(6);

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;

    const [keyword, setKeyword] = useState("")

    const params = useParams();
    const query = params.keyword;

    const [message, setMessage] = useState("");

    useEffect(() => {
        if (query) {
            setMessage(`Rezultati pretrage za '${query}'`)
        }
        else {
            setMessage("")
        }
    })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct(query));
    }, [dispatch, query])

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    const handleSearch = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/search/${keyword}`)
        }
        else {
            navigate("/products")
        }
    }

    return (
        <AnimatedPage>
            <div className={styles.shopContainer}>
                <div className={styles.wraper}>
                    <form onSubmit={handleSearch} className={styles.left}>
                        <span>HR</span>
                        <label>
                            <input onChange={(e) => setKeyword(e.target.value)} />
                            <button><BsIcons.BsSearch /></button>
                        </label>
                    </form>
                    <div className={styles.center}>
                        <h1>Web Shop</h1>
                    </div>
                    <div className={styles.right}>
                        <Link to="/cart">
                            <AiIcons.AiOutlineShoppingCart className={styles.cart} />
                        </Link>

                        <span>{cartItems.length}</span>
                    </div>
                </div>
                <hr />
                <h3>{message}</h3>
                <div className={styles.mainContainer}>
                    <div className={styles.menuContainer}>
                        {
                            loading ? (<Loading />) : error ? (<Error>Something went wrong</Error>)
                                :
                                (
                                    <>
                                        {products.slice(firstProductIndex, lastProductIndex).map((item) => {
                                            return (
                                                <div className={styles.itemsContainer} key={item._id}>
                                                    <img src={item.image} alt={item.title} />
                                                    <div className={styles.info}>
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
                <div className={styles.pagination}>
                    <Pagination
                        totalItems={products.length}
                        itemsPerPage={productsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>

        </AnimatedPage>

    )
}

export default Shop
