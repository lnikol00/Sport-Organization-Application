import React from 'react'
import styles from "../styles/hooks/pagination.module.css"

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={styles.main}>
            {
                pages.map((page, index) => {
                    return (
                        <button
                            className={page === currentPage ? `${styles.block} ${styles.active}` : `${styles.inactive} ${styles.block}`}
                            key={index}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Pagination