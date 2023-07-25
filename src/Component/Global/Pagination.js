import React from 'react'
import { Button } from 'react-bootstrap';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='allpagi'>
            {pageNumbers.map(number => (
                <Button onClick={() => paginate(number)} key={number} className='pagiBtn'>{number}</Button>

            ))}

        </div>
    );
};

export default Pagination;