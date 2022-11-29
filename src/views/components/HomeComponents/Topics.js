import React from 'react';
import Topic from './Topic';

const topics = [
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
    {icon:"Icon", title:"buy a home tips"},
]

const Topics = () => {
    return (
        <section style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem", borderTop:"1px solid skyblue", borderBottom:"1px solid skyblue", padding:"3rem 0"}} className="container">
            <div>
                <h2 style={{fontSize:"3rem", lineHeight:"3.5rem"}}>Popular topics</h2>
                <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"2rem"}}>
                    {
                        topics.map(topic => <Topic topic={topic} key={topic.title}></Topic>)
                    }
                </div>
            </div>
            <div>
                <img style={{width:"100%"}} src={"/assets/images/topic.png"} alt="topics" />
            </div>
        </section>
    );
};

export default Topics;