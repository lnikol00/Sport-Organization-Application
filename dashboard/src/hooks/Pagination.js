import React from 'react'
import { PageButton } from '../styles/global/Pagination.styled';

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
                        <PageButton
                            $currentButton={page === currentPage}
                            key={index}
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </PageButton>
                    )
                })
            }
        </div>
    )
}

export default Pagination