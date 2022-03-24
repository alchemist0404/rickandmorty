import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import Filter from './components/Filter';
import ImgHeader from '../../assets/img/header.png';
import CharacterList from './components/CharacterList';

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    
    return (
        <React.Fragment>
            <div className='header'>
                <img src={ImgHeader} alt="" />
            </div>
            <div className='content'>
                <div className='d-flex align-items-center justify-content-end w-100 p-3'>
                    <Filter onSearch={setQuery} />
                </div>
                <CharacterList query={query} currentPage={currentPage} setTotalPages={setTotalPages} />
                <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
            </div>
        </React.Fragment>
    )
}
