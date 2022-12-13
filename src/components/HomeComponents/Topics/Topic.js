import { Link } from 'gatsby';
import React from 'react';

const Topic = ({topic}) => {
    return (
        <div className='col-6'>
            <Link className='text-decoration-none text-dark' to={topic.url}>
                <div className='topic d-flex align-items-center h-100 p-1 p-sm-2 py-lg-4'>
                    <div>{topic.icon}</div>
                    <h4 className='ms-2 fs-5'>{topic.title}</h4>
                </div>
            </Link>
        </div>
    );
};

export default Topic;