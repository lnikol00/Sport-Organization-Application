import React from 'react'
import styles from "../styles/hooks/pagination.module.css"

const Pagination = ({ totalItems, itemsPerPage, setCurrentPage, currentPage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page, index) => {
                    return (
                        <div
                            className={page === currentPage ? `${styles.block} ${styles.active}` : `${styles.inactive} ${styles.block}`}
                            key={index}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pagination