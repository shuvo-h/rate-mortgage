import React from 'react';

const Topic = ({topic}) => {

    return (
        <div className='col-6 '>
            <div className='topic d-flex align-items-center h-100 p-2'>
                <div>{topic.icon}</div>
                <h3 className='ms-2'>{topic.title}</h3>
            </div>
        </div>
    );
};

export default Topic;