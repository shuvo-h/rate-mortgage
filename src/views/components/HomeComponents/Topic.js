import React from 'react';

const Topic = ({topic}) => {

    return (
        <div>
            <div className='topic'>
                <div>{topic.icon}</div>
                <h3>{topic.title}</h3>
            </div>
        </div>
    );
};

export default Topic;