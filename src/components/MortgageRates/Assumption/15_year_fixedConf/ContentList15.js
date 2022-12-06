import React from 'react';

const list = [
    "What is a 15-year fixed rate mortgage?",
    "What is a good 15-year fixed mortgage rate?",
    "Average 15-year mortgage rates since 2018",
    "How to find the lowest 15-year mortgage rate",
    "Advantages of 15-year mortgages",
    "Disadvantages of 15-year mortgages",
    "15-year mortgages vs. 30-year mortgages",
    "What is the difference between a fixed interest rates mortgage and ARM?",
    "15-year refinancing vs. purchasing rates",
    "Is a 15-year fixed rate mortgage right for you?",
    "Guaranteed Rate’s 15-Year Mortgage",
]

const ContentList15 = () => {
    return (
        <section>
            <h1>Table of contents</h1>
            <div>
                {
                    list.map(item => <p key={item}>{item}</p>)
                }
            </div>
        </section>
    );
};

export default ContentList15;