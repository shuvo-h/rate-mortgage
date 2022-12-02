import React from 'react';

const Topic = ({topic}) => {
    return (
        <div className='col-6 '>
            <div className='topic d-flex align-items-center h-100 p-2'>
                <div>{topic.icon}</div>
                <h4 className='ms-2 fs-5'>{topic.title}</h4>
            </div>
        </div>
    );
};

export default Topic;