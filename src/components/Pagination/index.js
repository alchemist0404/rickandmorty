import React from 'react'
import { Pagination as RStrapPagination, PaginationItem, PaginationLink } from 'reactstrap'
import { usePagination } from '../../contexts/usePagination';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
    const paginationRange = usePagination({
        currentPage,
        totalPageCount: totalPages,
        siblingCount: 1,
    });

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    if (currentPage === 0 || paginationRange.length < 2) {
        return <></>;
    }

    return (
        <RStrapPagination className='character-pagination'>
            <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
                <PaginationLink
                    href="#"
                    previous
                />
            </PaginationItem>
            {
                paginationRange.map((pageNumber, idx) => (
                    <PaginationItem active={pageNumber === currentPage} key={idx} onClick={() => pageNumber !== '...' && onPageChange(pageNumber)}>
                        <PaginationLink href="#">
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                ))
            }
            <PaginationItem disabled={currentPage === totalPages} onClick={onNext}>
                <PaginationLink
                    href="#"
                    next
                />
            </PaginationItem>
        </RStrapPagination>
    )
}
